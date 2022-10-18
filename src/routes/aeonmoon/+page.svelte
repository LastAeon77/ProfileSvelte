<script lang="ts">
	import ProjectPage from '$lib/ProjectPage.svelte';
	const description = [
		'Created website to display Library Of Ruina data, allow users to create decks, and send data through API.',
		'Read data from in-game files into PostgreSQL database. Send out data through the Django Framework to an API page. Added user authentication features to allow users to login, logout, and create their own decks.',
		'Deployed PostgreSQL, Backend service, Nginx, and Next.js service together in a docker.',
		'Actively used by over 50 registered users and bots.'
	];
</script>

<div>
	<ProjectPage
		{description}
		img_link={'/images/website.png'}
		title={'Aeonmoon Full Stack Website'}
	/>
	<div class="flex flex-row">
		<div class="basis-1/5" />
		<div class="basis-2/5">
			<div class="text-xl" />
			<ul class="list-disc text-xl">
				<li class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
					<a href="https://malcute.aeonmoon.page/">Check it out here!</a>
				</li>
			</ul>
		</div>
		<div class="basis-1/5" />
	</div>
</div>
