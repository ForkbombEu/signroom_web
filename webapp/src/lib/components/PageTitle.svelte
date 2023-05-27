<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';

	export let title: string;
	export let description: string;
</script>

<Heading tag="h1">{title}</Heading>

<hr />

<P class="text-slate-600 mb-4">{description}</P>
