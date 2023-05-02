<script lang="ts">
	import ProjectPage from '$lib/ProjectPage.svelte';
	const description = [
		"Rolled out on 20+ servers to over 19000+ people, directly acknowledged by game director.",
		"Devised a Python discord bot that allows way for users in a fan-made discord server to query 300+ different pieces of in-game information and perform miscellaneous tasks.",
		"Programmed using Discord.py. Initially query from CSV file, later query data directly from Aeonmoon Website and Google’s Youtube RESTAPI. Currently running on Digital Ocean."
	];
</script>

<div>
	<ProjectPage {description} img_link={'/images/Discord-Logo.png'} title={'Discord Bot Malcute'} />
</div>
