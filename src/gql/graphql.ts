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
  saberPart?: Maybe<Scalars['String']>;
};

export type ItemArgs = {
  partDescription?: InputMaybe<Scalars['String']>;
  partName?: InputMaybe<Scalars['String']>;
  saberPart?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated This is the root type */
  _deprecated_field?: Maybe<Scalars['String']>;
  first_user?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UserAuthInput = {
  username: Scalars['String'];
};

export type UserDetails = {
  __typename?: 'UserDetails';
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
};

export type UserDetailsUpdateArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type First_UserQueryVariables = Exact<{ [key: string]: never; }>;


export type First_UserQuery = { __typename?: 'Query', first_user?: { __typename?: 'User', id: string, username: string } | null };


export const First_UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"First_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<First_UserQuery, First_UserQueryVariables>;