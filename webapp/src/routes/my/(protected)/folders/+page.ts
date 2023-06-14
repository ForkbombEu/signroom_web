import { pb } from '$lib/pocketbase';
import { Collections } from '$lib/pocketbase-types';
import { superValidate } from 'sveltekit-superforms/client';
import { z } from 'zod';

const schema = z.object({
	name: z.string(),
	description: z.string().optional(),
	owner: z.string()
});

export const load = async () => {
	const folders = await pb.collection(Collections.Folders).getFullList();
	const form = await superValidate(schema);
	return { schema, form, folders };
};
