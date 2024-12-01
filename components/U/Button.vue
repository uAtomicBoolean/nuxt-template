<script setup lang="ts">
const props = defineProps({
	variant: {
		default: 'solid',
		type: String,
	},
});

const cssClass = (() => {
	switch (props.variant) {
		case 'solid':
			return 'btn-solid';
		case 'outline':
			return 'btn-outline';
		case 'link':
			return 'btn-link';
		default:
			return 'btn-solid';
	}
})();
</script>

<template>
	<button type="button" :class="cssClass">
		<slot />
	</button>
</template>
