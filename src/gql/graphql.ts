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

export type BuyItemArgs = {
  itemId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID']['output'];
  partDescription?: Maybe<Scalars['String']['output']>;
  partName: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  saberPart: Scalars['String']['output'];
};

export type ItemArgs = {
  partDescription?: InputMaybe<Scalars['String']['input']>;
  partName: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Int']['input']>;
  saberPart: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  createItem?: Maybe<Item>;
  login?: Maybe<User>;
};


export type MutationCreateItemArgs = {
  input: ItemArgs;
};


export type MutationLoginArgs = {
  input: UserAuthInput;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  first_user: User;
  getAllUserItemsById: Array<Item>;
};


export type QueryGetAllUserItemsByIdArgs = {
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  money: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type UserAuthInput = {
  password: Scalars['String']['input'];
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

export type ItemFragmentFragment = { __typename?: 'Item', id: string, partName: string, partDescription?: string | null, price: number } & { ' $fragmentName'?: 'ItemFragmentFragment' };

export type GetAllUserItemsByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllUserItemsByIdQuery = { __typename?: 'Query', getAllUserItemsById: Array<(
    { __typename?: 'Item', id: string }
    & { ' $fragmentRefs'?: { 'ItemFragmentFragment': ItemFragmentFragment } }
  )> };

export const ItemFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<ItemFragmentFragment, unknown>;
export const GetAllUserItemsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserItemsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUserItemsById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ItemFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<GetAllUserItemsByIdQuery, GetAllUserItemsByIdQueryVariables>;