<script lang="ts">
	import ProjectPage from '$lib/ProjectPage.svelte';
	const description = [
		"Actively used by over 350+ registered users, more than 90+ decks generated.",
		"Developed a SaaS website to display “Library Of Ruina” data, allowing users to create over 90 decks and see game data.",
		"Parsed data from in-game files into PostgreSQL database. Relayed out data through the Django Framework to an API page. Added user authentication features to allow users to login, logout, and create decks.",
		"Installed PostgreSQL, backend Django service, Nginx, and frontend React.js service together in a docker.",
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
