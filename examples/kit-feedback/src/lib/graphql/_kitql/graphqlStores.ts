import { browser } from '$app/env';
import * as Types from '$graphql/_kitql/graphqlTypes';
import { defaultStoreValue, RequestStatus, ResponseResultType, type PatchType, type RequestParameters, type RequestQueryParameters, type RequestResult } from '@kitql/client';
import { get, writable } from 'svelte/store';
import { kitQLClient } from '../kitQLClient';
 
/**
 * Init KitQL (to have clientStarted = true!)
 *
 * Waiting for: https://github.com/sveltejs/kit/issues/4447
 */
export function KQL__Init() {}
 
/* Internal. To skip await on a client side navigation in the load function (from queryLoad)! */
let clientStarted = false; // Will be true on a client side navigation
if (browser) {
	addEventListener('sveltekit:start', () => {
		clientStarted = true;
	});
}
 
/**
 * ResetAllCaches in One function!
 */
export function KQL__ResetAllCaches() {
	KQL_KitFeedbackIssue.resetCache();
	KQL_KitFeedbackIssueTemplate.resetCache();
	KQL_KitFeedbackIssues.resetCache();
	KQL_KitFeedbackMilestones.resetCache();
}
 
/* Operations 👇 */
function KQL_KitFeedbackCreateCommentStore() {
	const operationName = 'KQL_KitFeedbackCreateComment';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackCreateCommentMutation, Types.KitFeedbackCreateCommentMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.KitFeedbackCreateCommentMutationVariables>
		): Promise<RequestResult<Types.KitFeedbackCreateCommentMutation, Types.KitFeedbackCreateCommentMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_KitFeedbackCreateComment).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackCreateCommentMutation, Types.KitFeedbackCreateCommentMutationVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackCreateCommentDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackCreateComment` Operation
 */
export const KQL_KitFeedbackCreateComment = KQL_KitFeedbackCreateCommentStore();

function KQL_KitFeedbackAddReactionStore() {
	const operationName = 'KQL_KitFeedbackAddReaction';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackAddReactionMutation, Types.KitFeedbackAddReactionMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.KitFeedbackAddReactionMutationVariables>
		): Promise<RequestResult<Types.KitFeedbackAddReactionMutation, Types.KitFeedbackAddReactionMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_KitFeedbackAddReaction).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackAddReactionMutation, Types.KitFeedbackAddReactionMutationVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackAddReactionDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackAddReaction` Operation
 */
export const KQL_KitFeedbackAddReaction = KQL_KitFeedbackAddReactionStore();

function KQL_KitFeedbackCreateIssueStore() {
	const operationName = 'KQL_KitFeedbackCreateIssue';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackCreateIssueMutation, Types.KitFeedbackCreateIssueMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.KitFeedbackCreateIssueMutationVariables>
		): Promise<RequestResult<Types.KitFeedbackCreateIssueMutation, Types.KitFeedbackCreateIssueMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_KitFeedbackCreateIssue).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackCreateIssueMutation, Types.KitFeedbackCreateIssueMutationVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackCreateIssueDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackCreateIssue` Operation
 */
export const KQL_KitFeedbackCreateIssue = KQL_KitFeedbackCreateIssueStore();

function KQL_KitFeedbackMinimizeCommentStore() {
	const operationName = 'KQL_KitFeedbackMinimizeComment';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackMinimizeCommentMutation, Types.KitFeedbackMinimizeCommentMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.KitFeedbackMinimizeCommentMutationVariables>
		): Promise<RequestResult<Types.KitFeedbackMinimizeCommentMutation, Types.KitFeedbackMinimizeCommentMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_KitFeedbackMinimizeComment).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackMinimizeCommentMutation, Types.KitFeedbackMinimizeCommentMutationVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackMinimizeCommentDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackMinimizeComment` Operation
 */
export const KQL_KitFeedbackMinimizeComment = KQL_KitFeedbackMinimizeCommentStore();

