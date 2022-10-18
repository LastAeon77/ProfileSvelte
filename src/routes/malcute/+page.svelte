<script lang="ts">
	import ProjectPage from '$lib/ProjectPage.svelte';
	const description = [
		'Created an easy way for users in LibraryOfRuinaFanHub discord server to query in-game information and perform miscellaneous tasks.',
		'Programmed a Python Discord bot using Discord.py. Initially query from csv file, later query data directly from Aeonmoon Website through its REST API. Currently deployed on Digital Ocean Virtual Server.',
		'Used on 20+ servers, directly acknowledged by the game director.'
	];
</script>

<div>
	<ProjectPage {description} img_link={'/images/Discord-Logo.png'} title={'Discord Bot Malcute'} />
</div>
