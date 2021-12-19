import { CONTRACT_ADDRESSES } from '@/constants/contracts';
import { Contract } from '@ethersproject/contracts';
import type { DOMODAO as DictatorDAO } from '@/contracts/types';
import type { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';
import useSWR from 'swr';
import { useDictatorDAO } from './useContract';
import { DOMODAOInterface } from '@/contracts/types/DictatorDAO';

function getGovRewardsAPY(contract: DictatorDAO) {
  return async () => {
    const totalSupply = 2_000_000;
    //(Date.now());

    const getRewardsForEpoch = 30;

    const rewardsForEpoch: number = await getRewardsForEpoch;

    const totalRewards = rewardsForEpoch;

    const apy =
      (parseFloat(formatUnits(totalRewards)) /
        parseFloat(formatUnits(totalSupply))) *
      100;

    return apy;
  };
}

export default function useDictatorDAOAPY() {
  const contract = useDictatorDAO();

  const shouldFetch = !!contract;

  return useSWR(
    shouldFetch ? ['GovRewardsAPY'] : null,
    getGovRewardsAPY(contract),
  );
}