function KQL_KitFeedbackUpdateCommentStore() {
	const operationName = 'KQL_KitFeedbackUpdateComment';
	const operationType = ResponseResultType.Mutation;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackUpdateCommentMutation, Types.KitFeedbackUpdateCommentMutationVariables>>({...defaultStoreValue, operationName, operationType});

		async function mutateLocal(
			params?: RequestParameters<Types.KitFeedbackUpdateCommentMutationVariables>
		): Promise<RequestResult<Types.KitFeedbackUpdateCommentMutation, Types.KitFeedbackUpdateCommentMutationVariables>> {
			let { fetch, variables } = params ?? {};

			const storedVariables = get(KQL_KitFeedbackUpdateComment).variables;
			variables = variables ?? storedVariables;

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackUpdateCommentMutation, Types.KitFeedbackUpdateCommentMutationVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackUpdateCommentDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		mutate: mutateLocal,

	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackUpdateComment` Operation
 */
export const KQL_KitFeedbackUpdateComment = KQL_KitFeedbackUpdateCommentStore();

function KQL_KitFeedbackIssueStore() {
	const operationName = 'KQL_KitFeedbackIssue';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackIssueQuery, Types.KitFeedbackIssueQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.KitFeedbackIssueQueryVariables>
		): Promise<RequestResult<Types.KitFeedbackIssueQuery, Types.KitFeedbackIssueQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_KitFeedbackIssue).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.KitFeedbackIssueQuery, Types.KitFeedbackIssueQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackIssueQuery, Types.KitFeedbackIssueQueryVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackIssueDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.KitFeedbackIssueQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await in purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.KitFeedbackIssueQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.KitFeedbackIssueQuery, variables: Types.KitFeedbackIssueQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.KitFeedbackIssueQuery, Types.KitFeedbackIssueQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_KitFeedbackIssue), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_KitFeedbackIssue), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackIssue` Operation
 */
export const KQL_KitFeedbackIssue = KQL_KitFeedbackIssueStore();

function KQL_KitFeedbackIssueTemplateStore() {
	const operationName = 'KQL_KitFeedbackIssueTemplate';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackIssueTemplateQuery, Types.KitFeedbackIssueTemplateQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.KitFeedbackIssueTemplateQueryVariables>
		): Promise<RequestResult<Types.KitFeedbackIssueTemplateQuery, Types.KitFeedbackIssueTemplateQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_KitFeedbackIssueTemplate).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.KitFeedbackIssueTemplateQuery, Types.KitFeedbackIssueTemplateQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackIssueTemplateQuery, Types.KitFeedbackIssueTemplateQueryVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackIssueTemplateDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.KitFeedbackIssueTemplateQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await in purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.KitFeedbackIssueTemplateQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.KitFeedbackIssueTemplateQuery, variables: Types.KitFeedbackIssueTemplateQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.KitFeedbackIssueTemplateQuery, Types.KitFeedbackIssueTemplateQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_KitFeedbackIssueTemplate), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_KitFeedbackIssueTemplate), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackIssueTemplate` Operation
 */
export const KQL_KitFeedbackIssueTemplate = KQL_KitFeedbackIssueTemplateStore();

function KQL_KitFeedbackIssuesStore() {
	const operationName = 'KQL_KitFeedbackIssues';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackIssuesQuery, Types.KitFeedbackIssuesQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.KitFeedbackIssuesQueryVariables>
		): Promise<RequestResult<Types.KitFeedbackIssuesQuery, Types.KitFeedbackIssuesQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_KitFeedbackIssues).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.KitFeedbackIssuesQuery, Types.KitFeedbackIssuesQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackIssuesQuery, Types.KitFeedbackIssuesQueryVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackIssuesDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.KitFeedbackIssuesQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await in purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.KitFeedbackIssuesQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.KitFeedbackIssuesQuery, variables: Types.KitFeedbackIssuesQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.KitFeedbackIssuesQuery, Types.KitFeedbackIssuesQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_KitFeedbackIssues), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_KitFeedbackIssues), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackIssues` Operation
 */
export const KQL_KitFeedbackIssues = KQL_KitFeedbackIssuesStore();

