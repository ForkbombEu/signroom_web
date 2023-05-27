import { superValidate } from 'sveltekit-superforms/server';
import { folder } from '$lib/utils/schema';
import { fail } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const form = await superValidate(folder);
	const folders = structuredClone(await locals.pb.collection('folders').getFullList());
	return { form, folders };
};

export const actions = {
	default: async ({ locals, request }) => {
		const form = await superValidate(request, folder);
		console.log('POST', form, locals.user);

		if (!form.valid) {
			return fail(400, { form });
		}

		if (locals.user) {
			form.data.owner = locals.user.id;
			const record = await locals.pb.collection('folders').create(form.data);
		}

		return { form };
	}
};
