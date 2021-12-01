import { SupportedChainId } from './chains';

export enum ContractNames {
  BASKET_BALANCER = 'BasketBalancer',
  POOL_ROUTER = 'PoolRouter',
  WRAPPING_REWARDS = 'WrappingRewards',
  xFOLD_FACET_PROXY = 'xFOLDFacetProxy',
  GOV_REWARDS = 'GovRewards',
  LP_REWARDS_FOLD_USDC = 'LPRewardsFOLDUSDC',
  LP_REWARDS_xFOLD_WETH = 'LPRewardsxFOLDWETH',
  STAKING = 'Staking',
  xFOLD_DAO = 'bddao',
  FOLD_WRAPPER = 'FoldWrapper',
}

type AddressMap = Record<SupportedChainId, string>;

type ContractAddresses = Record<ContractNames, AddressMap>;

export const CONTRACT_ADDRESSES: ContractAddresses = {
  [ContractNames.BASKET_BALANCER]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.POOL_ROUTER]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.WRAPPING_REWARDS]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.xFOLD_FACET_PROXY]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.GOV_REWARDS]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.LP_REWARDS_xFOLD_WETH]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.LP_REWARDS_FOLD_USDC]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.STAKING]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.xFOLD_DAO]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
  [ContractNames.FOLD_WRAPPER]: {
    [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
    [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  },
};

export const BALANCER_POOL_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
  [SupportedChainId.RINKEBY]: '0xbe9532432f05eb849f159F2b410829C36C95c5ec',
};
