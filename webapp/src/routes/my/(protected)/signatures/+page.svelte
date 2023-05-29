<script lang="ts">
	import AutoTextField from '$lib/components/AutoTextField.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import {
		Button,
		Heading,
		Modal,
		P,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableSearch
	} from 'flowbite-svelte';
	import { Folder, Pencil, Share } from 'svelte-heros-v2';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	let searchTerm = '';

	$: createModal = false;
	$: folders = data.folders;
	$: filteredItems = folders.filter(
		(item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	const form = superForm(data.form);
	export const snapshot = { capture: form.capture, restore: form.restore };
</script>

<PageTitle title="My Signatures" description="Manage your signatures" />
<div class="m-0 p-0 grid justify-items-end">
	<Button on:click={() => (createModal = true)} class="w-40 mb-4">Create folder</Button>
</div>
<Table hoverable={true}>
	<TableSearch
		placeholder="Search by folder name"
		hoverable={true}
		bind:inputValue={searchTerm}
	>
		<TableBody>
			{#each filteredItems as item}
				<TableBodyRow>
					<TableBodyCell>
						<div class="flex items-center">
							<Folder
								class="shrink-0 w-20 h-20 mr-2 text-slate-500"
							/>
							<div class="flex-col">
								<Heading tag="h4"
									>{item.name}</Heading
								>
								<P>{item.description}</P>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<P class="text-slate-500 text-sm">{item.updated}</P
						></TableBodyCell
					>
					<TableBodyCell>
						<Button color="alternative" size="xs"
							><Pencil class="mr-2 w-4" /> Edit</Button
						>
						<Button color="alternative" size="xs"
							><Share class="mr-2 w-4" /> Share</Button
						>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</Table>

<Modal id="create-modal" title="Create a new folder" bind:open={createModal}>
	<form
		method="POST"
		use:form.enhance
		on:submit={() => {
			createModal = false;
		}}
	>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<AutoTextField field="name" {form} />
		</div>
		<div class="mb-6">
			<AutoTextField field="description" {form} />
		</div>
		<Button type="submit">Submit</Button>
	</form>
</Modal>
