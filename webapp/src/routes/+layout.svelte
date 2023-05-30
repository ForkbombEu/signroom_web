<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.postcss';
	import { featureFlags } from '$lib/pocketbase';

	export let data;
	$featureFlags = data.featureFlags;
</script>

<slot />
