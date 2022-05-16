<script lang="ts">
	import { browser } from '$app/env';
	import {
		KQL_KitFeedbackCreateComment,
		KQL_KitFeedbackCreateIssue,
		KQL_KitFeedbackIssues,
		KQL_KitFeedbackIssueTemplate,
		KQL_KitFeedbackMinimizeComment
	} from '$lib/graphql/_kitql/graphqlStores';
	import type { KitFeedback_CreateIssueFields } from '$lib/graphql/_kitql/graphqlTypes';
	import { validator } from '@felte/validator-vest';
	import { createForm } from 'felte';
	import { create, enforce, test } from 'vest';
	import { config, repositoryId } from '../../utils/config';
	import { router } from '../../utils/routes';
	import { resolveTheme, theme } from '../../utils/theme';
	import type { CommentMetadata } from '../../utils/types';

	export let milestoneId: string = undefined;
	export let milestoneTitle: string = undefined;

	let initialValues: KitFeedback_CreateIssueFields;
	$: initialValues = {
		title: '',
		body: '',
		milestoneId: milestoneId,
		repositoryID: $repositoryId
	};

	$: browser &&
		milestoneId &&
		KQL_KitFeedbackIssueTemplate.query({
			variables: {
				name: $config.issues?.create?.templates?.[milestoneTitle]
			}
		});

	$: console.log(`$KQL_KitFeedbackIssueTemplate.data`, $KQL_KitFeedbackIssueTemplate.data);
	const suite = create('form', (data: KitFeedback_CreateIssueFields) => {
		test('title', 'Le titre ne peut pas être vide.', () => {
			enforce(data.title).isNotEmpty();
		});
	});

	$: ({ form } = createForm({
		initialValues,
		extend: validator({ suite }),
		onSubmit: async (values: KitFeedback_CreateIssueFields) => {
			const identifier = $config.identifier();
			const metadata: CommentMetadata = {
				author: $config.dev ? $config.staff?.members?.[identifier] : identifier ?? 'Unknown author',
				votes: {
					up: [],
					down: []
				},
				...($config.issues?.create?.metadata?.() ?? {})
			};

			await KQL_KitFeedbackCreateIssue.mutate({
				variables: {
					fields: {
						title: values.title,
						body: values.body,
						milestoneId: values.milestoneId
					}
				}
			});
			await KQL_KitFeedbackCreateComment.mutate({
				variables: {
					fields: {
						issueID: $KQL_KitFeedbackCreateIssue.data?.createIssue?.id,
						body: JSON.stringify(metadata)
					}
				}
			});
			await KQL_KitFeedbackMinimizeComment.mutate({
				variables: {
					fields: {
						commentID: $KQL_KitFeedbackCreateComment.data?.createComment?.id
					}
				}
			});

			KQL_KitFeedbackIssues.resetCache();
			router.goto('ISSUE', { number: $KQL_KitFeedbackCreateIssue.data?.createIssue?.number }, true);
		}
	}));

	const cancel = () => router.previous();
</script>

<form use:form class={resolveTheme($theme, 'new-issue')}>
	<div class={resolveTheme($theme, 'form-control')}>
		<label for="new-issue-title" class={resolveTheme($theme, 'label')}>
			<span class={resolveTheme($theme, 'label-text')}>
				{$config.issues.text.create['title-field'].label}
			</span>
		</label>
		<input
			id="new-issue-title"
			name="title"
			class={resolveTheme($theme, 'input')}
			placeholder={$config.issues.text.create['title-field'].placeholder}
		/>
	</div>
	<div class={resolveTheme($theme, 'form-control')}>
		<label for="new-issue-title" class={resolveTheme($theme, 'label')}>
			<span class={resolveTheme($theme, 'label-text')}>
				{$config.issues.text.create['description-field'].label}
			</span>
		</label>
		<textarea
			id="new-issue-body"
			name="body"
			class={resolveTheme($theme, 'textarea')}
			placeholder={$config.issues.text.create['description-field'].placeholder}
			rows="6"
		/>
	</div>

	<div class="flex justify-end gap-4 p-2">
		<button class={resolveTheme($theme, 'button-neutral')} on:click={cancel}>
			{$config.issues.text.create.submit.cancel}
		</button>
		<button type="submit" class={resolveTheme($theme, 'button-primary')}>
			{$config.issues.text.create.submit.validate}
		</button>
	</div>
</form>
