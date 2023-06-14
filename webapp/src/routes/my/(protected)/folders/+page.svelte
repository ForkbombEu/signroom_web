<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Form, { createForm } from '$lib/components/forms/form.svelte';
	import Input from '$lib/components/forms/input.svelte';
	import Textarea from '$lib/components/forms/textarea.svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import { Collections, type FoldersRecord } from '$lib/pocketbase-types';
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
	import type { PageData } from './$types';

	export let data: PageData;
	const superform = createForm(data.form, data.schema, async ({ form }) => {
		const { data } = form;
		data.owner = $currentUser?.id;
		const f = pb.collection(Collections.Folders);
		await f.create(data);
		createModal = false;
	});

	let searchTerm = '';
	$: createModal = false;
	$: filteredItems = data.folders.filter(
		(item) => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	const keys = data.schema.keyof().Enum;
	const { capture, restore } = superform;
	export const snapshot = { capture, restore };
</script>

<PageTitle title="My folders" description="Manage your folders">
<div slot="actions" class="m-0 p-0 grid justify-items-end">
	<Button on:click={() => (createModal = true)} class="w-40 mb-4">Create folder</Button>
</div>
</PageTitle>

<Table hoverable={true}>
	<TableSearch placeholder="Search by folder name" hoverable={true} bind:inputValue={searchTerm}>
		<TableBody>
			{#each filteredItems as item}
				<TableBodyRow>
					<TableBodyCell>
						<div class="flex items-center">
							<Folder class="shrink-0 w-20 h-20 mr-2 text-slate-500" />
							<div class="flex-col">
								<Heading tag="h4">{item.name}</Heading>
								<P>{item.signatures.length} signatures</P>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<P class="text-slate-500 text-sm">{item.description}</P></TableBodyCell
					>
					<TableBodyCell>
						<Button color="alternative" size="xs"><Pencil class="mr-2 w-4" /> Edit</Button>
						<Button color="alternative" size="xs"><Share class="mr-2 w-4" /> Share</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</Table>

<Modal id="create-modal" title="Create a new folder" bind:open={createModal}>
	<Form {superform} defaultSubmitButtonText="Create">
		<Heading tag="h4">New Folder</Heading>
		<Input type="text" label="Folder name" field={keys.name} />
		<Textarea label="Folder description" field={keys.description} />
	</Form>
</Modal>
