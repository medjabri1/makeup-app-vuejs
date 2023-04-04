<template>

    <div class="cart__container">

        <div class="cart__wrapper">

            <h1 class="cart__title">Products In Cart ({{ cart.length }})</h1>

            <div class="cart__list" v-if="cart.length > 0">
                <CartItem v-for="(item, index) in cart" :key="index"></CartItem>

                <div class="cart__total__price">
                    total: {{ total }} $
                </div>

                <router-link to="/checkout" class="proceed__checkout">Proceed to checkout</router-link>

            </div>

            <div class="no__items" v-else>

                <h2 class="headline">Oops! Your cart is empty</h2>
                <p class="sub__headline">How about adding some items from the browsing page ?</p>
                <router-link class="return__browse" to="/browse">Start Browsing</router-link>

            </div>

        </div>

    </div>

</template>

<script>

import CartItem from "@/components/Cart/CartItem/CartItem.vue";

export default {
    name: 'CartView',
    components: {
        CartItem
    },
    data() {
        return {
            total: 1900,
            cart: [1, 2, 3]
        }
    }
}

</script>

<style lang="scss">

.cart__container {
	height: 100%;
    font-family: 'Nunito', sans-serif;

    .cart__wrapper {
		height:100%;
        min-height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
        color: var(--custom-color-light-1);
        padding-top: 100px;

        .cart__title {
            text-align: center;
            margin-top: 10px;
            font-style: 1.5rem;
        }

        .cart__list {
            margin: 0px 20px;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            background-color: var(--custom-color-light-2);
            align-items: center;
            justify-content: center;
            color: var(--custom-color-dark-1);
            border-radius: 5px;
            padding: 20px;

            .cart__total__price {
                font-weight: 800;
                font-size: 1.2rem;
                text-transform: capitalize;
                margin-top: 20px;
                align-self: flex-start;
            }

            .proceed__checkout {
                font-size: 1.2rem;
                padding: 10px 20px;
                background-color: var(--custom-color-dark-3);
                color: var(--custom-color-light-1);
                border-radius: 5px;
                cursor: pointer;
                transition: all 200ms ease-in-out;
                text-decoration: none;

                &:hover {
                    opacity: .9;
                }
            }
        }

        .no__items {
            background-color: var(--custom-color-light-1);
            margin-top: 50px;
            padding: 70px 30px;
            color: var(--custom-color-dark-1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 10px;

            .headline {
                font-size: 2rem;
                margin-bottom: 5px;
            }

            .sub__headline {
                font-size: 1.2rem;
                max-width: 400px;
                text-align: center;
                margin-bottom: 40px;

            }

            .return__browse {
                text-decoration: none;
                padding: 10px 20px;
                font-size: 1.2rem;
                border-radius: 5px;
                background-color: var(--custom-color-dark-3);
                color: var(--custom-color-light-1);
                transition: all 200ms ease-in-out;

                &:hover {
                    opacity: .9;
                }
            }
        }
    }
}

</style>