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

interface ReignFacetInterface extends ethers.utils.Interface {
  functions: {
    'BASE_BALANCE_MULTIPLIER()': FunctionFragment;
    'BASE_STAKE_MULTIPLIER()': FunctionFragment;
    'MAX_LOCK()': FunctionFragment;
    'balanceAtTs(address,uint256)': FunctionFragment;
    'balanceCheckAtEpoch(address,uint128)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'computeNewMultiplier(uint256,uint128,uint256,uint128)': FunctionFragment;
    'currentEpochMultiplier()': FunctionFragment;
    'delegate(address)': FunctionFragment;
    'delegatedPower(address)': FunctionFragment;
    'delegatedPowerAtTs(address,uint256)': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'depositAndLock(uint256,uint256)': FunctionFragment;
    'epochIsInitialized(uint128)': FunctionFragment;
    'getEpoch()': FunctionFragment;
    'getEpochUserBalance(address,uint128)': FunctionFragment;
    'initxFOLD(address,uint256,uint256)': FunctionFragment;
    'lock(uint256)': FunctionFragment;
    'xfoldStaked()': FunctionFragment;
    'xfoldStakedAtTs(uint256)': FunctionFragment;
    'stakeAtTs(address,uint256)': FunctionFragment;
    'stakingBoost(address)': FunctionFragment;
    'stakingBoostAtEpoch(address,uint128)': FunctionFragment;
    'stopDelegate()': FunctionFragment;
    'userDelegatedTo(address)': FunctionFragment;
    'userLastAction(address)': FunctionFragment;
    'userLockedUntil(address)': FunctionFragment;
    'votingPower(address)': FunctionFragment;
    'votingPowerAtTs(address,uint256)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'BASE_BALANCE_MULTIPLIER',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'BASE_STAKE_MULTIPLIER',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'MAX_LOCK', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'balanceAtTs',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceCheckAtEpoch',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'computeNewMultiplier',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'currentEpochMultiplier',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'delegate', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'delegatedPower',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'delegatedPowerAtTs',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'depositAndLock',
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'epochIsInitialized',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'getEpoch', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getEpochUserBalance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'initxFOLD',
    values: [string, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'lock', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'xfoldStaked',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'xfoldStakedAtTs',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'stakeAtTs',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'stakingBoost',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'stakingBoostAtEpoch',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'stopDelegate',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'userDelegatedTo',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'userLastAction',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'userLockedUntil',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'votingPower', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'votingPowerAtTs',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish],
  ): string;

