import type { Collections } from '$lib/pocketbase-types';

export const getAll = async (locals: App.Locals, collection: Collections) =>
	structuredClone(await locals.pb.collection(collection).getFullList());
