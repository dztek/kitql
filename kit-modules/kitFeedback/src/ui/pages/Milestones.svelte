<script lang="ts">
	import { browser } from '$app/env';
	import { config } from '../../utils/config';
	import { KQL_KitFeedbackMilestones } from '$lib/graphql/_kitql/graphqlStores';
	import Icon from '@iconify/svelte';
	import MilestoneList from '../milestones/MILESTONE_List.svelte';

	export let take: number = 25;

	$: browser &&
		KQL_KitFeedbackMilestones.query({
			variables: {
				filters: {
					title: $config.milestones.filter
				},
				pagination: {
					take
				}
			}
		});
</script>

{#if $KQL_KitFeedbackMilestones.status === 'LOADING'}
	<Icon icon="eos-icons:loading" />
{:else}
	<MilestoneList milestones={$KQL_KitFeedbackMilestones.data?.milestones.nodes} />
{/if}
