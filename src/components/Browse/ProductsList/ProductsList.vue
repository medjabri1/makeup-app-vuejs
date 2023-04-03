<template>
    <div class="list__container">
        <div class="list__wrapper">
            <h1 class="list__title">Products List</h1>
            <div class="list__content">
                <card :product="{'image': 'lip-gloss-1.jpg'}"></card>
                <card :product="{'image': 'lipstick-1.jpg'}"></card>
                <card :product="{'image': 'brushes-1.jpg'}"></card>
                <card :product="{'image': 'brushes-2.jpg'}"></card>
                <card :product="{'image': 'brushes-1.jpg'}"></card>
                <card :product="{'image': 'brushes-2.jpg'}"></card>
                <card :product="{'image': 'lip-gloss-1.jpg'}"></card>
                <card :product="{'image': 'lipstick-1.jpg'}"></card>
                <card :product="{'image': 'lip-gloss-1.jpg'}"></card>
                <card :product="{'image': 'lipstick-1.jpg'}"></card>
                <card :product="{'image': 'brushes-1.jpg'}"></card>
                <card :product="{'image': 'brushes-2.jpg'}"></card>
            </div>
        </div>
    </div>
</template>

<script>

import Card from "@/components/Card.vue";

export default {
    name: 'ProductList',
    components: {
        Card
    }
}
</script>

<style lang="scss" scoped>

.list__container {
    height: 100%;
    background-color: var(--custom-color-dark-1);
    color: var(--custom-color-light-1);
    font-family: 'Nunito', sans-serif;

    .list__wrapper {
        width: 100%;
		max-width: 1200px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0px auto;
		padding: 40px 10px;
        overflow: hidden;

        .list__title {
            color: var(--custom-color-light-1);
            font-family: 'Great Vibes', cursive;
            letter-spacing: 1px;
            font-size: 2.2rem;
            font-weight: 500;
            margin-bottom: 10px;
        }

        .list__content {
            margin: 20px;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

    }
}

@media screen and (max-width:1000px) {

    .list__content {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media screen and (max-width:600px) {

    .list__content {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}


</style>