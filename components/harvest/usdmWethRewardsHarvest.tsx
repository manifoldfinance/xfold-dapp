import usexFOLDWETHLPRewardsExpectedRewards, {
  usexFOLDWETHLPRewardsAPY,
} from '@/hooks/xfoldWeth';
import { usexFOLDWETHRewards } from '@/hooks/useContract';
import useFormattedBigNumber from '@/hooks/useFormattedBigNumber';
import useWeb3Store from '@/hooks/useWeb3Store';
import useHarvestableUserRewards from '@/hooks/view/useHarvestableUserRewards';
import formatNumber from '@/utils/formatNumber';
import handleError from '@/utils/handleError';
import type { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { TransactionToast } from '../customToast';
import HarvestRewardsCard from './harvestRewardsCard';

export default function xFOLDWETHRewardsHarvest() {
  const account = useWeb3Store((state) => state.account);
  const chainId = useWeb3Store((state) => state.chainId);

  const lpRewards = usexFOLDWETHRewards();

  const { data: apy } = usexFOLDWETHLPRewardsAPY();

  const { data: rewards, mutate } = useHarvestableUserRewards(
    account,
    lpRewards?.address,
  );

  const { data: expectedRewards } =
    usexFOLDWETHLPRewardsExpectedRewards(account);

  const formattedRewards = useFormattedBigNumber(rewards);

  const formattedExpectedRewards = formatNumber(expectedRewards);

  async function harvest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const _id = toast.loading('Waiting for confirmation');

    try {
      const transaction = await lpRewards.massHarvest();

      toast.loading(
        <TransactionToast
          message={`Harvest ${formattedRewards} xFOLD`}
          chainId={chainId}
          hash={transaction.hash}
        />,
        { id: _id },
      );

      await transaction.wait();

      toast.success(
        <TransactionToast
          message={`Harvest ${formattedRewards} xFOLD`}
          chainId={chainId}
          hash={transaction.hash}
        />,
        { id: _id },
      );

      mutate();
    } catch (error) {
      handleError(error, _id);
    }
  }

  return (
    <HarvestRewardsCard
      apy={apy}
      formattedRewards={formattedRewards}
      formattedExpectedRewards={formattedExpectedRewards}
      onSubmit={harvest}
      rewards={rewards}
      title="xFOLD/ETH Pool Rewards"
    />
  );
}
