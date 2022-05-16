import { gql } from 'graphql-modules'

export const typeDefs = gql`
enum KitFeedback_IssueState {
	OPEN
	CLOSED
}

enum KitFeedback_Reaction {
	CONFUSED
	EYES
	HEART
	HOORAY
	LAUGH
	ROCKET
	THUMBS_DOWN
	THUMBS_UP
}

input KitFeedback_AddReactionFields {
	subjectID: ID!
	content: KitFeedback_Reaction!
}

type KitFeedback_Comment {
	id: ID
	isMinimized: Boolean
	isPublic: Boolean
	createdAt: DateTime
	author: String
	body: String
	bodyHTML: String
}

type KitFeedback_Comments {
	nodes: [KitFeedback_Comment!]
	next: String
}

input KitFeedback_CreateCommentFields {
	issueID: ID!
	body: String!
}

input KitFeedback_UpdateCommentFields {
	commentID: ID!
	body: String!
}

input KitFeedback_MinimizeCommentFields {
	commentID: ID!
}

type KitFeedback_Issue {
	id: ID
	number: Int
	author: String
	createdAt: DateTime
	titleHTML: String
	bodyHTML: String
	metadata: KitFeedback_Comment
	comments: KitFeedback_Comments
}

type KitFeedback_Issues {
	nodes: [KitFeedback_Issue!]
	next: String
}

input KitFeedback_CreateIssueFields {
	milestoneId: ID
	title: String!
	body: String
}

input KitFeedback_IssueFilters {
	labels: [String]
	milestoneNumber: String
	states: [KitFeedback_IssueState]
}

type KitFeedback_IssueTemplate {
	name: String
	title: String
	body: String
}

type KitFeedback_Milestone {
	id: ID!
	title: String!
	number: Int
	description: String
}

type KitFeedback_Milestones {
	nodes: [KitFeedback_Milestone]
	next: String
}

input KitFeedback_MilestoneFilters {
	title: String
}

input KitFeedback_Pagination {
	take: Int!
	cursor: String
}

extend type Mutation {
	KitFeedback_createComment(fields: KitFeedback_CreateCommentFields!): KitFeedback_Comment
	KitFeedback_addReaction(fields: KitFeedback_AddReactionFields!): Int
	KitFeedback_createIssue(fields: KitFeedback_CreateIssueFields!): KitFeedback_Issue
	KitFeedback_minimizeComment(fields: KitFeedback_MinimizeCommentFields!): KitFeedback_Comment
	KitFeedback_updateComment(fields: KitFeedback_UpdateCommentFields!): KitFeedback_Comment
}

extend type Query {
	KitFeedback_issue(number: Int!): KitFeedback_Issue
	KitFeedback_issues(
		filters: KitFeedback_IssueFilters
		pagination: KitFeedback_Pagination!
	): KitFeedback_Issues
	KitFeedback_issueTemplate(name: String!): KitFeedback_IssueTemplate
	KitFeedback_milestones(
		filters: KitFeedback_MilestoneFilters
		pagination: KitFeedback_Pagination!
	): KitFeedback_Milestones
}

`;