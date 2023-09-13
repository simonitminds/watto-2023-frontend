/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BuyItemArgs = {
  itemId: Scalars['ID'];
  userId: Scalars['ID'];
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
  partDescription?: InputMaybe<Scalars['String']>;
  partName: Scalars['String'];
  price?: InputMaybe<Scalars['Int']>;
  saberPart: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']>;
  createItem?: Maybe<Item>;
  login?: Maybe<User>;
  updateItemById?: Maybe<Item>;
  updateUserDetails?: Maybe<UserDetails>;
};


export type MutationCreateItemArgs = {
  input: ItemArgs;
};


export type MutationLoginArgs = {
  input: UserAuthInput;
};


export type MutationUpdateItemByIdArgs = {
  newUserId: Scalars['String'];
  partname: Scalars['String'];
};


export type MutationUpdateUserDetailsArgs = {
  input: UserDetailsUpdateArgs;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']['output']>;
  getAllUserItemsById: Array<Item>;
};


export type QueryGetAllUserItemsByIdArgs = {
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserDetails = {
  __typename?: 'UserDetails';
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};

export type UserDetailsUpdateArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type GetAllUserItemsByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllUserItemsByIdQuery = { __typename?: 'Query', getAllUserItemsById: Array<{ __typename?: 'Item', id: string, partName: string, partDescription?: string | null, price: number }> };

export type TestLogingMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export const GetAllUserItemsByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllUserItemsById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUserItemsById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"partName"}},{"kind":"Field","name":{"kind":"Name","value":"partDescription"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetAllUserItemsByIdQuery, GetAllUserItemsByIdQueryVariables>;
