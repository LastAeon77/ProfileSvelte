<script lang="ts">
	import ProjectPage from '$lib/ProjectPage.svelte';
	const description = [
		'Lowered bad pitch leads from 40% to 23% by eliminating duplicate hotel entries in Agoda’s potential pitch database using Python, Pandas, SQL, DBeaver, and Hadoop through data analysis and fuzzy searching.',
		'Researched the Agoda database to address problems such as using machine learning to predict future projections.',
		'Used data tools like Tableau to produce images for easier understanding of information.'
	];
</script>

<div>
	<ProjectPage {description} img_link={'/images/agoda.png'} title={'Partner Developer Intern'} />
</div>
