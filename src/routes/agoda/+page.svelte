<script lang="ts">
	import ProjectPage from '$lib/ProjectPage.svelte';
	const description = [
		'Researched Agoda database to tackle problems such as using machine learning to predict future projections, or data tools to project images for upper management to shine light on the problems.',
		'Negotiated with the business department on their requirements for the project, then utilized Python, Pandas, SQL, Tableau, DBeaver, and Hadoop to navigate through the database and analyze it using data analysis and fuzzy searching.',
		'Reduced bad pitch leads from 40% to 23% by eliminating duplicate hotels in Agoda’s database from the potential pitch database.'
	];
</script>

<div>
	<ProjectPage {description} img_link={'/images/agoda.png'} title={'Partner Developer Intern'} />
</div>
