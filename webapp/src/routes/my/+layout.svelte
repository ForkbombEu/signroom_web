<script lang="ts">
	import '../../app.postcss';
	import { page } from '$app/stores';
	import {
		ChartPie,
		ClipboardDocumentCheck,
		InboxArrowDown,
		Identification,
		Wallet,
		WrenchScrewdriver,
		UserCircle,
		Lifebuoy
	} from 'svelte-heros-v2';
	import {
		Sidebar,
		SidebarWrapper,
		SidebarBrand,
		SidebarItem,
		SidebarGroup,
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		SidebarCta,
		CloseButton
	} from 'flowbite-svelte';

	let site = {
		name: 'Signroom',
		href: '/',
		img: '/logo.svg'
	};

	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;
</script>

<div class="flex min-h-screen">
	<Sidebar>
		<SidebarWrapper class="min-h-screen flex flex-col justify-between">
			<SidebarGroup>
				<SidebarBrand {site} />
				<SidebarItem label="Overview" href="/my/dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarDropdownWrapper label="Signatures">
					<svelte:fragment slot="icon">
						<ClipboardDocumentCheck />
					</svelte:fragment>
					<SidebarDropdownItem label="Validate signature" />
					<SidebarDropdownItem label="Multisignature" />
					<SidebarDropdownItem label="Zero Knowledge Proof" />
				</SidebarDropdownWrapper>

				<SidebarItem label="Notifications" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxArrowDown />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarDropdownWrapper label="Identity">
					<svelte:fragment slot="icon">
						<Identification />
					</svelte:fragment>
					<SidebarDropdownItem label="My DID" />
					<SidebarDropdownItem label="My Verifiable Credentials" />
				</SidebarDropdownWrapper>
				<SidebarDropdownWrapper label="Organization">
					<svelte:fragment slot="icon">
						<Wallet />
					</svelte:fragment>
					<SidebarDropdownItem label="Credential issuer" />
				</SidebarDropdownWrapper>
			</SidebarGroup>
			<SidebarGroup>
				<SidebarCta label="Beta">
					<svelte:fragment slot="icon">
						<CloseButton data-collapse-toggle="dropdown-cta" />
					</svelte:fragment>
					<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
						Signroom is in beta! You can turn the new navigation off for a limited time in your
						profile.
					</p>
					<a
						class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
						href="/"
					>
						Turn new navigation off
					</a>
				</SidebarCta>
				<SidebarItem label="Settings">
					<svelte:fragment slot="icon">
						<WrenchScrewdriver />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Account">
					<svelte:fragment slot="icon">
						<UserCircle />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Help">
					<svelte:fragment slot="icon">
						<Lifebuoy />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	<div class="p-8 bg-slate-100 grow bg-[url('/bg.png')] bg-cover">
		<div class="rounded-lg p-4 bg-white max-w-3xl">
			<slot />
		</div>
	</div>
</div>
