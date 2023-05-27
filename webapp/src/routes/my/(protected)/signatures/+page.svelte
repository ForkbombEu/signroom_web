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
		// TableHead,
		// TableHeadCell,
		TableSearch
	} from 'flowbite-svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { Folder } from 'svelte-heros-v2';

	export let data: PageData;

	let createModal = false;
	let searchTerm = '';
	const folders = data.folders;
	const form = superForm(data.form);

	$: filteredItems = folders.filter(
		(item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

<PageTitle title="My Signatures" description="Manage your signatures" />
<div class="m-0 p-0 grid justify-items-end">
	<Button on:click={() => (createModal = true)} class="w-40 mb-4">Create folder</Button>
</div>
<Table hoverable={true}>
	<TableSearch placeholder="Search by folder name" hoverable={true} bind:inputValue={searchTerm}>
		<!-- <TableHead>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Description</TableHeadCell>
		</TableHead> -->
		<TableBody>
			{#each filteredItems as item}
				<TableBodyRow>
					<TableBodyCell>
						<div class="flex items-center">
							<Folder class="w-20 h-20 mr-2 text-slate-500" />
							<div class="flex-col">
								<Heading tag="h4">{item.name}</Heading>
								<P>{item.description}</P>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>{item.updated}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</Table>

<Modal id="create-modal" title="Create a new folder" bind:open={createModal}>
	<form method="POST" use:form.enhance>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<AutoTextField field="name" {form} />
		</div>
		<div class="mb-6">
			<AutoTextField field="description" {form} />
		</div>
		<Button type="submit">Submit</Button>
	</form>
</Modal>
