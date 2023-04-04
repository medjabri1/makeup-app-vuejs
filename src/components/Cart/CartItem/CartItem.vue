<template>
    <div class="cart__item">
        <div class="section cover">
            <img :src="item.image" alt="">
        </div>

        <div class="section info">
            <router-link class="product__name" to="/details/1">{{ item.title }}</router-link>
            <p class="unit__price">Unit: <span>{{ price.toFixed(2) }} $</span></p>
            <p class="total__price">Total: <span>{{ (price * item.quantity).toFixed(2) }} $</span></p>
        </div>

        <div class="section control">
            <div class="cart__control">
                <font-awesome-icon class="icon" :icon="['fas', 'minus']"></font-awesome-icon>
                <span>{{ item.quantity }}</span>
                <font-awesome-icon class="icon" :icon="['fas', 'plus']"></font-awesome-icon>
            </div>
            <h3 class="delete__control">
                <font-awesome-icon class="icon" :icon="['fas', 'xmark']"></font-awesome-icon>
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    computed: {
        cartItems() {
            return this.$store.getters.cart;
        },
        price() {

            let item = this.item;

            if(item.onSale) {
                return item.price - (item.price * item.salePercent / 100);
            } else {   
                return item.price;
            }
        }
    }
}
</script>

<style lang="scss">

.cart__item {
    height: 120px;
    width: 100%;
    background-color: var(--custom-color-light-1);
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 2px #00000011, 0px 0px 8px #00000011;
    border-radius: 5px;
    overflow: hidden;

    .section {
        height: 100%;

        &.cover {
            flex: 1;
            border-right: 1px solid #00000022;
            user-select: none;
            
            img {
                height: 100%;
                width: 120px;
                object-fit: cover;
            }
        }

        &.info {
            padding: 10px 40px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;

            .product__name {
                font-size: 1.1rem;
                margin-bottom: 5px;
                text-decoration: none;
                color: inherit;
                font-weight: 700;
            }

            .unit__price {
                font-size: 1rem;
                font-weight: 800;
                align-self: flex-end;

                span {
                    font-weight: 500;
                }
            }

            .total__price {
                font-size: 1rem;
                font-weight: 800;
                align-self: flex-end;

                span {
                    font-weight: 500;
                }
            }
        }
    
        &.control {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            padding: 0px 10px;
            height: 100%;
            user-select: none;

            .cart__control {
                display: flex;
                flex-direction: rows;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
                border-left: 1px solid #00000011;
                border-right: 1px solid #00000011;
                height: 100%;

                .icon {
                    margin: 0px 10px;
                    font-size: 1rem;
                    width: 1.2rem;
                    height: 1.2rem;
                    padding: .2rem;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 200ms ease-in-out;
                    background-color: #576caa;
                    color: var(--custom-color-light-1);
                
                    &:hover {
                        opacity: .8;
                    }
                }
            }

            .delete__control {
                display: flex;
                flex-direction: rows;
                align-items: center;
                justify-content: center;
                background-color: #d14444;
                color: var(--custom-color-light-1);
                // padding: 10px;
                font-size: 1rem;
                width: 1.2rem;
                height: 1.2rem;
                padding: 1rem;
                border-radius: 50%;
                cursor: pointer;
                transition: all 200ms ease-in-out;
                margin-right: 5px;
                
                &:hover {
                    opacity: .8;
                }
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .cart__item {
        height: fit-content !important;
        display: grid !important;
        grid-template-columns: repeat(2, 1fr);

        .section.cover {
            width: 100%;

            img {
                width: 100%;
            }
        }

        .section.info {
            padding: 10px;

            .unit__price {
                align-self: flex-start;
            }

            .total__price {
                align-self: flex-start;
            }
        }

        .section.control {
            padding: 20px !important;
            grid-column: span 2;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            border: 2px solid #00000011;

            .cart__control {
                border: none !important;
            }
        }
    }
}

</style>