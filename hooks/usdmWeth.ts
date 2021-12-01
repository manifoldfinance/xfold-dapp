import { CONTRACT_ADDRESSES } from '@/constants/contracts';
import { LP_EPOCH_REWARDS } from '@/constants/numbers';
import ERC20_ABI from '@/contracts/ERC20.json';
import type {
  ERC20,
  LPRewards,
  Staking,
  UniswapV2Pair,
} from '@/contracts/types';
import UniswapV2Pair_ABI from '@/contracts/UniswapV2Pair.json';
import { getETHPrice } from '@/lib/coingecko';
import { Contract } from '@ethersproject/contracts';
import type { Web3Provider } from '@ethersproject/providers';
import { formatUnits } from '@ethersproject/units';
import useSWR from 'swr';
import { usexFOLDWETHRewards, useStaking } from './useContract';
import usexFOLDPrice from './usexFOLDPrice';
import useWeb3Store from './useWeb3Store';

function getxFOLDWETHLPPrice(lpRewards: LPRewards, library: Web3Provider) {
  return async () => {
    const poolAddress = await lpRewards.depositLP();

    const uniswapV2Pair = new Contract(
      poolAddress,
      UniswapV2Pair_ABI,
      library.getSigner(),
    ) as UniswapV2Pair;

    const totalSupply = await uniswapV2Pair.totalSupply();

    const reserves = await uniswapV2Pair.getReserves();

    const [, reserve1] = reserves;

    const ethPrice = await getETHPrice();

    const wethReserve = parseFloat(formatUnits(reserve1, 18));

    const wethReserveValue = wethReserve * ethPrice;

    const supply = parseFloat(formatUnits(totalSupply, 18));

    return (wethReserveValue / supply) * 2;
  };
}

export function usexFOLDWETHLPPrice() {
  const library = useWeb3Store((state) => state.library);
  const chainId = useWeb3Store((state) => state.chainId);

  const lpRewards = usexFOLDWETHRewards();

  const shouldFetch = !!library && !!lpRewards && typeof chainId === 'number';

  return useSWR(
    shouldFetch ? ['xFOLDWETHLPPrice', chainId] : null,
    getxFOLDWETHLPPrice(lpRewards, library),
  );
}

function getxFOLDWETHLPRewardsAPY(lpRewards: LPRewards, library: Web3Provider) {
  return async (
    _: string,
    xfoldPrice: number,
    lpPrice: number,
    chainId: number,
  ) => {
    const poolAddress = await lpRewards.depositLP();

    const poolTokenContract = new Contract(
      poolAddress,
      ERC20_ABI,
      library.getSigner(),
    ) as ERC20;

    const totalStaked = await poolTokenContract.balanceOf(
      CONTRACT_ADDRESSES.Staking[chainId],
    );

    const totalUSDValueStaked =
      parseFloat(formatUnits(totalStaked, 18)) * lpPrice;

    const totalRewards = LP_EPOCH_REWARDS * 52;

    const totalUSDRewards = totalRewards * xfoldPrice;

    const apy = (totalUSDRewards / totalUSDValueStaked) * 100;

    return apy;
  };
}

export function usexFOLDWETHLPRewardsAPY() {
  const library = useWeb3Store((state) => state.library);
  const chainId = useWeb3Store((state) => state.chainId);

  const lpRewards = usexFOLDWETHRewards();

  const { data: xfoldPrice } = usexFOLDPrice();
  const { data: lpPrice } = usexFOLDWETHLPPrice();

  const shouldFetch =
    !!lpRewards &&
    !!library &&
    typeof xfoldPrice === 'number' &&
    typeof lpPrice === 'number' &&
    typeof chainId === 'number';

  return useSWR(
    shouldFetch
      ? ['xFOLDWETHLPRewardsAPY', xfoldPrice, lpPrice, chainId]
      : null,
    getxFOLDWETHLPRewardsAPY(lpRewards, library),
  );
}

function getxFOLDWETHLPRewardsExpectedRewards(
  staking: Staking,
  lpRewards: LPRewards,
  library: Web3Provider,
) {
  return async (_: string, userAddress: string) => {
    const poolAddress = await lpRewards.depositLP();

    const poolTokenContract = new Contract(
      poolAddress,
      ERC20_ABI,
      library.getSigner(),
    ) as ERC20;

    const balanceLocked = await staking.balanceLocked(userAddress, poolAddress);

    const balanceOf = await poolTokenContract.balanceOf(staking.address);

    return (
      (parseFloat(formatUnits(balanceLocked, 18)) /
        parseFloat(formatUnits(balanceOf, 18))) *
      LP_EPOCH_REWARDS
    );
  };
}

export default function usexFOLDWETHLPRewardsExpectedRewards(
  userAddress: string,
) {
  const library = useWeb3Store((state) => state.library);

  const staking = useStaking();

  const lpRewards = usexFOLDWETHRewards();

  const shouldFetch =
    !!library && !!staking && !!lpRewards && typeof userAddress === 'string';

  return useSWR(
    shouldFetch ? ['xFOLDWETHLPRewardsExpectedRewards', userAddress] : null,
    getxFOLDWETHLPRewardsExpectedRewards(staking, lpRewards, library),
    {
      shouldRetryOnError: false,
    },
  );
}
