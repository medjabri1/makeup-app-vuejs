<template>

    <div class="card__container">
        <router-link class="card__content" :to="'/details/'+ product.id">
            <div class="card__cover">
                <img class="image" :src="product.imgs[0]" alt="">
            </div>
            <div class="card__text">
                <h1 class="title">{{ product.title }}</h1>
                <h3 class="category">{{ product.category }}</h3>
                <span class="original__price" v-if="product.onSale">{{ product.price }} $</span>
                <span class="price">{{ (product.price - (product.price * product.salePercent / 100)).toFixed(2) }} $</span>
            </div>
            <span class="on-sale" v-if="product.onSale">-{{ product.salePercent }}%</span>
        </router-link>
    </div>

</template>

<script lang="ts">

export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}

</script>

<style lang="scss" scoped>

.card__container {
    // height: fit-content;
    height: 100%;
    width: 100%;
    // border-radius: 2px;
    overflow: hidden;
    background-color: var(--custom-color-light-1);
    border: 3px solid var(--custom-color-light-3);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    a {
        text-decoration: inherit !important;
        color: inherit !important;
    }

    &:hover {

        transform: translateY(-5px);
        .card__cover .image {
            transform: scale(1.5) rotate(15deg);
        }
    }
    
    .card__content {
        height: 100%;
        width: 100%;
        position: relative;
        display: grid;
        grid-template-rows: 2fr 1fr;
        
        .card__cover {
            height: 100%;
            width: 100%;
            overflow: hidden;
            user-select: none;
            
            .image {
                height: 300px;
                width: 100%;
                object-fit: cover;
                transition: all 200ms ease-in-out;
            }
        }
        .card__text {
            padding: 10px;
            color: var(--custom-color-dark-1);
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;

            .title {
                font-size: 1.3rem;
                font-weight: 800;
                color: #e44d4d;
            }

            .category {
                font-size: 1rem;
                font-weight: 800;
                margin-bottom: 10px;
                opacity: .6;
                color: #e44d4d;
                text-transform: capitalize;
            }
            
            .original__price {
                font-size: .9rem;
                font-weight: 800;
                padding: 5px 15px;
                // background-color: #e44d4d;
                // color: var(--custom-color-light-1);
                align-self: flex-end;
                position: relative;
                opacity: .5;
                margin-right: 20px;

                &::before {
                    content: '';
                    position: absolute;
                    top: calc(50% - 2px);
                    left: 0;
                    height: 1px;
                    width: calc(90%);
                    background-color: var(--custom-color-dark-1);
                    transform: rotate(-10deg);
                }
            }
            
            .price {
                font-size: 1.2rem;
                font-weight: 800;
                padding: 5px 15px;
                // background-color: #e44d4d;
                // color: var(--custom-color-light-1);
                align-self: flex-end;
            }
        }

        .on-sale {
            position: absolute;
            top: 0px;
            right: 0px;
            padding: 5px 15px;
            background-color: #e44d4d;
            user-select: none;
        }
    }

}

</style>