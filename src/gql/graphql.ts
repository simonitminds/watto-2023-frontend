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
  /**
   * The `Naive DateTime` scalar type represents a naive date and time without
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string.
   */
  NaiveDateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<UserAuth>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type Item = {
  __typename?: 'Item';
  id: Scalars['ID'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  model?: Maybe<Model>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  price: Scalars['Float'];
  type?: Maybe<Type>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type ItemPayload = {
  __typename?: 'ItemPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Item>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type Model = {
  __typename?: 'Model';
  id: Scalars['ID'];
  indexPrice: Scalars['Int'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type ModelPayload = {
  __typename?: 'ModelPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Model>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  buyItem?: Maybe<ItemPayload>;
  itemCreate?: Maybe<ItemPayload>;
  itemUpdate?: Maybe<ItemPayload>;
  /** logins a user */
  login?: Maybe<AuthPayload>;
  modelCreate?: Maybe<ModelPayload>;
  modelUpdate?: Maybe<ModelPayload>;
  sellItem?: Maybe<ItemPayload>;
  /** signups a new user a new user */
  signup?: Maybe<AuthPayload>;
  typeCreate?: Maybe<TypePayload>;
  typeUpdate?: Maybe<TypePayload>;
  /** updates a new user */
  updateUser?: Maybe<UpdateUserPayload>;
};


export type RootMutationTypeBuyItemArgs = {
  itemId: Scalars['ID'];
};


export type RootMutationTypeItemCreateArgs = {
  modelId: Scalars['ID'];
  name: Scalars['String'];
  ownerId: Scalars['ID'];
  typeId: Scalars['ID'];
};


export type RootMutationTypeItemUpdateArgs = {
  id: Scalars['ID'];
  modelId: Scalars['ID'];
  name: Scalars['String'];
  typeId: Scalars['ID'];
};


export type RootMutationTypeLoginArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeModelCreateArgs = {
  multiplier: Scalars['Int'];
  name: Scalars['String'];
};


export type RootMutationTypeModelUpdateArgs = {
  id: Scalars['ID'];
  multiplier: Scalars['Int'];
  name: Scalars['String'];
};


export type RootMutationTypeSellItemArgs = {
  itemId: Scalars['ID'];
};


export type RootMutationTypeSignupArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type RootMutationTypeTypeCreateArgs = {
  indexPrice: Scalars['Int'];
  name: Scalars['String'];
};


export type RootMutationTypeTypeUpdateArgs = {
  id: Scalars['ID'];
  indexPrice: Scalars['Int'];
  name: Scalars['String'];
};


export type RootMutationTypeUpdateUserArgs = {
  name?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  itemGet?: Maybe<Item>;
  itemList?: Maybe<Array<Item>>;
  itemListByUserId?: Maybe<Array<Item>>;
  me?: Maybe<User>;
  modelGet?: Maybe<Model>;
  modelList?: Maybe<Array<Model>>;
  typeGet?: Maybe<Type>;
  typeList?: Maybe<Array<Type>>;
  /** fetches a list of users */
  users?: Maybe<Array<Maybe<User>>>;
};


export type RootQueryTypeItemGetArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeItemListByUserIdArgs = {
  userId: Scalars['ID'];
};


export type RootQueryTypeModelGetArgs = {
  id: Scalars['ID'];
};


export type RootQueryTypeTypeGetArgs = {
  id: Scalars['ID'];
};

export type RootSubscriptionType = {
  __typename?: 'RootSubscriptionType';
  marketplace?: Maybe<Array<Item>>;
};

export type Type = {
  __typename?: 'Type';
  id: Scalars['ID'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  items?: Maybe<Array<Maybe<Item>>>;
  multiplier: Scalars['Float'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type TypePayload = {
  __typename?: 'TypePayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<Type>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** A list of failed validations. May be blank or null if mutation succeeded. */
  messages?: Maybe<Array<Maybe<ValidationMessage>>>;
  /** The object created/updated/deleted by the mutation. May be null if mutation failed. */
  result?: Maybe<User>;
  /** Indicates if the mutation completed successfully or not. */
  successful: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  balance: Scalars['Float'];
  id: Scalars['ID'];
  insertedAt?: Maybe<Scalars['NaiveDateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
  username: Scalars['String'];
};

export type UserAuth = {
  __typename?: 'UserAuth';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/**
 * Validation messages are returned when mutation input does not meet the requirements.
 *   While client-side validation is highly recommended to provide the best User Experience,
 *   All inputs will always be validated server-side.
 *
 *   Some examples of validations are:
 *
 *   * Username must be at least 10 characters
 *   * Email field does not contain an email address
 *   * Birth Date is required
 *
 *   While GraphQL has support for required values, mutation data fields are always
 *   set to optional in our API. This allows 'required field' messages
 *   to be returned in the same manner as other validations. The only exceptions
 *   are id fields, which may be required to perform updates or deletes.
 */
export type ValidationMessage = {
  __typename?: 'ValidationMessage';
  /** A unique error code for the type of validation used. */
  code: Scalars['String'];
  /**
   * The input field that the error applies to. The field can be used to
   * identify which field the error message should be displayed next to in the
   * presentation layer.
   *
   * If there are multiple errors to display for a field, multiple validation
   * messages will be in the result.
   *
   * This field may be null in cases where an error cannot be applied to a specific field.
   */
  field?: Maybe<Scalars['String']>;
  /**
   * A friendly error message, appropriate for display to the end user.
   *
   * The message is interpolated to include the appropriate variables.
   *
   * Example: `Username must be at least 10 characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   */
  message?: Maybe<Scalars['String']>;
  /** A list of substitutions to be applied to a validation message template */
  options?: Maybe<Array<Maybe<ValidationOption>>>;
  /**
   * A template used to generate the error message, with placeholders for option substiution.
   *
   * Example: `Username must be at least {count} characters`
   *
   * This message may change without notice, so we do not recommend you match against the text.
   * Instead, use the *code* field for matching.
   */
  template?: Maybe<Scalars['String']>;
};

export type ValidationOption = {
  __typename?: 'ValidationOption';
  /** The name of a variable to be subsituted in a validation message template */
  key: Scalars['String'];
  /** The value of a variable to be substituted in a validation message template */
  value: Scalars['String'];
};

export type ItemsInventoryQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type ItemsInventoryQuery = { __typename?: 'RootQueryType', itemListByUserId?: Array<{ __typename?: 'Item', name?: string | null, price: number, id: string, owner?: { __typename?: 'User', username: string } | null }> | null };

export type SellItemMutationVariables = Exact<{
  itemId: Scalars['ID'];
}>;


export type SellItemMutation = { __typename?: 'RootMutationType', sellItem?: { __typename?: 'ItemPayload', result?: { __typename?: 'Item', id: string, name?: string | null, owner?: { __typename?: 'User', id: string, balance: number } | null } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } | null };

export type MyInventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyInventoryQuery = { __typename?: 'RootQueryType', me?: { __typename?: 'User', username: string, id: string, balance: number } | null };

export type InventorySubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type InventorySubscriptionSubscription = { __typename?: 'RootSubscriptionType', marketplace?: Array<{ __typename?: 'Item', id: string, name?: string | null, price: number, owner?: { __typename?: 'User', username: string } | null }> | null };

export type InventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type InventoryQuery = { __typename?: 'RootQueryType', itemListByUserId?: Array<{ __typename?: 'Item', id: string, name?: string | null, price: number, owner?: { __typename?: 'User', username: string } | null }> | null };

export type BuyItemMutationVariables = Exact<{
  itemId: Scalars['ID'];
}>;


export type BuyItemMutation = { __typename?: 'RootMutationType', buyItem?: { __typename?: 'ItemPayload', result?: { __typename?: 'Item', id: string, name?: string | null, owner?: { __typename?: 'User', id: string, balance: number } | null } | null, messages?: Array<{ __typename?: 'ValidationMessage', field?: string | null, message?: string | null } | null> | null } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'RootMutationType', login?: { __typename?: 'AuthPayload', successful: boolean, result?: { __typename?: 'UserAuth', token?: string | null, user?: { __typename?: 'User', id: string, username: string } | null } | null } | null };

export type ModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ModelsQuery = { __typename?: 'RootQueryType', modelList?: Array<{ __typename?: 'Model', name: string, id: string, indexPrice: number }> | null };

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'RootMutationType', signup?: { __typename?: 'AuthPayload', successful: boolean } | null };

export type TypesQueryVariables = Exact<{ [key: string]: never; }>;


export type TypesQuery = { __typename?: 'RootQueryType', typeList?: Array<{ __typename?: 'Type', name: string, multiplier: number, id: string }> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'RootQueryType', me?: { __typename?: 'User', id: string, username: string } | null };


export const ItemsInventoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ItemsInventory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemListByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<ItemsInventoryQuery, ItemsInventoryQueryVariables>;
export const SellItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SellItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sellItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SellItemMutation, SellItemMutationVariables>;
export const MyInventoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyInventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}}]} as unknown as DocumentNode<MyInventoryQuery, MyInventoryQueryVariables>;
export const InventorySubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"InventorySubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<InventorySubscriptionSubscription, InventorySubscriptionSubscriptionVariables>;
export const InventoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Inventory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemListByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"StringValue","value":"1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<InventoryQuery, InventoryQueryVariables>;
export const BuyItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BuyItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buyItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"itemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<BuyItemMutation, BuyItemMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"successful"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const ModelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Models"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"modelList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"indexPrice"}}]}}]}}]} as unknown as DocumentNode<ModelsQuery, ModelsQueryVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"successful"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const TypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"multiplier"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TypesQuery, TypesQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;