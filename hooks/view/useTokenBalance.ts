import type { FOLD } from '@/contracts/types';
import useSWR from 'swr';
import { useTokenContract } from '../useContract';
import useKeepSWRDataLiveAsBlocksArrive from '../useKeepSWRDataLiveAsBlocksArrive';

const getTokenBalance =
  (contract: FOLD) => async (_: string, address: string) => {
    const value = await contract.balanceOf(address);

    return value;
  };

export default function useTokenBalance(address: string, tokenAddress: string) {
  const contract = useTokenContract(tokenAddress);

  const shouldFetch =
    !!contract &&
    typeof address === 'string' &&
    typeof tokenAddress === 'string';

  const result = useSWR(
    shouldFetch ? ['totalSupply', address, tokenAddress] : null,
    getTokenBalance,
  );

  useKeepSWRDataLiveAsBlocksArrive(result.mutate);

  return result;
}

