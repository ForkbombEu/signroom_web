<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { A, Alert, Button, Heading, Hr, P } from 'flowbite-svelte';
	import UserQuestions from '$lib/components/userQuestions.svelte';
	import { userQuestionsKeys as qk, type UserAnswers } from '$lib/auth/userQuestions';
	import { generateKeypair, getHMAC, saveKeypairToLocalStorage } from '$lib/auth/keypair';
	import { log } from '$lib/utils/devLog';

	export let data;

	let seed = '';
	let error = '';

	const onSubmit: SubmitFunction = async ({ data: formData, cancel }) => {
		try {
			const userEmail = data.user?.email as string;
			const userAnswers: UserAnswers = {
				question1: formData.get(qk.question1) as string,
				question2: formData.get(qk.question2) as string,
				question3: formData.get(qk.question3) as string,
				question4: formData.get(qk.question4) as string,
				question5: formData.get(qk.question5) as string
			};
			const HMAC = await getHMAC(userEmail);
			const keypair = await generateKeypair(userEmail, HMAC, userAnswers);
			saveKeypairToLocalStorage(keypair);
			seed = keypair.seed;
		} catch (e) {
			log(e, JSON.stringify(e));
			cancel();
		}

		return async ({ result }) => {
			await applyAction(result);
		};
	};
</script>

<div
	class=" bg-white mx-auto max-w-md p-6 rounded-md shadow-md dark:bg-gray-800 dark:text-white space-y-6"
>
	{#if !seed}
		<form class="space-y-6" method="post" use:enhance={onSubmit}>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Generate your keys</h3>

			<Alert dismissable={false} accent={false}>
				<span slot="icon"
					><svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/></svg
					>
				</span>
				<span class="sr-only">Info</span>
				<span class="font-bold">Important information</span>
				<ul slot="extra" class="mt-0 ml-8 list-disc pl-4 space-y-1 pt-1">
					<li>
						By answering these questions, you will generate keys that will be used to encrypt your
						data.
					</li>
					<li>Please remember the answers, as they will be the only way to restore the keys.</li>
					<li>Please answer at least 3 of the following questions.</li>
				</ul>
			</Alert>

			<UserQuestions />
			<Hr />

			<Button type="submit">Create keys</Button>

			{#if error}
				<pre class="bg-red-100">{JSON.stringify(error, null, 2)}</pre>
			{/if}
		</form>
	{:else}
		<Heading tag="h4">Keypair creation successful!</Heading>
		<P size="sm" color="text-gray-400 dark:text-gray-600">
			Please store this in a safe place to recover your account in the future, this passphrase will
			be shown only one time!
		</P>
		<Alert dismissable={false} accent={false}>
			<span class="font-mono">
				{seed}
			</span>
		</Alert>
		<Button href="/my/dashboard">Go to Dashboard</Button>
	{/if}
</div>