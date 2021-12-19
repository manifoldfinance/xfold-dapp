import { TOKEN_ADDRESSES } from '@/constants/tokens';
import type { DictatorDAO } from '@/contracts/types';
import useSWR from 'swr';
import { useXFoldToken} from '../useContract';
import useWeb3Store from '../useWeb3Store';
import useTokenBalance from './useTokenBalance';

function getVotingPower(XFold: DictatorDAO) {
  return async (_: string, userAddress: string) => {
    const timestamp = Date.now();



    const xfoldStaked = useXFoldToken;

//    const xfoldStakedAtTs = await XFold.xfoldStakedAtTs(timestamp);

    return {
      xfoldStaked
    };
  };
}

export default function useVotingPower() {
  const account = useWeb3Store((state) => state.account);

  const XFold = useXFoldToken();

  const shouldFetch = !!XFold && typeof account === 'string';

  return useSWR(
    shouldFetch ? ['VotingPower', account] : null,
    getVotingPower(XFold),
  );
}
function account(account: any) {
  throw new Error('Function not implemented.');
}

function tokenAddress(tokenAddress: any) {
  throw new Error('Function not implemented.');
}

