/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInputObject = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AuthObject = {
  __typename?: 'AuthObject';
  token: Scalars['String']['output'];
  user: User;
};

export type BuyItemArgs = {
  itemId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Item = {
  __typename?: 'Item';
  User?: Maybe<User>;
  id: Scalars['ID']['output'];
  partDescription?: Maybe<Scalars['String']['output']>;
  partName: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  saberPart: Scalars['String']['output'];
};

export type ItemArgs = {
  partDescription?: InputMaybe<Scalars['String']['input']>;
  partName?: InputMaybe<Scalars['String']['input']>;
  saberPart?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  login: AuthObject;
  register?: Maybe<AuthObject>;
  sell_item: User;
  trade_item: User;
};


export type MutationLoginArgs = {
  auth: AuthInputObject;
};


export type MutationRegisterArgs = {
  auth: AuthInputObject;
};


export type MutationSell_ItemArgs = {
  item_id: Scalars['String']['input'];
};


export type MutationTrade_ItemArgs = {
  item_id: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  first_user?: Maybe<User>;
  items: Array<Item>;
  marketplace: Array<Item>;
  me?: Maybe<User>;
  my_items: Array<Item>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  marketplace: Array<Item>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  inventory: Array<Item>;
  money: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type UserAuthInput = {
  username: Scalars['String']['input'];
};

export type UserDetails = {
  __typename?: 'UserDetails';
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type UserDetailsUpdateArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type LoginMutationVariables = Exact<{
  auth: AuthInputObject;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthObject', token: string, user: { __typename?: 'User', id: string, username: string } } };

export type MarketplaceItemFragment = { __typename?: 'Item', id: string, partName: string, partDescription?: string | null, price?: number | null } & { ' $fragmentName'?: 'MarketplaceItemFragment' };

export type MyItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyItemsQuery = { __typename?: 'Query', my_items: Array<(
    { __typename?: 'Item', id: string }
    & { ' $fragmentRefs'?: { 'MarketplaceItemFragment': MarketplaceItemFragment } }
  )> };

export type SellItemMutationVariables = Exact<{
  item_id: Scalars['String']['input'];
}>;


export type SellItemMutation = { __typename?: 'Mutation', sell_item: { __typename?: 'User', id: string, money: number } };

export type Marketplace_ItemsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Marketplace_ItemsSubscription = { __typename?: 'Subscription', marketplace: Array<(
    { __typename?: 'Item', id: string }
    & { ' $fragmentRefs'?: { 'MarketplaceItemFragment': MarketplaceItemFragment } }
  )> };

export const MarketplaceItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarketplaceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<MarketplaceItemFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"auth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInputObject"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"auth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MyItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"my_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarketplaceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarketplaceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<MyItemsQuery, MyItemsQueryVariables>;
export const SellItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SellItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"item_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sell_item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"item_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"item_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"money"}}]}}]}}]} as unknown as DocumentNode<SellItemMutation, SellItemMutationVariables>;
export const Marketplace_ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"marketplace_items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MarketplaceItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MarketplaceItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<Marketplace_ItemsSubscription, Marketplace_ItemsSubscriptionVariables>;