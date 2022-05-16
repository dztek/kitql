<script lang="ts">
	import {
		KQL_KitFeedbackIssue,
		KQL_KitFeedbackIssues,
		KQL_KitFeedbackMilestones
	} from '$lib/graphql/_kitql/graphqlStores';
	import { resolveTheme, theme } from '../utils/theme';
	import Icon from '@iconify/svelte';
	import { RequestStatus } from '@kitql/client';

	const refresh = async () => {
		if ($KQL_KitFeedbackMilestones.status === RequestStatus.DONE) {
			await KQL_KitFeedbackMilestones.query({ settings: { policy: 'network-only' } });
		}
		if ($KQL_KitFeedbackIssues.status === RequestStatus.DONE) {
			await KQL_KitFeedbackIssues.query({ settings: { policy: 'network-only' } });
		}
		if ($KQL_KitFeedbackIssue.status === RequestStatus.DONE) {
			await KQL_KitFeedbackIssue.query({ settings: { policy: 'network-only' } });
		}
	};
</script>

<button class={resolveTheme($theme, 'refresh-button')} on:click={refresh}>
	<Icon icon="mdi:refresh" />
</button>
