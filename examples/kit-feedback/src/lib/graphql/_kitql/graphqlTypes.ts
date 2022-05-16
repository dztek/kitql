import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
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
  Date: any;
  DateTime: any;
};

export type KitFeedback_AddReactionFields = {
  content: KitFeedback_Reaction;
  subjectID: Scalars['ID'];
};

export type KitFeedback_Comment = {
  __typename?: 'KitFeedback_Comment';
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bodyHTML?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isMinimized?: Maybe<Scalars['Boolean']>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type KitFeedback_Comments = {
  __typename?: 'KitFeedback_Comments';
  next?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<KitFeedback_Comment>>;
};

export type KitFeedback_CreateCommentFields = {
  body: Scalars['String'];
  issueID: Scalars['ID'];
};

export type KitFeedback_CreateIssueFields = {
  body?: InputMaybe<Scalars['String']>;
  milestoneId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type KitFeedback_Issue = {
  __typename?: 'KitFeedback_Issue';
  author?: Maybe<Scalars['String']>;
  bodyHTML?: Maybe<Scalars['String']>;
  comments?: Maybe<KitFeedback_Comments>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  metadata?: Maybe<KitFeedback_Comment>;
  number?: Maybe<Scalars['Int']>;
  titleHTML?: Maybe<Scalars['String']>;
};

export type KitFeedback_IssueFilters = {
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  milestoneNumber?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<Array<InputMaybe<KitFeedback_IssueState>>>;
};

export enum KitFeedback_IssueState {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type KitFeedback_IssueTemplate = {
  __typename?: 'KitFeedback_IssueTemplate';
  body?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type KitFeedback_Issues = {
  __typename?: 'KitFeedback_Issues';
  next?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<KitFeedback_Issue>>;
};

export type KitFeedback_Milestone = {
  __typename?: 'KitFeedback_Milestone';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  number?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type KitFeedback_MilestoneFilters = {
  title?: InputMaybe<Scalars['String']>;
};

export type KitFeedback_Milestones = {
  __typename?: 'KitFeedback_Milestones';
  next?: Maybe<Scalars['String']>;
  nodes?: Maybe<Array<Maybe<KitFeedback_Milestone>>>;
};

export type KitFeedback_MinimizeCommentFields = {
  commentID: Scalars['ID'];
};

export type KitFeedback_Pagination = {
  cursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};

export enum KitFeedback_Reaction {
  Confused = 'CONFUSED',
  Eyes = 'EYES',
  Heart = 'HEART',
  Hooray = 'HOORAY',
  Laugh = 'LAUGH',
  Rocket = 'ROCKET',
  ThumbsDown = 'THUMBS_DOWN',
  ThumbsUp = 'THUMBS_UP'
}

export type KitFeedback_UpdateCommentFields = {
  body: Scalars['String'];
  commentID: Scalars['ID'];
};

/** Our loved graphql Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  KitFeedback_addReaction?: Maybe<Scalars['Int']>;
  KitFeedback_createComment?: Maybe<KitFeedback_Comment>;
  KitFeedback_createIssue?: Maybe<KitFeedback_Issue>;
  KitFeedback_minimizeComment?: Maybe<KitFeedback_Comment>;
  KitFeedback_updateComment?: Maybe<KitFeedback_Comment>;
  _boostServer?: Maybe<Scalars['String']>;
  _generateError?: Maybe<Scalars['String']>;
};


/** Our loved graphql Mutation root */
export type MutationKitFeedback_AddReactionArgs = {
  fields: KitFeedback_AddReactionFields;
};


/** Our loved graphql Mutation root */
export type MutationKitFeedback_CreateCommentArgs = {
  fields: KitFeedback_CreateCommentFields;
};


/** Our loved graphql Mutation root */
export type MutationKitFeedback_CreateIssueArgs = {
  fields: KitFeedback_CreateIssueFields;
};


/** Our loved graphql Mutation root */
export type MutationKitFeedback_MinimizeCommentArgs = {
  fields: KitFeedback_MinimizeCommentFields;
};


/** Our loved graphql Mutation root */
export type MutationKitFeedback_UpdateCommentArgs = {
  fields: KitFeedback_UpdateCommentFields;
};

/** Our loved graphql Query root */
export type Query = {
  __typename?: 'Query';
  KitFeedback_issue?: Maybe<KitFeedback_Issue>;
  KitFeedback_issueTemplate?: Maybe<KitFeedback_IssueTemplate>;
  KitFeedback_issues?: Maybe<KitFeedback_Issues>;
  KitFeedback_milestones?: Maybe<KitFeedback_Milestones>;
  version: Version;
};


/** Our loved graphql Query root */
export type QueryKitFeedback_IssueArgs = {
  number: Scalars['Int'];
};


/** Our loved graphql Query root */
export type QueryKitFeedback_IssueTemplateArgs = {
  name: Scalars['String'];
};


/** Our loved graphql Query root */
export type QueryKitFeedback_IssuesArgs = {
  filters?: InputMaybe<KitFeedback_IssueFilters>;
  pagination: KitFeedback_Pagination;
};


/** Our loved graphql Query root */
export type QueryKitFeedback_MilestonesArgs = {
  filters?: InputMaybe<KitFeedback_MilestoneFilters>;
  pagination: KitFeedback_Pagination;
};

/** Get infos about the version */
export type Version = {
  __typename?: 'Version';
  /** When was the last release? */
  releaseCreatedAtUtc: Scalars['DateTime'];
};

export type KitFeedback_CommentDetailFragment = { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null };

export type KitFeedback_IssueDetailFragment = { __typename?: 'KitFeedback_Issue', id?: string | null, author?: string | null, createdAt?: any | null, titleHTML?: string | null, bodyHTML?: string | null, comments?: { __typename?: 'KitFeedback_Comments', next?: string | null, nodes?: Array<{ __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null }> | null } | null };

export type KitFeedback_IssuePreviewFragment = { __typename?: 'KitFeedback_Issue', id?: string | null, number?: number | null, titleHTML?: string | null, metadata?: { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null } | null };

export type KitFeedback_IssueTemplateDetailFragment = { __typename?: 'KitFeedback_IssueTemplate', name?: string | null, title?: string | null, body?: string | null };

export type KitFeedback_MilestonePreviewFragment = { __typename?: 'KitFeedback_Milestone', id: string, number?: number | null, title: string };

export type KitFeedbackCreateCommentMutationVariables = Exact<{
  fields: KitFeedback_CreateCommentFields;
}>;


export type KitFeedbackCreateCommentMutation = { __typename?: 'Mutation', KitFeedback_createComment?: { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null } | null };

export type KitFeedbackAddReactionMutationVariables = Exact<{
  fields: KitFeedback_AddReactionFields;
}>;


export type KitFeedbackAddReactionMutation = { __typename?: 'Mutation', KitFeedback_addReaction?: number | null };

export type KitFeedbackCreateIssueMutationVariables = Exact<{
  fields: KitFeedback_CreateIssueFields;
}>;


export type KitFeedbackCreateIssueMutation = { __typename?: 'Mutation', KitFeedback_createIssue?: { __typename?: 'KitFeedback_Issue', id?: string | null, number?: number | null, titleHTML?: string | null, metadata?: { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null } | null } | null };

export type KitFeedbackMinimizeCommentMutationVariables = Exact<{
  fields: KitFeedback_MinimizeCommentFields;
}>;


export type KitFeedbackMinimizeCommentMutation = { __typename?: 'Mutation', KitFeedback_minimizeComment?: { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null } | null };

export type KitFeedbackUpdateCommentMutationVariables = Exact<{
  fields: KitFeedback_UpdateCommentFields;
}>;


export type KitFeedbackUpdateCommentMutation = { __typename?: 'Mutation', KitFeedback_updateComment?: { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null } | null };

export type KitFeedbackIssueQueryVariables = Exact<{
  number: Scalars['Int'];
}>;


export type KitFeedbackIssueQuery = { __typename?: 'Query', KitFeedback_issue?: { __typename?: 'KitFeedback_Issue', id?: string | null, author?: string | null, createdAt?: any | null, titleHTML?: string | null, bodyHTML?: string | null, comments?: { __typename?: 'KitFeedback_Comments', next?: string | null, nodes?: Array<{ __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null }> | null } | null } | null };

export type KitFeedbackIssueTemplateQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type KitFeedbackIssueTemplateQuery = { __typename?: 'Query', KitFeedback_issueTemplate?: { __typename?: 'KitFeedback_IssueTemplate', name?: string | null, title?: string | null, body?: string | null } | null };

export type KitFeedbackIssuesQueryVariables = Exact<{
  filters?: InputMaybe<KitFeedback_IssueFilters>;
  pagination: KitFeedback_Pagination;
}>;


export type KitFeedbackIssuesQuery = { __typename?: 'Query', KitFeedback_issues?: { __typename?: 'KitFeedback_Issues', next?: string | null, nodes?: Array<{ __typename?: 'KitFeedback_Issue', id?: string | null, number?: number | null, titleHTML?: string | null, metadata?: { __typename?: 'KitFeedback_Comment', id?: string | null, isMinimized?: boolean | null, isPublic?: boolean | null, createdAt?: any | null, author?: string | null, body?: string | null, bodyHTML?: string | null } | null }> | null } | null };

export type KitFeedbackMilestonesQueryVariables = Exact<{
  filters: KitFeedback_MilestoneFilters;
  pagination: KitFeedback_Pagination;
}>;


export type KitFeedbackMilestonesQuery = { __typename?: 'Query', KitFeedback_milestones?: { __typename?: 'KitFeedback_Milestones', next?: string | null, nodes?: Array<{ __typename?: 'KitFeedback_Milestone', id: string, number?: number | null, title: string } | null> | null } | null };

export const KitFeedback_CommentDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KitFeedback_commentDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isMinimized"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"bodyHTML"}}]}}]} as unknown as DocumentNode<KitFeedback_CommentDetailFragment, unknown>;
export const KitFeedback_IssueDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KitFeedback_issueDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"titleHTML"}},{"kind":"Field","name":{"kind":"Name","value":"bodyHTML"}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_commentDetail"}}]}}]}}]}},...KitFeedback_CommentDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedback_IssueDetailFragment, unknown>;
export const KitFeedback_IssuePreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KitFeedback_issuePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"titleHTML"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_commentDetail"}}]}}]}},...KitFeedback_CommentDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedback_IssuePreviewFragment, unknown>;
export const KitFeedback_IssueTemplateDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KitFeedback_issueTemplateDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_IssueTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]} as unknown as DocumentNode<KitFeedback_IssueTemplateDetailFragment, unknown>;
export const KitFeedback_MilestonePreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"KitFeedback_milestonePreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_Milestone"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<KitFeedback_MilestonePreviewFragment, unknown>;
export const KitFeedbackCreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"KitFeedbackCreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fields"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_CreateCommentFields"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_commentDetail"}}]}}]}},...KitFeedback_CommentDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackCreateCommentMutation, KitFeedbackCreateCommentMutationVariables>;
export const KitFeedbackAddReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"KitFeedbackAddReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fields"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_AddReactionFields"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_addReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fields"}}}]}]}}]} as unknown as DocumentNode<KitFeedbackAddReactionMutation, KitFeedbackAddReactionMutationVariables>;
export const KitFeedbackCreateIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"KitFeedbackCreateIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fields"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_CreateIssueFields"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_createIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_issuePreview"}}]}}]}},...KitFeedback_IssuePreviewFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackCreateIssueMutation, KitFeedbackCreateIssueMutationVariables>;
export const KitFeedbackMinimizeCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"KitFeedbackMinimizeComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fields"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_MinimizeCommentFields"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_minimizeComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_commentDetail"}}]}}]}},...KitFeedback_CommentDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackMinimizeCommentMutation, KitFeedbackMinimizeCommentMutationVariables>;
export const KitFeedbackUpdateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"KitFeedbackUpdateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fields"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_UpdateCommentFields"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_updateComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_commentDetail"}}]}}]}},...KitFeedback_CommentDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackUpdateCommentMutation, KitFeedbackUpdateCommentMutationVariables>;
export const KitFeedbackIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KitFeedbackIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"number"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_issue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"number"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_issueDetail"}}]}}]}},...KitFeedback_IssueDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackIssueQuery, KitFeedbackIssueQueryVariables>;
export const KitFeedbackIssueTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KitFeedbackIssueTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_issueTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_issueTemplateDetail"}}]}}]}},...KitFeedback_IssueTemplateDetailFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackIssueTemplateQuery, KitFeedbackIssueTemplateQueryVariables>;
export const KitFeedbackIssuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KitFeedbackIssues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_IssueFilters"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_Pagination"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_issues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_issuePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}},...KitFeedback_IssuePreviewFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackIssuesQuery, KitFeedbackIssuesQueryVariables>;
export const KitFeedbackMilestonesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KitFeedbackMilestones"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_MilestoneFilters"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"KitFeedback_Pagination"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"KitFeedback_milestones"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"KitFeedback_milestonePreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"next"}}]}}]}},...KitFeedback_MilestonePreviewFragmentDoc.definitions]} as unknown as DocumentNode<KitFeedbackMilestonesQuery, KitFeedbackMilestonesQueryVariables>;
export const KitFeedback_CommentDetail = gql`
    fragment KitFeedback_commentDetail on KitFeedback_Comment {
  id
  isMinimized
  isPublic
  createdAt
  author
  body
  bodyHTML
}
    `;
