import { CONTRACT_ADDRESSES } from '@/constants/contracts';
import BasketBalancer_ABI from '@/contracts/BasketBalancer.json';
import ERC20_ABI from '@/contracts/ERC20.json';
import GovRewards_ABI from '@/contracts/GovRewards.json';
import LPRewards_ABI from '@/contracts/LPRewards.json';
import PoolRouter_ABI from '@/contracts/PoolRouter.json';
import Bddao_ABI from '@/contracts/bddao.json';
import xFOLDFacet_ABI from '@/contracts/xFOLDFacet.json';
import FoldWrapper_ABI from '@/contracts/FoldWrapper.json';
import Staking_ABI from '@/contracts/Staking.json';
import type {
  BasketBalancer,
  ERC20,
  GovRewards,
  LPRewards,
  PoolRouter,
  Bddao,
  xFOLDFacet,
  FoldWrapper,
  Staking,
  UniswapV2Pair,
  WrappingRewards,
} from '@/contracts/types';
import UniswapV2Pair_ABI from '@/contracts/UniswapV2Pair.json';
import WrappingRewards_ABI from '@/contracts/WrappingRewards.json';
import { Contract } from '@ethersproject/contracts';
import { useMemo } from 'react';
import useWeb3Store, { State } from './useWeb3Store';

const chainIdSelector = (state: State) => state.chainId;
const accountSelector = (state: State) => state.account;
const librarySelector = (state: State) => state.library;

export default function useContract<T extends Contract = Contract>(
  address: string,
  ABI: any,
): T | null {
  const account = useWeb3Store(accountSelector);
  const library = useWeb3Store(librarySelector);

  return useMemo(() => {
    if (!address || !ABI || !library) {
      return null;
    }

    try {
      return new Contract(address, ABI, library.getSigner(account));
    } catch (error) {
      console.error('Failed To Get Contract', error);

      return null;
    }
  }, [address, ABI, library, account]) as T;
}

export function useTokenContract(tokenAddress?: string) {
  return useContract<ERC20>(tokenAddress, ERC20_ABI);
}

export function usePoolRouter() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<PoolRouter>(
    CONTRACT_ADDRESSES.PoolRouter[chainId],
    PoolRouter_ABI,
  );
}

export function useGovRewards() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<GovRewards>(
    CONTRACT_ADDRESSES.GovRewards[chainId],
    GovRewards_ABI,
  );
}

export function useBasketBalancer() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<BasketBalancer>(
    CONTRACT_ADDRESSES.BasketBalancer[chainId],
    BasketBalancer_ABI,
  );
}

export function useWrappingRewards() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<WrappingRewards>(
    CONTRACT_ADDRESSES.WrappingRewards[chainId],
    WrappingRewards_ABI,
  );
}

export function useUniswapV2Pair(tokenAddress: string) {
  return useContract<UniswapV2Pair>(tokenAddress, UniswapV2Pair_ABI);
}

export function useStaking() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<Staking>(CONTRACT_ADDRESSES.Staking[chainId], Staking_ABI);
}

export function useFoldWrapper() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<FoldWrapper>(
    CONTRACT_ADDRESSES.FoldWrapper[chainId],
    FoldWrapper_ABI,
  );
}

export function usexFOLDFacetProxy() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<xFOLDFacet>(
    CONTRACT_ADDRESSES.xFOLDFacetProxy[chainId],
    xFOLDFacet_ABI,
  );
}

export function useBddao() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<Bddao>(CONTRACT_ADDRESSES.bddao[chainId], Bddao_ABI);
}

export function useFOLDUSDCRewards() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<LPRewards>(
    CONTRACT_ADDRESSES.LPRewardsFOLDUSDC[chainId],
    LPRewards_ABI,
  );
}

export function usexFOLDWETHRewards() {
  const chainId = useWeb3Store(chainIdSelector);

  return useContract<LPRewards>(
    CONTRACT_ADDRESSES.LPRewardsxFOLDWETH[chainId],
    LPRewards_ABI,
  );
}
