import { superValidate } from 'sveltekit-superforms/server';
import { folder } from '$lib/utils/schema';
import { fail } from '@sveltejs/kit';
import { getAll } from '$lib/utils/db';
import { Collections } from '$lib/pocketbase-types.js';

export const load = async ({ locals }) => {
	const form = await superValidate(folder);
	const folders = await getAll(locals, Collections.Folders);
	return { form, folders };
};

export const actions = {
	default: async ({ locals, request }) => {
		const form = await superValidate(request, folder);

		if (!form.valid) {
			return fail(400, { form });
		}

		if (locals.user) {
			form.data.owner = locals.user.id;
			const record = await locals.pb.collection(Collections.Folders).create(form.data);
		}

		return { form };
	}
};
