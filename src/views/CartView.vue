<template>

    <div class="cart__container">

        <div class="cart__wrapper">

            <h1 class="cart__title">Products In Cart ({{ cartItems.length }})</h1>

            <div class="cart__list" v-if="cartItems.length > 0">
                <CartItem v-for="(item, index) in cartItems" :key="index" :item="item"></CartItem>

                <div class="cart__total__price">
                    total: {{ total.toFixed(2) }} $
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
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart;
        },
        total() {
            let items = this.cartItems;

            let total = 0;

            items.map(item => {

                if(item.onSale) {
                    total += (item.price - (item.price * item.salePercent / 100)) * item.quantity;
                } else {
                    total += (item.price * item.quantity);
                }

            });

            return total;
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
                margin-top: 15px;
                font-size: 1rem;
                padding: 10px 25px;
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