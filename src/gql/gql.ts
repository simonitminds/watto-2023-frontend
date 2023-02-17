/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query ItemsInventory($userId: ID!) {\n    itemListByUserId(userId: $userId) {\n      name\n      price\n      id\n      owner {\n        username\n      }\n    }\n  }\n": types.ItemsInventoryDocument,
    "\n  mutation SellItem($itemId: ID!) {\n    sellItem(itemId: $itemId) {\n      result {\n        id\n        name\n        owner {\n          id\n          balance\n        }\n      }\n      messages {\n        field\n        message\n      }\n    }\n  }\n": types.SellItemDocument,
    "\n  query MyInventory {\n    me {\n      username\n      id\n      balance\n    }\n  }\n": types.MyInventoryDocument,
    "\n  query Items {\n    itemListByUserId(userId: 1) {\n      name\n      price\n      id\n      owner {\n        username\n      }\n    }\n  }\n": types.ItemsDocument,
    "\n  mutation BuyItem($itemId: ID!) {\n    buyItem(itemId: $itemId) {\n      result {\n        id\n        name\n        owner {\n          id\n          balance\n        }\n      }\n      messages {\n        field\n        message\n      }\n    }\n  }\n": types.BuyItemDocument,
    "\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      successful\n      result {\n        token\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query Models {\n    modelList {\n      name\n      id\n      indexPrice\n    }\n  }\n": types.ModelsDocument,
    "\n  mutation Signup($username: String!, $password: String!) {\n    signup(username: $username, password: $password) {\n      successful\n    }\n  }\n": types.SignupDocument,
    "\n  query Types {\n    typeList {\n      name\n      multiplier\n      id\n    }\n  }\n": types.TypesDocument,
    "\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n": types.MeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ItemsInventory($userId: ID!) {\n    itemListByUserId(userId: $userId) {\n      name\n      price\n      id\n      owner {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query ItemsInventory($userId: ID!) {\n    itemListByUserId(userId: $userId) {\n      name\n      price\n      id\n      owner {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SellItem($itemId: ID!) {\n    sellItem(itemId: $itemId) {\n      result {\n        id\n        name\n        owner {\n          id\n          balance\n        }\n      }\n      messages {\n        field\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SellItem($itemId: ID!) {\n    sellItem(itemId: $itemId) {\n      result {\n        id\n        name\n        owner {\n          id\n          balance\n        }\n      }\n      messages {\n        field\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyInventory {\n    me {\n      username\n      id\n      balance\n    }\n  }\n"): (typeof documents)["\n  query MyInventory {\n    me {\n      username\n      id\n      balance\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Items {\n    itemListByUserId(userId: 1) {\n      name\n      price\n      id\n      owner {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query Items {\n    itemListByUserId(userId: 1) {\n      name\n      price\n      id\n      owner {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation BuyItem($itemId: ID!) {\n    buyItem(itemId: $itemId) {\n      result {\n        id\n        name\n        owner {\n          id\n          balance\n        }\n      }\n      messages {\n        field\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation BuyItem($itemId: ID!) {\n    buyItem(itemId: $itemId) {\n      result {\n        id\n        name\n        owner {\n          id\n          balance\n        }\n      }\n      messages {\n        field\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      successful\n      result {\n        token\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      successful\n      result {\n        token\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Models {\n    modelList {\n      name\n      id\n      indexPrice\n    }\n  }\n"): (typeof documents)["\n  query Models {\n    modelList {\n      name\n      id\n      indexPrice\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Signup($username: String!, $password: String!) {\n    signup(username: $username, password: $password) {\n      successful\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($username: String!, $password: String!) {\n    signup(username: $username, password: $password) {\n      successful\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Types {\n    typeList {\n      name\n      multiplier\n      id\n    }\n  }\n"): (typeof documents)["\n  query Types {\n    typeList {\n      name\n      multiplier\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;