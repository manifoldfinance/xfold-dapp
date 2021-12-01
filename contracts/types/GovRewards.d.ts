/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface GovRewardsInterface extends ethers.utils.Interface {
  functions: {
    'epochDuration()': FunctionFragment;
    'epochStart()': FunctionFragment;
    'getBoost(address,uint128)': FunctionFragment;
    'getCurrentEpoch()': FunctionFragment;
    'getEpochStake(address,uint128)': FunctionFragment;
    'getPoolSize(uint128)': FunctionFragment;
    'getPoolSizeAtTs(uint256)': FunctionFragment;
    'getRewardsForEpoch()': FunctionFragment;
    'getUserRewardsForEpoch(uint128)': FunctionFragment;
    'harvest(uint128)': FunctionFragment;
    'initialize()': FunctionFragment;
    'lastInitializedEpoch()': FunctionFragment;
    'massHarvest()': FunctionFragment;
    'userLastEpochIdHarvested()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'epochDuration',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'epochStart',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getBoost',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentEpoch',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getEpochStake',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolSize',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolSizeAtTs',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getRewardsForEpoch',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'getUserRewardsForEpoch',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'harvest',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'lastInitializedEpoch',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'massHarvest',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'userLastEpochIdHarvested',
    values?: undefined,
  ): string;

  decodeFunctionResult(
    functionFragment: 'epochDuration',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'epochStart', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBoost', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getCurrentEpoch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getEpochStake',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPoolSize',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPoolSizeAtTs',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getRewardsForEpoch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getUserRewardsForEpoch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'lastInitializedEpoch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'massHarvest',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'userLastEpochIdHarvested',
    data: BytesLike,
  ): Result;

  events: {
    'Harvest(address,uint128,uint256)': EventFragment;
    'InitEpoch(address,uint128)': EventFragment;
    'MassHarvest(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InitEpoch'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MassHarvest'): EventFragment;
}

export class GovRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GovRewardsInterface;

  functions: {
    epochDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    epochStart(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBoost(
      user: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getPoolSizeAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getRewardsForEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserRewardsForEpoch(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    harvest(
      epochId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    lastInitializedEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    massHarvest(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userLastEpochIdHarvested(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

  epochStart(overrides?: CallOverrides): Promise<BigNumber>;

  getBoost(
    user: string,
    epoch: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochStake(
    userAddress: string,
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getPoolSize(
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getPoolSizeAtTs(
    timestamp: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getRewardsForEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getUserRewardsForEpoch(
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  harvest(
    epochId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  lastInitializedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  massHarvest(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userLastEpochIdHarvested(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    epochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getBoost(
      user: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPoolSizeAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getRewardsForEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getUserRewardsForEpoch(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    harvest(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    lastInitializedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    massHarvest(overrides?: CallOverrides): Promise<BigNumber>;

    userLastEpochIdHarvested(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Harvest(
      user?: string | null,
      epochId?: BigNumberish | null,
      amount?: null,
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; epochId: BigNumber; amount: BigNumber }
    >;

    InitEpoch(
      caller?: string | null,
      epochId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, BigNumber],
      { caller: string; epochId: BigNumber }
    >;

    MassHarvest(
      user?: string | null,
      epochsHarvested?: null,
      totalValue?: null,
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; epochsHarvested: BigNumber; totalValue: BigNumber }
    >;
  };

  estimateGas: {
    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    epochStart(overrides?: CallOverrides): Promise<BigNumber>;

    getBoost(
      user: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPoolSizeAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getRewardsForEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getUserRewardsForEpoch(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    harvest(
      epochId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    lastInitializedEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    massHarvest(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    userLastEpochIdHarvested(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBoost(
      user: string,
      epoch: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEpochStake(
      userAddress: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPoolSize(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPoolSizeAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getRewardsForEpoch(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getUserRewardsForEpoch(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    harvest(
      epochId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    lastInitializedEpoch(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    massHarvest(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userLastEpochIdHarvested(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
