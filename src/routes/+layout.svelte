<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	const selected_class = 'bg-primary text-quaternary px-3 py-2 rounded-md text-sm font-medium';
	const default_class =
		'text-gray-300 hover:bg-primary hover:text-quaternary px-3 py-2 rounded-md text-sm font-medium';
</script>

<nav class="bg-tertiary">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="/"
							class={$page.routeId === '' ? selected_class : default_class}
							aria-current="page">Home</a
						>

						<a href="/shopify" class={$page.routeId === 'shopify' ? selected_class : default_class}
							>Shopify Internship</a
						>

						<a href="/agoda" class={$page.routeId === 'agoda' ? selected_class : default_class}
							>Agoda Internship</a
						>

						<a
							href="/aeonmoon"
							class={$page.routeId === 'aeonmoon' ? selected_class : default_class}
							>Full-stack Website Project</a
						>
						<a href="/malcute" class={$page.routeId === 'malcute' ? selected_class : default_class}
							>Discord Bot Project</a
						>
						<a href="/resume" class={$page.routeId === 'resume' ? selected_class : default_class}
							>Resume</a
						>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			/>
		</div>
	</div>
</nav>
<div class="h-screen bg-primary">
	<slot />
</div>