export const KitFeedback_IssueDetail = gql`
    fragment KitFeedback_issueDetail on KitFeedback_Issue {
  id
  author
  createdAt
  titleHTML
  bodyHTML
  comments {
    next
    nodes {
      ...KitFeedback_commentDetail
    }
  }
}
    ${KitFeedback_CommentDetail}`;
export const KitFeedback_IssuePreview = gql`
    fragment KitFeedback_issuePreview on KitFeedback_Issue {
  id
  number
  titleHTML
  metadata {
    ...KitFeedback_commentDetail
  }
}
    ${KitFeedback_CommentDetail}`;
export const KitFeedback_IssueTemplateDetail = gql`
    fragment KitFeedback_issueTemplateDetail on KitFeedback_IssueTemplate {
  name
  title
  body
}
    `;
export const KitFeedback_MilestonePreview = gql`
    fragment KitFeedback_milestonePreview on KitFeedback_Milestone {
  id
  number
  title
}
    `;
export const KitFeedbackCreateComment = gql`
    mutation KitFeedbackCreateComment($fields: KitFeedback_CreateCommentFields!) {
  KitFeedback_createComment(fields: $fields) {
    ...KitFeedback_commentDetail
  }
}
    ${KitFeedback_CommentDetail}`;
export const KitFeedbackAddReaction = gql`
    mutation KitFeedbackAddReaction($fields: KitFeedback_AddReactionFields!) {
  KitFeedback_addReaction(fields: $fields)
}
    `;
