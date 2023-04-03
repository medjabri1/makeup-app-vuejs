<template>

    <div class="filter__container">
        <div class="filter__wrapper">
            <h1 class="filter__title">Filter Products</h1>
            <div class="search__input">
                <input type="text" placeholder="Search items">
            </div>
            <div class="filter__categories">
                <h2 class="category__item active">
                    <span>All</span>
                    <span class="count">45</span>
                </h2>
                <h2 class="category__item">
                    <span>Eyes</span>
                    <span class="count">12</span>
                </h2>
                <h2 class="category__item">
                    <span>Lips</span>
                    <span class="count">25</span>
                </h2>
                <h2 class="category__item">
                    <span>Face</span>
                    <span class="count">18</span>
                </h2>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CustomFilter'
}
</script>

<style lang="scss" scoped>

.filter__container {
    height: fit-content;
    background-color: var(--custom-color-dark-1);
    color: var(--custom-color-light-1);
    font-family: 'Nunito', sans-serif;
    padding-top: 100px;

    .filter__wrapper {
		width: 100%;
		max-width: 800px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin: 0px auto;
		padding: 40px 10px;
        overflow: hidden;

        .filter__title {
            font-size: 1.3rem;
            font-weight: 500;
        }

        .search__input {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0px;

            input {
                width: 100%;
                padding: 8px;
                font-size: .9rem;
                outline: none;
                border: none;
                border: 2px solid var(--custom-color-light-3);
                border-radius: 3px;
                font-family: 'Nunito', sans-serif;
            }
        }

        .filter__categories {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;

            .category__item {
                width: 100%;
                text-align: center;
                background-color: var(--custom-color-dark-2);
                padding: 10px;
                font-size: 1rem;
                border: 2px solid var(--custom-color-dark-3);
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                opacity: .8;
                border-radius: 3px;

                .count {
                    opacity: .2;
                    font-size: .8rem;
                }

                &:hover {
                    opacity: .6;
                }
                
                &.active {
                    opacity: 1;
                    border: 2px solid #FFFFFF55;
                }
            }
        }
    }

}


@media screen and (max-width:1000px) {

    .filter__categories {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media screen and (max-width:600px) {

    .filter__categories {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}


</style>