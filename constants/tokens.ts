import { SupportedChainId } from './chains';

export enum TokenNames {
  FOLD = 'FOLD',
  xFOLD = 'xFOLD',
  sETH = 'sETH',
  sBTC = 'sBTC',
  sUSD = 'sUSD',
  sCHF = 'sCHF',
  sXAU = 'sXAU',
  sXAG = 'sXAG',
}

type AddressMap = Record<SupportedChainId, string>;

type TokenAddresses = Partial<Record<TokenNames, AddressMap>>;

export const TOKEN_ADDRESSES: TokenAddresses = {
  [TokenNames.FOLD]: {
    [SupportedChainId.MAINNET]: '0xd084944d3c05CD115C09d072B9F44bA3E0E45921',
    [SupportedChainId.RINKEBY]: '0xe0dfbdbeb6d599b9142d84f76a6c4ff964f3949d',
  },
  [TokenNames.xFOLD]: {
    [SupportedChainId.MAINNET]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    [SupportedChainId.RINKEBY]: '0x64f8b3b0a2a16a2bdfa30568cb769ed5ba760fba',
  },
};

export const TOKEN_NAMES_BY_ADDRESS: Record<string, keyof typeof TokenNames> = {
  '0x712863c3ad98ef4319133b8646d51383700cb37b': 'sCHF',
  '0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d': 'sCHF',
  '0xf65c93902ecc4c7979e92ed2cca01421e8021f77': 'sBTC',
  '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6': 'sBTC',
  '0x3a85973fd194c9fb966882fee7b11481c38344fb': 'sXAU',
  '0x261efcdd24cea98652b9700800a13dfbca4103ff': 'sXAU',
  '0x57ab1ec28d129707052df4df418d58a2d46d5f51': 'sUSD',
  '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb': 'sETH',
  '0x6a22e5e94388464181578aa7a6b869e00fe27846': 'sXAG',
};

type TokenCategories = Partial<
  Record<TokenNames, 'CURRENCY' | 'CRYPTO' | 'COMMODITY'>
>;

export const TOKEN_CATEGORY_BY_SYMBOL: TokenCategories = {
  [TokenNames.sCHF]: 'CURRENCY',
  [TokenNames.sUSD]: 'CURRENCY',
  [TokenNames.sBTC]: 'CRYPTO',
  [TokenNames.sETH]: 'CRYPTO',
  [TokenNames.sXAU]: 'COMMODITY',
  [TokenNames.sXAG]: 'COMMODITY',
};

export const TOKEN_COLORS = [
  'bg-green-500',
  'bg-blue-500',
  'bg-purple-500',
  'bg-yellow-500',
  'bg-indigo-500',
  'bg-pink-500',
];

export type TokenAsset = {
  address: string;
  decimals: number;
  symbol: string;
};

type TokenAssets = Partial<
  Record<TokenNames, Record<SupportedChainId, TokenAsset>>
>;

export const TOKEN_ASSETS: TokenAssets = {
  [TokenNames.xFOLD]: {
    [SupportedChainId.MAINNET]: {
      address: TOKEN_ADDRESSES[TokenNames.xFOLD][SupportedChainId.MAINNET],
      decimals: 18,
      symbol: TokenNames.xFOLD,
    },
    [SupportedChainId.RINKEBY]: {
      address: TOKEN_ADDRESSES[TokenNames.xFOLD][SupportedChainId.RINKEBY],
      decimals: 18,
      symbol: TokenNames.xFOLD,
    },
  },
  [TokenNames.FOLD]: {
    [SupportedChainId.MAINNET]: {
      address: TOKEN_ADDRESSES[TokenNames.FOLD][SupportedChainId.MAINNET],
      decimals: 18,
      symbol: TokenNames.FOLD,
    },
    [SupportedChainId.RINKEBY]: {
      address: TOKEN_ADDRESSES[TokenNames.FOLD][SupportedChainId.RINKEBY],
      decimals: 18,
      symbol: TokenNames.FOLD,
    },
  },
};

export const SUSHI_SWAP_LINKS: Partial<Record<TokenNames, string>> = {
  [TokenNames.FOLD]:
    'https://app.sushi.com/swap?outputCurrency=0xd084944d3c05CD115C09d072B9F44bA3E0E45921',
  [TokenNames.xFOLD]:
    'https://app.sushi.com/swap?outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
};

export const TOKEN_BUY_LINKS: Partial<Record<TokenNames, string>> = {
  [TokenNames.sETH]: 'https://curve.fi/seth',
  [TokenNames.sBTC]: 'https://curve.fi/sbtc',
  [TokenNames.sUSD]: 'https://curve.fi/susdv2/',
  [TokenNames.sCHF]: 'https://kwenta.io/exchange/sCHF',
  [TokenNames.sXAU]: 'https://kwenta.io/exchange/sXAU',
  [TokenNames.sXAG]: 'https://kwenta.io/exchange/sXAG',
};