export const KitFeedbackCreateIssue = gql`
    mutation KitFeedbackCreateIssue($fields: KitFeedback_CreateIssueFields!) {
  KitFeedback_createIssue(fields: $fields) {
    ...KitFeedback_issuePreview
  }
}
    ${KitFeedback_IssuePreview}`;
export const KitFeedbackMinimizeComment = gql`
    mutation KitFeedbackMinimizeComment($fields: KitFeedback_MinimizeCommentFields!) {
  KitFeedback_minimizeComment(fields: $fields) {
    ...KitFeedback_commentDetail
  }
}
    ${KitFeedback_CommentDetail}`;
export const KitFeedbackUpdateComment = gql`
    mutation KitFeedbackUpdateComment($fields: KitFeedback_UpdateCommentFields!) {
  KitFeedback_updateComment(fields: $fields) {
    ...KitFeedback_commentDetail
  }
}
    ${KitFeedback_CommentDetail}`;
export const KitFeedbackIssue = gql`
    query KitFeedbackIssue($number: Int!) {
  KitFeedback_issue(number: $number) {
    ...KitFeedback_issueDetail
  }
}
    ${KitFeedback_IssueDetail}`;
export const KitFeedbackIssueTemplate = gql`
    query KitFeedbackIssueTemplate($name: String!) {
  KitFeedback_issueTemplate(name: $name) {
    ...KitFeedback_issueTemplateDetail
  }
}
    ${KitFeedback_IssueTemplateDetail}`;
export const KitFeedbackIssues = gql`
    query KitFeedbackIssues($filters: KitFeedback_IssueFilters, $pagination: KitFeedback_Pagination!) {
  KitFeedback_issues(filters: $filters, pagination: $pagination) {
    nodes {
      ...KitFeedback_issuePreview
    }
    next
  }
}
    ${KitFeedback_IssuePreview}`;
export const KitFeedbackMilestones = gql`
    query KitFeedbackMilestones($filters: KitFeedback_MilestoneFilters!, $pagination: KitFeedback_Pagination!) {
  KitFeedback_milestones(filters: $filters, pagination: $pagination) {
    nodes {
      ...KitFeedback_milestonePreview
    }
    next
  }
}
    ${KitFeedback_MilestonePreview}`;