<template>
    <div class="details__container">

        <div class="details__wrapper">

            <h1 class="section__title">Product Details</h1>

            <div class="product__card">
                <div class="product__cover">
                    <img :src="require('@/assets/Imgs/Makeup/' + product.image)" alt="">
                    <ShareToSocialMedia></ShareToSocialMedia>
                </div>
                
                <h3 class="on-sale">-60%</h3>

                <div class="product__info">
                    <div class="section">
                        <h1 class="product__name">Product Name</h1>

                        <Rating></Rating>

                        <p class="product__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quae omnis repellendus quia
                            odit ab dignissimos officiis animi! Aliquid, natus. Voluptate ut dolor quas?
                        </p>

                        <ProductColors></ProductColors>

                    </div>

                    <AddToCart></AddToCart>

                </div>
            </div>

        </div>

    </div>
</template>

<script>

import Rating from '@/components/Details/Rating/Rating.vue'
import ProductColors from '@/components/Details/ProductColors/ProductColors.vue'
import AddToCart from '@/components/Details/AddToCart/AddToCart.vue'
import ShareToSocialMedia from '@/components/Details/ShareToSocialMedia/ShareToSocialMedia.vue'

export default {
    name: 'DetailsView',
    props: {},
    components: {
        Rating, ProductColors, AddToCart, ShareToSocialMedia
    },
    data() {
        return {
            product: {
                image: 'lip-gloss-1.jpg'
            },
            cart__count: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.details__container {

    height: 100%;
    width: 100%;
    background-color: var(--custom-color-dark-1);
    color: var(--custom-color-light-1);
    font-family: 'Nunito', sans-serif;
    padding-top: 50px;

    .details__wrapper {
        width: 100%;
        max-width: 1200px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 80px 10px;
        overflow: hidden;

        .section__title {
            font-family: 'Great Vibes', cursive;
            font-weight: 400;
            margin-bottom: 20px;
        }

        .product__card {
            height: 500px;
            overflow: hidden;
            width: 100%;
            background-color: var(--custom-color-light-1);
            color: var(--custom-color-dark-1);
            border: 2px solid var(--custom-color-light-3);
            border-radius: 10px;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            position: relative;

            .product__cover {
                height: 100%;
                width: 100%;
                position: relative;

                img {
                    width: 100%;
                    height: 500px;
                    object-fit: cover;
                    box-shadow: 0px 0px 2px #00000033, 0px 0px 8px #00000033;
                }
            }

            .on-sale {
                position: absolute;
                top: 0;
                right: 0;
                background-color: #e44d4d;
                padding: 10px 20px;
                border-bottom-left-radius: 10px;
                color: var(--custom-color-light-1);
            }

            .product__info {
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-between;

                .section {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    justify-content: start;
                }

                .product__name {
                    font-weight: 800;
                    margin-top: 10px;
                }

                .product__description {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    margin-bottom: 30px;
                    text-align: justify;
                }
            }
        }
    }
}

@media screen and (max-width: 800px) {

    .product__card {
        grid-template-columns: repeat(1, 1fr) !important;
        height: fit-content !important;
        min-height: 1000px !important;
    }

}

</style>