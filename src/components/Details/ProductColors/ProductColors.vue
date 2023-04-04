<template>
	<div class="product__colors">
		<p class="color__item" style="background-color: #766fc3"></p>
		<p class="color__item" style="background-color: #7693a8"></p>
		<p class="color__item" style="background-color: #766fc3"></p>
		<p class="color__item" style="background-color: #e44d4d"></p>
		<p class="color__item" style="background-color: "></p>
	</div>
</template>

<script>

export default {
	name: 'ProductColors'
};

</script>

<style lang="scss">

.product__colors {
	display: flex;
	align-items: center;
	justify-content: center;

	.color__item {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		margin: 0px 5px;
	}
}

</style>
