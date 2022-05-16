import { KitFeedbackConfigIT } from '..';
import { resolveGithubComment, resolveGithubIssuePreview } from '../helpers/helperGithub';
import { DbGithub } from '../providers/DbGithub';
import type { KitFeedbackModule } from '../_kitql/moduleTypes';

export const resolvers: KitFeedbackModule.Resolvers = {
	Mutation: {
		KitFeedback_createComment: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.createComment({
				subjectId: args.fields.issueID,
				body: args.fields.body
			});
			const comment: KitFeedbackModule.KitFeedback_Comment = resolveGithubComment(
				data?.addComment?.commentEdge?.node,
				config
			);
			return comment;
		},
		KitFeedback_addReaction: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const data = await Github.addReaction({
				subjectId: args.fields.subjectID,
				content: args.fields.content
			});
			return data?.addReaction ? 1 : 0;
		},
		KitFeedback_createIssue: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.createIssue({
				repositoryId: config.repository.id,
				milestoneId: args.fields.milestoneId,
				labelIds: [config.issues.create.label],
				title: args.fields.title,
				body: args.fields.body
			});
			const issue = data?.createIssue?.issue;
			const result: KitFeedbackModule.KitFeedback_Issue = resolveGithubIssuePreview(issue, config);
			return result;
		},
		KitFeedback_minimizeComment: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.minimizeComment({
				subjectId: args.fields.commentID,
				classifier: 'OFF_TOPIC'
			});
			const comment = data?.minimizeComment?.minimizedComment;
			const result: KitFeedbackModule.KitFeedback_Comment = resolveGithubComment(comment, config);
			return result;
		},
		KitFeedback_updateComment: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.updateComment({
				id: args.fields.commentID,
				body: args.fields.body
			});
			const comment = data?.updateIssueComment?.issueComment;
			const result: KitFeedbackModule.KitFeedback_Comment = resolveGithubComment(comment, config);
			return result;
		}
	}
};
