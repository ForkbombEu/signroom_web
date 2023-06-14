<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import Form, { createForm } from '$lib/components/forms/form.svelte';
	import Input from '$lib/components/forms/input.svelte';
	import { currentUser, pb } from '$lib/pocketbase';
	import { Collections } from '$lib/pocketbase-types';
	import {
		Button,
		Chevron,
		Dropdown,
		DropdownItem,
		Dropzone,
		Heading,
		Modal,
		P,
		Span,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableSearch
	} from 'flowbite-svelte';
	import { CloudArrowUp, LockClosed, MagnifyingGlass, Pencil, Share } from 'svelte-heros-v2';
	import type { PageData } from './$types';
	import { clsx } from 'clsx';

	export let data: PageData;

	let searchTerm = '';
	const superform = createForm(data.form, data.schema, async ({ form }) => {
		const { data } = form;
		data.owner = $currentUser.id;
		data.type = keys.type;
		const s = pb.collection(Collections.Signatures);
		await s.create(data);
		createModal = false;
	});
	$: createModal = false;
	$: filteredItems = data.signatures.filter(
		(item) => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);

	const keys = data.schema.keyof().Enum;
	export const snapshot = { capture: superform.capture, restore: superform.restore };

	const formType = (t: any) => {
		keys.type = t;
		createModal = true;
	};
</script>

<PageTitle title="My Signatures" description="Manage your signatures">
	<div slot="actions">
		<script>
			import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
		</script>

		<Button><Chevron>New signature</Chevron></Button>
		<Dropdown frameClass="bg-red-500 !outline outline-2 outline-primary-600 outline-offset-4">
			<DropdownItem on:click={() => formType('pdf')}>Sign PDF</DropdownItem>
			<DropdownItem on:click={() => formType('json')}>Sign JSON</DropdownItem>
			<DropdownItem on:click={() => formType('xml')}>Sign XML</DropdownItem>
		</Dropdown>
	</div>
</PageTitle>
<Table hoverable={true}>
	<TableSearch placeholder="Search by folder name" hoverable={true} bind:inputValue={searchTerm}>
		<TableBody>
			{#each filteredItems as item}
				<TableBodyRow>
					<TableBodyCell>
						<Span
							class={clsx(
								{
									'bg-purple-100 text-purple-800': item.type === 'json',
									'bg-pink-100 text-pink-800': item.type === 'pdf',
									'bg-green-100 text-grern-800': item.type === 'xml'
								},
								'px-3 py-1 rounded uppercase'
							)}
						>
							{item.type}
						</Span>
					</TableBodyCell>
					<TableBodyCell>
						<div class="flex items-center">
							<LockClosed class="shrink-0 w-6 h-6 mr-2 text-slate-500" />
							<div class="flex-col">
								<Heading tag="h6">{item.title}</Heading>
							</div>
						</div>
					</TableBodyCell>
					<TableBodyCell>
						<P class="text-slate-500 text-xs">
							{new Date(item.updated).toLocaleString()}
						</P>
					</TableBodyCell>
					<TableBodyCell>
						<Button color="alternative" size="xs"><Pencil class="mr-2 w-4" /> Edit</Button>
						<Button color="alternative" size="xs"><Share class="mr-2 w-4" /> Share</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</TableSearch>
</Table>

<Modal id="create-modal" title="Create a new .{keys.type} signature" bind:open={createModal}>
	<Form {superform} defaultSubmitButtonText="Sign">
		<Heading tag="h4">New Signature</Heading>
		<Input type="text" label="Signature title" field={keys.title} />
		<Dropzone id="dropzone">
			<CloudArrowUp class="mb-3 w-10 h-10 text-gray-400" />
			<P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
				<span class="font-semibold">Click to upload</span> or drag and drop
			</P>
			<P class="text-xs text-gray-500 dark:text-gray-400">{keys.type} (MAX. 30MB)</P>
			<P
				class="bg-blue-600 flex items-center p-2 rounded text-white hover:bg-blue-800text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg mt-8"
			>
				<MagnifyingGlass class="w-4 h-4 mr-2" /> Browse File
			</P>
		</Dropzone>
		<select name="folders">
			{#each data.folders as f}
				<option value={f.id}>
					{f.name} - {f.id}
				</option>
			{/each}
		</select>
	</Form>
</Modal>
