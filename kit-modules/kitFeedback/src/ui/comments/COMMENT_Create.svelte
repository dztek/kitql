<script lang="ts">
	import { config } from '../../utils/config';

	import {
		KQL_KitFeedbackAddReaction,
		KQL_KitFeedbackCreateComment,
		KQL_KitFeedbackIssue,
		KQL_KitFeedbackMinimizeComment
	} from '$lib/graphql/_kitql/graphqlStores';
	import { resolveTheme, theme } from '../../utils/theme';
	import type { CommentMetadata } from '../../utils/types';
	import { validator } from '@felte/validator-vest';
	import { createForm } from 'felte';
	import { create, enforce, test } from 'vest';

	export let issue: { id: string };

	const initialValues: { comment: string } = {
		comment: ''
	};

	const suite = create('form', (data) => {
		test('comment', 'Votre commentaire ne peut pas être vide.', () => {
			enforce(data.comment).isNotEmpty();
		});
	});

	const { form } = createForm({
		initialValues,
		extend: validator({ suite }),
		onSubmit: async (values) => {
			const identifier = $config.identifier();
			const metadata: CommentMetadata = {
				author: $config.dev ? $config.staff?.members?.[identifier] : identifier ?? 'Unknown author',
				votes: {
					up: [],
					down: []
				}
			};
			await KQL_KitFeedbackCreateComment.mutate({
				variables: {
					fields: {
						issueID: issue.id,
						body: values.comment
					}
				}
			});
			await KQL_KitFeedbackAddReaction.mutate({
				variables: {
					fields: {
						subjectID: $KQL_KitFeedbackCreateComment.data?.createComment.id,
						content: $config.issues?.comments?.reactionFilter
					}
				}
			});
			await KQL_KitFeedbackCreateComment.mutate({
				variables: {
					fields: {
						issueID: issue.id,
						body: JSON.stringify(metadata)
					}
				}
			});
			await KQL_KitFeedbackMinimizeComment.mutate({
				variables: {
					fields: {
						commentID: $KQL_KitFeedbackCreateComment.data.createComment.id
					}
				}
			});
			await KQL_KitFeedbackIssue.query({ settings: { policy: 'network-only' } });
		}
	});

	$: isLoading =
		$KQL_KitFeedbackCreateComment.status === 'LOADING' ||
		$KQL_KitFeedbackAddReaction.status === 'LOADING' ||
		$KQL_KitFeedbackMinimizeComment.status === 'LOADING' ||
		$KQL_KitFeedbackIssue.status === 'LOADING';
</script>

<form use:form class={resolveTheme($theme, 'create-comment')}>
	<textarea
		name="comment"
		class={resolveTheme($theme, 'textarea')}
		placeholder={$config.issues?.comments?.create?.placeholder ?? 'Your comment here'}
	/>
	<button
		type="submit"
		class="{resolveTheme($theme, 'button-primary')} {isLoading
			? resolveTheme($theme, 'button-disabled')
			: undefined}"
	>
		{isLoading ? 'Envoi' : 'Valider'}
	</button>
</form>
