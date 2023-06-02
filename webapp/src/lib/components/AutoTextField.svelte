<script lang="ts">
	import { capitalize } from '$lib/utils/helpers';

	import { Helper, Input, Label, Textarea } from 'flowbite-svelte';

	import type { FieldPath, UnwrapEffects } from 'sveltekit-superforms';
	import type { SuperForm } from 'sveltekit-superforms/client';
	import { formFieldProxy } from 'sveltekit-superforms/client';
	import type { z, AnyZodObject } from 'zod';

	type T = $$Generic<AnyZodObject>;

	export let form: SuperForm<UnwrapEffects<T>, unknown>;
	export let field: keyof z.infer<T> | FieldPath<z.infer<T>>;
	export let long: boolean = false;

	const { path, value, errors, constraints } = formFieldProxy(form, field);
</script>

<div>
	<Label for={field} class="mb-2">{capitalize(String(path))}</Label>

	{#if long}
		<Textarea
			class="mb-4"
			placeholder={`Write a ${String(path)}`}
			name={field}
			type="text"
			data-invalid={$errors}
			{...$constraints}
			{...$$restProps}
		>
			{$value}
		</Textarea>
	{:else}
		<Input
			name={field}
			type="text"
			data-invalid={$errors}
			bind:value={$value}
			{...$constraints}
			{...$$restProps}
		/>
	{/if}
	{#if $errors}
		<Helper class="mt-2" color="red">{$errors}</Helper>
	{/if}
</div>
