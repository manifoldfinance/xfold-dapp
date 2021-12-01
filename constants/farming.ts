import { SupportedChainId } from './chains';

export type FarmingPool = {
  address: string;
  name: string;
  pairs: string[];
  link: string;
};

export const FARMING_LP_SYMBOL = {
  [SupportedChainId.MAINNET]: 'SLP',
  [SupportedChainId.RINKEBY]: 'UNI-V2',
};

export const LP_FARMING_POOLS: Record<SupportedChainId, FarmingPool[]> = {
  [SupportedChainId.MAINNET]: [
    {
      address: '0x9B98Ff54446C7Ccf3118f980B5F32520d7Fa5207',
      name: 'SushiSwap FOLD/USDC LP',
      pairs: ['FOLD', 'USDC'],
      link: 'https://app.sushi.com/add/0xd084944d3c05CD115C09d072B9F44bA3E0E45921/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    },
    {
      address: '0xA2a0C3e53CCc6946E61949ADC46A713F601D645F',
      name: 'SushiSwap xFOLD/ETH LP',
      pairs: ['xFOLD', 'ETH'],
      link: 'https://app.sushi.com/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
  ],
  [SupportedChainId.RINKEBY]: [
    {
      address: '0x9B98Ff54446C7Ccf3118f980B5F32520d7Fa5207',
      name: 'Uniswap FOLD/USDC LP',
      pairs: ['FOLD', 'USDC'],
      link: 'https://app.uniswap.org/#/add/v2/0xf65C93902eCC4c7979E92ED2cca01421e8021F77/0xe0dfbdbeb6d599b9142d84f76a6c4ff964f3949d',
    },
    {
      address: '0x9B98Ff54446C7Ccf3118f980B5F32520d7Fa5207',
      name: 'Uniswap xFOLD/ETH LP',
      pairs: ['xFOLD', 'ETH'],
      link: 'https://app.uniswap.org/#/add/v2/0xf65c93902ecc4c7979e92ed2cca01421e8021f77/0x64f8b3b0a2a16a2bdfa30568cb769ed5ba760fba',
    },
  ],
};
