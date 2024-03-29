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
    "\n  subscription money($user_id: String!) {\n    my_money(user_id: $user_id)\n  }\n": types.MoneyDocument,
    "\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n": types.MeDocument,
    "\n  mutation Login($auth: AuthInputObject!) {\n    login(auth: $auth) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  fragment MarketplaceItem on Item {\n    id\n    partName\n    partDescription\n    price\n  }\n": types.MarketplaceItemFragmentDoc,
    "\n  query MyItems {\n    my_items {\n      id\n      ...MarketplaceItem\n    }\n  }\n": types.MyItemsDocument,
    "\n  mutation SellItem($item_id: String!) {\n    sell_item(item_id: $item_id) {\n      id\n      money\n    }\n  }\n": types.SellItemDocument,
    "\n  subscription marketplace_items {\n    marketplace {\n      id\n      ...MarketplaceItem\n    }\n  }\n": types.Marketplace_ItemsDocument,
    "\n  mutation BuyItem($item_id: String!) {\n    trade_item(item_id: $item_id) {\n      id\n      money\n    }\n  }\n": types.BuyItemDocument,
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
export function graphql(source: "\n  subscription money($user_id: String!) {\n    my_money(user_id: $user_id)\n  }\n"): (typeof documents)["\n  subscription money($user_id: String!) {\n    my_money(user_id: $user_id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($auth: AuthInputObject!) {\n    login(auth: $auth) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($auth: AuthInputObject!) {\n    login(auth: $auth) {\n      token\n      user {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment MarketplaceItem on Item {\n    id\n    partName\n    partDescription\n    price\n  }\n"): (typeof documents)["\n  fragment MarketplaceItem on Item {\n    id\n    partName\n    partDescription\n    price\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyItems {\n    my_items {\n      id\n      ...MarketplaceItem\n    }\n  }\n"): (typeof documents)["\n  query MyItems {\n    my_items {\n      id\n      ...MarketplaceItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SellItem($item_id: String!) {\n    sell_item(item_id: $item_id) {\n      id\n      money\n    }\n  }\n"): (typeof documents)["\n  mutation SellItem($item_id: String!) {\n    sell_item(item_id: $item_id) {\n      id\n      money\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription marketplace_items {\n    marketplace {\n      id\n      ...MarketplaceItem\n    }\n  }\n"): (typeof documents)["\n  subscription marketplace_items {\n    marketplace {\n      id\n      ...MarketplaceItem\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation BuyItem($item_id: String!) {\n    trade_item(item_id: $item_id) {\n      id\n      money\n    }\n  }\n"): (typeof documents)["\n  mutation BuyItem($item_id: String!) {\n    trade_item(item_id: $item_id) {\n      id\n      money\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;