  decodeFunctionResult(
    functionFragment: 'BASE_BALANCE_MULTIPLIER',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'BASE_STAKE_MULTIPLIER',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'MAX_LOCK', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'balanceAtTs',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'balanceCheckAtEpoch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'computeNewMultiplier',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'currentEpochMultiplier',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'delegate', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'delegatedPower',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'delegatedPowerAtTs',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'depositAndLock',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'epochIsInitialized',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getEpoch', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getEpochUserBalance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'initxFOLD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lock', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'xfoldStaked',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'xfoldStakedAtTs',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'stakeAtTs', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'stakingBoost',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stakingBoostAtEpoch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'stopDelegate',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'userDelegatedTo',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'userLastAction',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'userLockedUntil',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'votingPower',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'votingPowerAtTs',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;

  events: {
    'Delegate(address,address)': EventFragment;
    'DelegatedPowerDecreased(address,address,uint256,uint256)': EventFragment;
    'DelegatedPowerIncreased(address,address,uint256,uint256)': EventFragment;
    'Deposit(address,uint256,uint256)': EventFragment;
    'InitEpoch(address,uint128)': EventFragment;
    'Lock(address,uint256)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Delegate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DelegatedPowerDecreased'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DelegatedPowerIncreased'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InitEpoch'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Lock'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export class ReignFacet extends BaseContract {
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

  interface: ReignFacetInterface;

  functions: {
    BASE_BALANCE_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;

    BASE_STAKE_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_LOCK(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    balanceCheckAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          epochId: BigNumber;
          multiplier: BigNumber;
          startBalance: BigNumber;
          newDeposits: BigNumber;
        },
      ]
    >;

    balanceOf(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    delegate(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    delegatedPower(
      user: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    delegatedPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    depositAndLock(
      amount: BigNumberish,
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    epochIsInitialized(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    getEpoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEpochUserBalance(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    initxFOLD(
      _xfoldToken: string,
      _epoch1Start: BigNumberish,
      _epochDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    lock(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    xfoldStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    xfoldStakedAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    stakeAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
          timestamp: BigNumber;
          amount: BigNumber;
          expiryTimestamp: BigNumber;
          delegatedTo: string;
          stakingBoost: BigNumber;
        },
      ]
    >;

    stakingBoost(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    stakingBoostAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    stopDelegate(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    userDelegatedTo(user: string, overrides?: CallOverrides): Promise<[string]>;

    userLastAction(
      user: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    userLockedUntil(
      user: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    votingPower(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  BASE_BALANCE_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

  BASE_STAKE_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_LOCK(overrides?: CallOverrides): Promise<BigNumber>;

  balanceAtTs(
    user: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  balanceCheckAtEpoch(
    user: string,
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      epochId: BigNumber;
      multiplier: BigNumber;
      startBalance: BigNumber;
      newDeposits: BigNumber;
    }
  >;

  balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  computeNewMultiplier(
    prevBalance: BigNumberish,
    prevMultiplier: BigNumberish,
    amount: BigNumberish,
    currentMultiplier: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  delegate(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  delegatedPower(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  delegatedPowerAtTs(
    user: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  deposit(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  depositAndLock(
    amount: BigNumberish,
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  epochIsInitialized(
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  getEpoch(overrides?: CallOverrides): Promise<BigNumber>;

  getEpochUserBalance(
    user: string,
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  initxFOLD(
    _xfoldToken: string,
    _epoch1Start: BigNumberish,
    _epochDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  lock(
    timestamp: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  xfoldStaked(overrides?: CallOverrides): Promise<BigNumber>;

  xfoldStakedAtTs(
    timestamp: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  stakeAtTs(
    user: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
      timestamp: BigNumber;
      amount: BigNumber;
      expiryTimestamp: BigNumber;
      delegatedTo: string;
      stakingBoost: BigNumber;
    }
  >;

  stakingBoost(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  stakingBoostAtEpoch(
    user: string,
    epochId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  stopDelegate(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  userDelegatedTo(user: string, overrides?: CallOverrides): Promise<string>;

  userLastAction(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  userLockedUntil(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  votingPower(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  votingPowerAtTs(
    user: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE_BALANCE_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_STAKE_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LOCK(overrides?: CallOverrides): Promise<BigNumber>;

    balanceAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceCheckAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        epochId: BigNumber;
        multiplier: BigNumber;
        startBalance: BigNumber;
        newDeposits: BigNumber;
      }
    >;

    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(to: string, overrides?: CallOverrides): Promise<void>;

    delegatedPower(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    delegatedPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    deposit(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    depositAndLock(
      amount: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    epochIsInitialized(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    getEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochUserBalance(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initxFOLD(
      _xfoldToken: string,
      _epoch1Start: BigNumberish,
      _epochDuration: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    lock(timestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;

    xfoldStaked(overrides?: CallOverrides): Promise<BigNumber>;

    xfoldStakedAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    stakeAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, BigNumber] & {
        timestamp: BigNumber;
        amount: BigNumber;
        expiryTimestamp: BigNumber;
        delegatedTo: string;
        stakingBoost: BigNumber;
      }
    >;

    stakingBoost(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    stakingBoostAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    stopDelegate(overrides?: CallOverrides): Promise<void>;

    userDelegatedTo(user: string, overrides?: CallOverrides): Promise<string>;

    userLastAction(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userLockedUntil(
      user: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    votingPower(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Delegate(
      from?: string | null,
      to?: string | null,
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    DelegatedPowerDecreased(
      from?: string | null,
      to?: string | null,
      amount?: null,
      to_newDelegatedPower?: null,
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        from: string;
        to: string;
        amount: BigNumber;
        to_newDelegatedPower: BigNumber;
      }
    >;

    DelegatedPowerIncreased(
      from?: string | null,
      to?: string | null,
      amount?: null,
      to_newDelegatedPower?: null,
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        from: string;
        to: string;
        amount: BigNumber;
        to_newDelegatedPower: BigNumber;
      }
    >;

    Deposit(
      user?: string | null,
      amount?: null,
      newBalance?: null,
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; amount: BigNumber; newBalance: BigNumber }
    >;

    InitEpoch(
      caller?: string | null,
      epochId?: BigNumberish | null,
    ): TypedEventFilter<
      [string, BigNumber],
      { caller: string; epochId: BigNumber }
    >;

    Lock(
      user?: string | null,
      timestamp?: null,
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; timestamp: BigNumber }
    >;

    Withdraw(
      user?: string | null,
      amountWithdrew?: null,
      amountLeft?: null,
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; amountWithdrew: BigNumber; amountLeft: BigNumber }
    >;
  };

  estimateGas: {
    BASE_BALANCE_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_STAKE_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_LOCK(overrides?: CallOverrides): Promise<BigNumber>;

    balanceAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceCheckAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    currentEpochMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    delegate(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    delegatedPower(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    delegatedPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    depositAndLock(
      amount: BigNumberish,
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    epochIsInitialized(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getEpoch(overrides?: CallOverrides): Promise<BigNumber>;

    getEpochUserBalance(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initxFOLD(
      _xfoldToken: string,
      _epoch1Start: BigNumberish,
      _epochDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    lock(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    xfoldStaked(overrides?: CallOverrides): Promise<BigNumber>;

    xfoldStakedAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    stakeAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    stakingBoost(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    stakingBoostAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    stopDelegate(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    userDelegatedTo(
      user: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    userLastAction(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userLockedUntil(
      user: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    votingPower(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_BALANCE_MULTIPLIER(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    BASE_STAKE_MULTIPLIER(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    MAX_LOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceCheckAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOf(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    computeNewMultiplier(
      prevBalance: BigNumberish,
      prevMultiplier: BigNumberish,
      amount: BigNumberish,
      currentMultiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    currentEpochMultiplier(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    delegate(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    delegatedPower(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    delegatedPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    depositAndLock(
      amount: BigNumberish,
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    epochIsInitialized(
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getEpoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEpochUserBalance(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    initxFOLD(
      _xfoldToken: string,
      _epoch1Start: BigNumberish,
      _epochDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    lock(
      timestamp: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    xfoldStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    xfoldStakedAtTs(
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    stakeAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    stakingBoost(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    stakingBoostAtEpoch(
      user: string,
      epochId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    stopDelegate(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    userDelegatedTo(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    userLastAction(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    userLockedUntil(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    votingPower(
      user: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    votingPowerAtTs(
      user: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
