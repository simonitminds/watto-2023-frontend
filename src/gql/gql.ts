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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ItemFragment on Item {\n    id\n    partName\n    partDescription\n    price\n  }\n": types.ItemFragmentFragmentDoc,
    "\n  mutation TestLoging($username: String!, $password: String!) {\n    login(input: { username: $username, password: $password }) {\n      user {\n        id\n        username\n        money\n      }\n      token\n    }\n  }\n": types.TestLogingDocument,
    "\n  query GetAllUserItemsById {\n    getAllUserItemsById {\n      id\n      ...ItemFragment\n    }\n  }\n": types.GetAllUserItemsByIdDocument,
    "\n  mutation SingupOpreation($username: String!, $password: String!) {\n    Signup(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n": types.SingupOpreationDocument,
    "\n  mutation AddtoUserDetailes(\n    $firstname: String!\n    $lastname: String!\n    $id: String!\n  ) {\n    updateUserDetails(\n      input: { firstName: $firstname, lastName: $lastname, id: $id }\n    ) {\n      id\n      lastName\n    }\n  }\n": types.AddtoUserDetailesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ItemFragment on Item {\n    id\n    partName\n    partDescription\n    price\n  }\n"): (typeof documents)["\n  fragment ItemFragment on Item {\n    id\n    partName\n    partDescription\n    price\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation TestLoging($username: String!, $password: String!) {\n    login(input: { username: $username, password: $password }) {\n      user {\n        id\n        username\n        money\n      }\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation TestLoging($username: String!, $password: String!) {\n    login(input: { username: $username, password: $password }) {\n      user {\n        id\n        username\n        money\n      }\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllUserItemsById {\n    getAllUserItemsById {\n      id\n      ...ItemFragment\n    }\n  }\n"): (typeof documents)["\n  query GetAllUserItemsById {\n    getAllUserItemsById {\n      id\n      ...ItemFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SingupOpreation($username: String!, $password: String!) {\n    Signup(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation SingupOpreation($username: String!, $password: String!) {\n    Signup(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddtoUserDetailes(\n    $firstname: String!\n    $lastname: String!\n    $id: String!\n  ) {\n    updateUserDetails(\n      input: { firstName: $firstname, lastName: $lastname, id: $id }\n    ) {\n      id\n      lastName\n    }\n  }\n"): (typeof documents)["\n  mutation AddtoUserDetailes(\n    $firstname: String!\n    $lastname: String!\n    $id: String!\n  ) {\n    updateUserDetails(\n      input: { firstName: $firstname, lastName: $lastname, id: $id }\n    ) {\n      id\n      lastName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;