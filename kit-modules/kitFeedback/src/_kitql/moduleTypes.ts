import * as Types from "$graphql/_kitql/graphqlTypes";
import * as gm from "graphql-modules";
export namespace KitFeedbackModule {
  interface DefinedFields {
    KitFeedback_Comment: 'id' | 'isMinimized' | 'isPublic' | 'createdAt' | 'author' | 'body' | 'bodyHTML';
    KitFeedback_Comments: 'nodes' | 'next';
    KitFeedback_Issue: 'id' | 'number' | 'author' | 'createdAt' | 'titleHTML' | 'bodyHTML' | 'metadata' | 'comments';
    KitFeedback_Issues: 'nodes' | 'next';
    KitFeedback_IssueTemplate: 'name' | 'title' | 'body';
    KitFeedback_Milestone: 'id' | 'title' | 'number' | 'description';
    KitFeedback_Milestones: 'nodes' | 'next';
    Mutation: 'KitFeedback_createComment' | 'KitFeedback_addReaction' | 'KitFeedback_createIssue' | 'KitFeedback_minimizeComment' | 'KitFeedback_updateComment';
    Query: 'KitFeedback_issue' | 'KitFeedback_issues' | 'KitFeedback_issueTemplate' | 'KitFeedback_milestones';
  };
  
  interface DefinedEnumValues {
    KitFeedback_IssueState: 'OPEN' | 'CLOSED';
    KitFeedback_Reaction: 'CONFUSED' | 'EYES' | 'HEART' | 'HOORAY' | 'LAUGH' | 'ROCKET' | 'THUMBS_DOWN' | 'THUMBS_UP';
  };
  
  interface DefinedInputFields {
    KitFeedback_AddReactionFields: 'subjectID' | 'content';
    KitFeedback_CreateCommentFields: 'issueID' | 'body';
    KitFeedback_UpdateCommentFields: 'commentID' | 'body';
    KitFeedback_MinimizeCommentFields: 'commentID';
    KitFeedback_CreateIssueFields: 'milestoneId' | 'title' | 'body';
    KitFeedback_IssueFilters: 'labels' | 'milestoneNumber' | 'states';
    KitFeedback_MilestoneFilters: 'title';
    KitFeedback_Pagination: 'take' | 'cursor';
  };
  
