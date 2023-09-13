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
  id: Scalars['ID'];
  partDescription?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  saberPart?: Maybe<Scalars['String']>;
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
  _deprecated_field?: Maybe<Scalars['String']>;
  first_user: User;
  getItemByName?: Maybe<Item>;
  users: Array<User>;
};


export type QueryGetItemByNameArgs = {
  partName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  money: Scalars['Int'];
  username: Scalars['String'];
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

export type First_UserQueryVariables = Exact<{ [key: string]: never; }>;


export type First_UserQuery = { __typename?: 'Query', first_user: { __typename?: 'User', id: string, username: string } };

export type TestLogingMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type TestLogingMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, username: string } | null };


export const First_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"First_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<First_UserQuery, First_UserQueryVariables>;
export const TestLogingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestLoging"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<TestLogingMutation, TestLogingMutationVariables>;