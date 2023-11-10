import { GraphQLResolveInfo } from 'graphql';
import { UserModel, BlogModel } from '../models/index.js';
import { AppContext } from '../server.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddBlogInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AddUserInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Blog = {
  __typename?: 'Blog';
  author?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  created_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Scalars['Int']['output']>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBlog?: Maybe<Blog>;
  addUser?: Maybe<User>;
};


export type MutationAddBlogArgs = {
  blog?: InputMaybe<AddBlogInput>;
};


export type MutationAddUserArgs = {
  user?: InputMaybe<AddUserInput>;
};

export type Query = {
  __typename?: 'Query';
  blog?: Maybe<Blog>;
  blogs?: Maybe<Array<Blog>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryBlogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  blogs?: Maybe<Array<Blog>>;
  created_at?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddBlogInput: AddBlogInput;
  AddUserInput: AddUserInput;
  Blog: ResolverTypeWrapper<Blog>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddBlogInput: AddBlogInput;
  AddUserInput: AddUserInput;
  Blog: Blog;
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  User: User;
}>;

export type BlogResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<Array<ResolversTypes['Comment']>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBlog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, Partial<MutationAddBlogArgs>>;
  addUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationAddUserArgs>>;
}>;

export type QueryResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  blog?: Resolver<Maybe<ResolversTypes['Blog']>, ParentType, ContextType, RequireFields<QueryBlogArgs, 'id'>>;
  blogs?: Resolver<Maybe<Array<ResolversTypes['Blog']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = AppContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blogs?: Resolver<Maybe<Array<ResolversTypes['Blog']>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = AppContext> = ResolversObject<{
  Blog?: BlogResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

