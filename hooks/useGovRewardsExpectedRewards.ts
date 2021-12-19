import { usexFOLDStaked } from '@/hooks/view/usexFOLDStaked';
import { GovRewards, DOMODAO as DictatorDAO  } from '@/contracts/types';
import { btof } from '@/utils/bn';
import useSWR from 'swr';
import { useGovRewards, useTokenContract } from './useContract';

function getGovRewardsExpectedRewards(
  xFOLDUSDC: DictatorDAO,
  govRewards: GovRewards,
) {
  return async (_: string, userAddress: string) => {
    const balanceOf = await xFOLDUSDC.balanceOf(userAddress);

    const xfoldStaked = balanceOf;

    const rewardsForEpoch = await govRewards.getRewardsForEpoch();

    const expectedRewards =
      (btof(balanceOf) / btof(xfoldStaked)) * btof(rewardsForEpoch);

    return expectedRewards;
  };
}

export default function useGovRewardsExpectedRewards(userAddress: string) {
  const xFOLDUSDC = usexFOLDStaked();

  const govRewards = useGovRewards();

  const shouldFetch =
    !!govRewards && !!xFOLDUSDC && typeof userAddress === 'string';

  return useSWR(
    shouldFetch ? ['GovRewardsExpectedRewards', userAddress] : null,
    getGovRewardsExpectedRewards(xFOLDUSDC, govRewards),
    {
      shouldRetryOnError: false,
    },
  );
}