function KQL_KitFeedbackMilestonesStore() {
	const operationName = 'KQL_KitFeedbackMilestones';
	const operationType = ResponseResultType.Query;

	// prettier-ignore
	const { subscribe, set, update } = writable<RequestResult<Types.KitFeedbackMilestonesQuery, Types.KitFeedbackMilestonesQueryVariables>>({...defaultStoreValue, operationName, operationType});

		async function queryLocal(
			params?: RequestQueryParameters<Types.KitFeedbackMilestonesQueryVariables>
		): Promise<RequestResult<Types.KitFeedbackMilestonesQuery, Types.KitFeedbackMilestonesQueryVariables>> {
			let { fetch, variables, settings } = params ?? {};
			let { cacheMs, policy } = settings ?? {};

			const storedVariables = get(KQL_KitFeedbackMilestones).variables;
			variables = variables ?? storedVariables;
			policy = policy ?? kitQLClient.policy;

			// Cache only in the browser for now. In SSR, we will need session identif to not mix peoples data
			if (browser) {
				if (policy !== 'network-only') {
					// prettier-ignore
					const cachedData = kitQLClient.requestCache<Types.KitFeedbackMilestonesQuery, Types.KitFeedbackMilestonesQueryVariables>({
						variables, operationName, cacheMs,	browser
					});
					if (cachedData) {
						const result = { ...cachedData, isFetching: false, status: RequestStatus.DONE };
						if (policy === 'cache-first') {
							set(result);
							if (!result.isOutdated) {
								return result;
							}
						} else if (policy === 'cache-only') {
							set(result);
							return result;
						} else if (policy === 'cache-and-network') {
							set(result);
						}
					}
				}
			}

			update((c) => {
				return { ...c, isFetching: true, status: RequestStatus.LOADING };
			});

			// prettier-ignore
			const res = await kitQLClient.request<Types.KitFeedbackMilestonesQuery, Types.KitFeedbackMilestonesQueryVariables>({
				skFetch: fetch,
				document: Types.KitFeedbackMilestonesDocument,
				variables, 
				operationName, 
				operationType, 
				browser
			});
			const result = { ...res, isFetching: false, status: RequestStatus.DONE, variables };
			set(result);
			return result;
		}

	return {
		subscribe,

		/**
		 * Can be used for SSR, but simpler option is `.queryLoad`
		 * @returns fill this store & the cache
		 */
		query: queryLocal,

		/**
		 * Ideal for SSR query. To be used in SvelteKit load function
		 * @returns fill this store & the cache
		 */
		queryLoad: async (
			params?: RequestQueryParameters<Types.KitFeedbackMilestonesQueryVariables>
		): Promise<void> => {
			if (clientStarted) {
				queryLocal(params); // No await in purpose, we are in a client navigation.
			} else {
				await queryLocal(params);
			}
		},

		/**
		 * Reset Cache
		 */
		resetCache(
			variables: Types.KitFeedbackMilestonesQueryVariables | null = null,
			allOperationKey: boolean = true,
			withResetStore: boolean = true
		) {
			kitQLClient.cacheRemove(operationName, { variables, allOperationKey });
			if (withResetStore) {
				set({ ...defaultStoreValue, operationName });
			}
		},

		/**
		 * Patch the store &&|| cache with some data.
		 */
		// prettier-ignore
		patch(data: Types.KitFeedbackMilestonesQuery, variables: Types.KitFeedbackMilestonesQueryVariables | null = null, type: PatchType = 'cache-and-store'): void {
			let updatedCacheStore = undefined;
			if(type === 'cache-only' || type === 'cache-and-store') {
				updatedCacheStore = kitQLClient.cacheUpdate<Types.KitFeedbackMilestonesQuery, Types.KitFeedbackMilestonesQueryVariables>(operationName, data, { variables });
			}
			if(type === 'store-only' ) {
				let toReturn = { ...get(KQL_KitFeedbackMilestones), data, variables } ;
				set(toReturn);
			}
			if(type === 'cache-and-store' ) {
				set({...get(KQL_KitFeedbackMilestones), ...updatedCacheStore});
			}
			kitQLClient.logInfo(operationName, "patch", type);
		}
	};
}
/**
 * KitQL Svelte Store with the latest `KitFeedbackMilestones` Operation
 */
export const KQL_KitFeedbackMilestones = KQL_KitFeedbackMilestonesStore();
