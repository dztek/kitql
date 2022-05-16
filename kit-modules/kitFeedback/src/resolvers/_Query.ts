import { KitFeedbackConfigIT } from '..';
import {
	resolveGithubIssue,
	resolveGithubIssuePreview,
	resolveGithubMilestone
} from '../helpers/helperGithub';
import { DbGithub } from '../providers/DbGithub';
import type { KitFeedbackModule } from '../_kitql/moduleTypes';

export const resolvers: KitFeedbackModule.Resolvers = {
	Query: {
		KitFeedback_milestones: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.getMilestones({
				repository: config.repository.name,
				owner: config.repository.owner,
				filter: args.filters.title,
				take: args.pagination.take,
				cursor: args.pagination.cursor
			});
			const milestones = data?.repository?.milestones;
			const result: KitFeedbackModule.KitFeedback_Milestones = {
				nodes: milestones?.nodes?.map((milestone) => resolveGithubMilestone(milestone, config)),
				next: milestones?.pageInfo?.endCursor
			};
			return result;
		},
		KitFeedback_issueTemplate: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.getIssueTemplates({
				repository: config.repository.name,
				owner: config.repository.owner
			});
			const templates = data?.repository?.issueTemplates;
			const result = templates?.find((template) => template.name === args.name);
			return result;
		},
		KitFeedback_issues: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.getIssues({
				repository: config.repository.name,
				owner: config.repository.owner,
				take: args.pagination.take,
				cursor: args.pagination.cursor,
				filters: args.filters
			});
			const issues = data?.repository?.issues;
			const result: KitFeedbackModule.KitFeedback_Issues = {
				nodes: issues.nodes.map((issue) => resolveGithubIssuePreview(issue, config)),
				next: issues.pageInfo.endCursor
			};
			return result;
		},
		KitFeedback_issue: async (_root, args, ctx, _info) => {
			const Github = ctx.injector.get(DbGithub);
			const config = ctx.injector.get(KitFeedbackConfigIT);
			const data = await Github.getIssue({
				repository: config.repository.name,
				owner: config.repository.owner,
				number: args.number
			});
			const issue = data?.repository?.issue;
			const result: KitFeedbackModule.KitFeedback_Issue = resolveGithubIssue(issue, config);
			return result;
		}
	}
};
