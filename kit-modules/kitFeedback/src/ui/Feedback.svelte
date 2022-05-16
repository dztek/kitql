<script lang="ts">
	import { browser } from '$app/env';
	import {
		KQL_KitFeedbackIssue,
		KQL_KitFeedbackIssues,
		KQL_KitFeedbackMilestones
	} from '$lib/graphql/_kitql/graphqlStores';
	import { RequestStatus } from '@kitql/client';
	import { config } from '../utils/config';
	import { router, routes } from '../utils/routes';
	import { resolveTheme, theme } from '../utils/theme';
	import './app.postcss';
	import Modal from './Modal.svelte';

	export let showFeedback = false;

	const handleClose = async () => {
		if (!browser) {
			return;
		}
		if ($config.resetCacheOnClose) {
			if ($KQL_KitFeedbackMilestones.status === RequestStatus.DONE) {
				await KQL_KitFeedbackMilestones.query({ settings: { policy: 'network-only' } });
			}
			if ($KQL_KitFeedbackIssues.status === RequestStatus.DONE) {
				await KQL_KitFeedbackIssues.query({ settings: { policy: 'network-only' } });
			}
			if ($KQL_KitFeedbackIssue.status === RequestStatus.DONE) {
				await KQL_KitFeedbackIssue.query({ settings: { policy: 'network-only' } });
			}
		}
	};
</script>

<div class="wrapper {resolveTheme($theme, 'wrapper')}">
	<Modal bind:show={showFeedback} on:close={handleClose}>
		<svelte:component this={routes[$router.route]} {...$router.params} />
	</Modal>
</div>
