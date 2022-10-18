<script lang="ts">
	export let description: string[] = [];
	export let img_link: string = '';
	export let title: string = '';
</script>

<div>
	<div class="flex flex-row text-quaternary font-serif">
		<div class="basis-1/5" />
		<div class="basis-2/5">
			<div class="text-4xl">{title}</div>
			<ul class="text-xl list-disc">
				{#each description as desc, i}
					<li>
						{desc}
					</li>
				{/each}
			</ul>
		</div>
		<div class="basis-1/5">
			<img src={img_link} alt="yes" />
		</div>
		<div class="basis-1/5" />
	</div>
</div>
