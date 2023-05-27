<script lang="ts">
	import { capitalize } from '$lib/utils/helpers';

	import { Helper, Input, Label } from 'flowbite-svelte';

	import type { FieldPath, UnwrapEffects } from 'sveltekit-superforms';
	import type { SuperForm } from 'sveltekit-superforms/client';
	import { formFieldProxy } from 'sveltekit-superforms/client';
	import type { z, AnyZodObject } from 'zod';

	type T = $$Generic<AnyZodObject>;

	export let form: SuperForm<UnwrapEffects<T>, unknown>;
	export let field: keyof z.infer<T> | FieldPath<z.infer<T>>;

	const { path, value, errors, constraints } = formFieldProxy(form, field);
</script>

<div>
	<Label for={field} class="mb-2">{capitalize(String(path))}</Label>

	<Input
		name={field}
		type="text"
		data-invalid={$errors}
		bind:value={$value}
		{...$constraints}
		{...$$restProps}
	/>
	{#if $errors}
		<Helper class="mt-2" color="red">{$errors}</Helper>
	{/if}
</div>
