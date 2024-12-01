<script setup lang="ts">
function eventButton() {
	alert('test');
}
</script>

<template>
	<p>Home </p>

	<div class="flex flex-row gap-x-2 w-full h-96 items-center justify-center">
		<UButton @click="eventButton"> Generate </UButton>
		<UButton variant="outline"> Generate </UButton>
		<UButton variant="link"> Generate </UButton>
	</div>
</template>
