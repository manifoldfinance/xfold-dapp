import type { xFOLDFacet } from '@/contracts/types';
import useSWR from 'swr';
import { usexFOLDFacetProxy } from '../useContract';
import useWeb3Store from '../useWeb3Store';

function getxFOLDStaked(contract: xFOLDFacet) {
  return async (_: string, user: string) => {
    const value = await contract.balanceOf(user);

    return value;
  };
}

export default function usexFOLDStaked() {
  const account = useWeb3Store((state) => state.account);

  const contract = usexFOLDFacetProxy();

  const shouldFetch = !!contract && typeof account === 'string';

  return useSWR(
    shouldFetch ? ['xFOLDStaked', account] : null,
    getxFOLDStaked(contract),
  );
}
