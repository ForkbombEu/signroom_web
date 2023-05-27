<script>
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Dropzone, P } from 'flowbite-svelte';
	import { CloudArrowUp, MagnifyingGlass } from 'svelte-heros-v2';
</script>

<PageTitle title="Sign a PDF" description="Upload the .pdf file that you want to sign" />

<Dropzone id="dropzone">
	<CloudArrowUp class="mb-3 w-10 h-10 text-gray-400" />
	<P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
		<span class="font-semibold">Click to upload</span> or drag and drop
	</P>
	<P class="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 30MB)</P>
	<P
		class="bg-blue-600 flex items-center p-2 rounded text-white hover:bg-blue-800text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg mt-8"
	>
		<MagnifyingGlass class="w-4 h-4 mr-2" /> Browse File
	</P>
</Dropzone>
