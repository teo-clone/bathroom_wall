<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
	import type { PageData } from './$types';
	import moment from 'moment';
	import { goto } from '$app/navigation';
	import { timeGroupToDisplayDate } from '$lib/utils/timeUtils';

	export let data: PageData;

	$: timeGroupToCount = data.timeGroupToCount;

	function onDateSelected(date: string) {
		const timeGroup = moment(date).format('MM-DD-YYYY');
		goto(`/bars/${data.bar.uniqueName}?date=${timeGroup}`);
	}
</script>

<div class="mx-5 flex justify-between">
	<a href="/"><h1>bathroom <br /> wall</h1></a>
	<div class="flex flex-col items-end justify-center text-right">
		<h2>{data.bar.name}</h2>
		<a
			href={`/bars/${data.bar.uniqueName}?date=${data.timeGroup}`}
			class="flex items-center gap-2 rounded-xl border border-gray-400 bg-black px-2 text-white no-underline"
		>
			<p class="text-sm">
				{data.isArchivedWall ? timeGroupToDisplayDate(data.timeGroup) : 'Today'}
			</p>
		</a>
	</div>
</div>

<Calendar
	on:dateSelected={(e) => onDateSelected(e.detail.date)}
	{timeGroupToCount}
	initialValue={data.timeGroup}
/>
