import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase-types';
import { superValidate } from 'sveltekit-superforms/client';
import { z } from 'zod';

const schema = z.object({
	title: z.string(),
	type: z.enum(['pdf', 'xml', 'json']),
	owner: z.string(),
	folders: z.string()
});

export const load = async () => {
	const folders = await pb.collection(Collections.Folders).getFullList();
	const signatures = await pb.collection(Collections.Signatures).getFullList();
	const form = await superValidate(schema);
	return { schema, form, folders, signatures };
};
