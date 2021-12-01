import { MIN_INPUT_VALUE } from '@/constants/numbers';
import { TOKEN_ADDRESSES } from '@/constants/tokens';
import { usexFOLDFacetProxy } from '@/hooks/useContract';
import useFormattedBigNumber from '@/hooks/useFormattedBigNumber';
import useInput from '@/hooks/useInput';
import useWeb3Store from '@/hooks/useWeb3Store';
import usexFOLDStaked from '@/hooks/view/usexFOLDStaked';
import useTokenBalance from '@/hooks/view/useTokenBalance';
import handleError from '@/utils/handleError';
import { formatUnits, parseUnits } from '@ethersproject/units';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { FormEvent } from 'react';
import toast from 'react-hot-toast';
import Button, { MaxButton } from '../button';
import { TransactionToast } from '../customToast';
import NumericalInput from '../numericalInput';
import { TokenSingle } from '../tokenSelect';

dayjs.extend(relativeTime);

export default function WithdrawStake() {
  const account = useWeb3Store((state) => state.account);
  const chainId = useWeb3Store((state) => state.chainId);

  const { mutate: xfoldBalanceMutate } = useTokenBalance(
    account,
    TOKEN_ADDRESSES.xFOLD[chainId],
  );

  const { data: xfoldStaked, mutate: xfoldStakedMutate } = usexFOLDStaked();

  const USDFacet = usexFOLDFacetProxy();

  const withdrawInput = useInput();

  const formattedxFOLDStaked = useFormattedBigNumber(xfoldStaked);

  async function withdrawxFOLD(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const _id = toast.loading('Waiting for confirmation');

    try {
      const withdrawAmount = withdrawInput.value;

      if (Number(withdrawAmount) <= MIN_INPUT_VALUE) {
        throw new Error(`Minium Withdraw: ${MIN_INPUT_VALUE} xFOLD`);
      }

      const amount = parseUnits(withdrawAmount);

      if (amount.gt(xfoldStaked)) {
        throw new Error(`Maximum Withdraw: ${formattedxFOLDStaked} xFOLD`);
      }

      const transaction = await USDFacet.withdraw(amount);

      withdrawInput.clear();

      toast.loading(
        <TransactionToast
          hash={transaction.hash}
          chainId={chainId}
          message={`Withdraw ${withdrawAmount} xFOLD`}
        />,
        { id: _id },
      );

      await transaction.wait();

      toast.success(
        <TransactionToast
          hash={transaction.hash}
          chainId={chainId}
          message={`Withdraw ${withdrawAmount} xFOLD`}
        />,
        { id: _id },
      );

      xfoldStakedMutate();
      xfoldBalanceMutate();
    } catch (error) {
      handleError(error, _id);
    }
  }

  const inputIsMax =
    !!xfoldStaked && withdrawInput.value === formatUnits(xfoldStaked);

  const setMax = () => {
    withdrawInput.setValue(formatUnits(xfoldStaked));
  };

  return (
    <form method="POST" onSubmit={withdrawxFOLD} className="space-y-4">
      <div className="flex justify-between">
        <h2 className="font-medium leading-5">Withdraw Stake</h2>
      </div>

      <div>
        <div className="flex space-x-4 mb-2">
          <TokenSingle symbol="xFOLD" />

          <div className="flex-1">
            <label className="sr-only" htmlFor="stakeWithdraw">
              Enter amount of xFOLD to withdraw
            </label>

            <NumericalInput
              id="stakeWithdraw"
              name="stakeWithdraw"
              required
              {...withdrawInput.valueBind}
            />
          </div>
        </div>

        <p className="text-sm text-gray-300 h-5">
          {xfoldStaked && formattedxFOLDStaked ? (
            <>
              <span>{`Available: ${formattedxFOLDStaked} xFOLD`}</span>{' '}
              {!inputIsMax && <MaxButton onClick={setMax} />}
            </>
          ) : null}
        </p>
      </div>

      <div className="space-y-4">
        <Button type="submit" disabled={!withdrawInput.hasValue}>
          {withdrawInput.hasValue ? 'Withdraw' : 'Enter an amount'}
        </Button>
      </div>
    </form>
  );
}