  export type KitFeedback_IssueState = DefinedEnumValues['KitFeedback_IssueState'];
  export type KitFeedback_Reaction = DefinedEnumValues['KitFeedback_Reaction'];
  export type KitFeedback_AddReactionFields = Pick<Types.KitFeedback_AddReactionFields, DefinedInputFields['KitFeedback_AddReactionFields']>;
  export type KitFeedback_Comment = Pick<Types.KitFeedback_Comment, DefinedFields['KitFeedback_Comment']>;
  export type DateTime = Types.DateTime;
  export type KitFeedback_Comments = Pick<Types.KitFeedback_Comments, DefinedFields['KitFeedback_Comments']>;
  export type KitFeedback_CreateCommentFields = Pick<Types.KitFeedback_CreateCommentFields, DefinedInputFields['KitFeedback_CreateCommentFields']>;
  export type KitFeedback_UpdateCommentFields = Pick<Types.KitFeedback_UpdateCommentFields, DefinedInputFields['KitFeedback_UpdateCommentFields']>;
  export type KitFeedback_MinimizeCommentFields = Pick<Types.KitFeedback_MinimizeCommentFields, DefinedInputFields['KitFeedback_MinimizeCommentFields']>;
  export type KitFeedback_Issue = Pick<Types.KitFeedback_Issue, DefinedFields['KitFeedback_Issue']>;
  export type KitFeedback_Issues = Pick<Types.KitFeedback_Issues, DefinedFields['KitFeedback_Issues']>;
  export type KitFeedback_CreateIssueFields = Pick<Types.KitFeedback_CreateIssueFields, DefinedInputFields['KitFeedback_CreateIssueFields']>;
  export type KitFeedback_IssueFilters = Pick<Types.KitFeedback_IssueFilters, DefinedInputFields['KitFeedback_IssueFilters']>;
  export type KitFeedback_IssueTemplate = Pick<Types.KitFeedback_IssueTemplate, DefinedFields['KitFeedback_IssueTemplate']>;
  export type KitFeedback_Milestone = Pick<Types.KitFeedback_Milestone, DefinedFields['KitFeedback_Milestone']>;
  export type KitFeedback_Milestones = Pick<Types.KitFeedback_Milestones, DefinedFields['KitFeedback_Milestones']>;
  export type KitFeedback_MilestoneFilters = Pick<Types.KitFeedback_MilestoneFilters, DefinedInputFields['KitFeedback_MilestoneFilters']>;
  export type KitFeedback_Pagination = Pick<Types.KitFeedback_Pagination, DefinedInputFields['KitFeedback_Pagination']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type KitFeedback_CommentResolvers = Pick<Types.KitFeedback_CommentResolvers, DefinedFields['KitFeedback_Comment'] | '__isTypeOf'>;
  export type KitFeedback_CommentsResolvers = Pick<Types.KitFeedback_CommentsResolvers, DefinedFields['KitFeedback_Comments'] | '__isTypeOf'>;
  export type KitFeedback_IssueResolvers = Pick<Types.KitFeedback_IssueResolvers, DefinedFields['KitFeedback_Issue'] | '__isTypeOf'>;
  export type KitFeedback_IssuesResolvers = Pick<Types.KitFeedback_IssuesResolvers, DefinedFields['KitFeedback_Issues'] | '__isTypeOf'>;
  export type KitFeedback_IssueTemplateResolvers = Pick<Types.KitFeedback_IssueTemplateResolvers, DefinedFields['KitFeedback_IssueTemplate'] | '__isTypeOf'>;
  export type KitFeedback_MilestoneResolvers = Pick<Types.KitFeedback_MilestoneResolvers, DefinedFields['KitFeedback_Milestone'] | '__isTypeOf'>;
  export type KitFeedback_MilestonesResolvers = Pick<Types.KitFeedback_MilestonesResolvers, DefinedFields['KitFeedback_Milestones'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    KitFeedback_Comment?: KitFeedback_CommentResolvers;
    KitFeedback_Comments?: KitFeedback_CommentsResolvers;
    KitFeedback_Issue?: KitFeedback_IssueResolvers;
    KitFeedback_Issues?: KitFeedback_IssuesResolvers;
    KitFeedback_IssueTemplate?: KitFeedback_IssueTemplateResolvers;
    KitFeedback_Milestone?: KitFeedback_MilestoneResolvers;
    KitFeedback_Milestones?: KitFeedback_MilestonesResolvers;
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    KitFeedback_Comment?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      isMinimized?: gm.Middleware[];
      isPublic?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      author?: gm.Middleware[];
      body?: gm.Middleware[];
      bodyHTML?: gm.Middleware[];
    };
    KitFeedback_Comments?: {
      '*'?: gm.Middleware[];
      nodes?: gm.Middleware[];
      next?: gm.Middleware[];
    };
    KitFeedback_Issue?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      number?: gm.Middleware[];
      author?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      titleHTML?: gm.Middleware[];
      bodyHTML?: gm.Middleware[];
      metadata?: gm.Middleware[];
      comments?: gm.Middleware[];
    };
    KitFeedback_Issues?: {
      '*'?: gm.Middleware[];
      nodes?: gm.Middleware[];
      next?: gm.Middleware[];
    };
    KitFeedback_IssueTemplate?: {
      '*'?: gm.Middleware[];
      name?: gm.Middleware[];
      title?: gm.Middleware[];
      body?: gm.Middleware[];
    };
    KitFeedback_Milestone?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      title?: gm.Middleware[];
      number?: gm.Middleware[];
      description?: gm.Middleware[];
    };
    KitFeedback_Milestones?: {
      '*'?: gm.Middleware[];
      nodes?: gm.Middleware[];
      next?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      KitFeedback_createComment?: gm.Middleware[];
      KitFeedback_addReaction?: gm.Middleware[];
      KitFeedback_createIssue?: gm.Middleware[];
      KitFeedback_minimizeComment?: gm.Middleware[];
      KitFeedback_updateComment?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      KitFeedback_issue?: gm.Middleware[];
      KitFeedback_issues?: gm.Middleware[];
      KitFeedback_issueTemplate?: gm.Middleware[];
      KitFeedback_milestones?: gm.Middleware[];
    };
  };
}