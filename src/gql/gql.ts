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
    "\n  query First_user {\n    first_user {\n      id\n      username\n    }\n  }\n": types.First_UserDocument,
    "\n  mutation SingupOpreation($username: String!, $password: String!) {\n    Signup(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n": types.SingupOpreationDocument,
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
export function graphql(source: "\n  query First_user {\n    first_user {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  query First_user {\n    first_user {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SingupOpreation($username: String!, $password: String!) {\n    Signup(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation SingupOpreation($username: String!, $password: String!) {\n    Signup(input: { username: $username, password: $password }) {\n      id\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;