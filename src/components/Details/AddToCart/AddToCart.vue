<template>
    <div class="section">
        <h3 class="price"><span class="original">380</span><span class="current">290 $</span></h3>
        <div class="cart">
            <div class="cart__control">
                <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
                <span class="cart__count">{{ cart__count }}</span>
                <font-awesome-icon class="icon" :icon="['fas', 'minus']" />
            </div>
            <h3 class="add__to__cart">
                <font-awesome-icon class="icon" :icon="['fas', 'cart-plus']" />
                <span>Add To Cart</span>
            </h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AddToCart',

    props: {},

    data() {
        return {
            cart__count: 1,
        }
    }
}

</script>

<style lang="scss">

.section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;

    .price {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        user-select: none;

        .original {
            font-size: 1.2rem;
            font-weight: 800;
            align-self: center;
            margin-bottom: 20px;
            color: #e44d4d;
            margin-right: 10px;
            position: relative;
            opacity: .5;
            transform: translate(-5px, -10px);

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -10%;
                width: 120%;
                height: 2px;
                transform: translateY(-50%);
                background-color: #e44d4d;
            }
        }
        

        .current {
            font-size: 1.8rem;
            font-weight: 800;
            align-self: center;
            margin-bottom: 20px;
            color: #e44d4d;
        }
    }
    .cart {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        user-select: none;

        .cart__control {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            // background-color: var(--custom-color-light-2);
            // border: 2px solid var(--custom-color-light-3);
            border-radius: 5px;
            padding: 5px;

            .icon {
                height: 1rem;
                width: 1rem;
                border-radius: 50%;
                padding: .2rem;
                margin: 0px 20px;
                cursor: pointer;
                transition: all 200ms linear;
                color: #766fc3;
                background-color: var(--custom-color-light-1);
                border: 2px solid #766fc3;
                
                &:hover {
                    background-color: #766fc344;
                }
            }

            .cart__count {
                color: #766fc3;
                font-size: 1.2rem;
                font-weight: 800;
                user-select: none;
            }
        }

        .add__to__cart {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #766fc3;
            color: var(--custom-color-light-1);
            padding: 5px;
            font-size: 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: all 200ms linear;
            
            &:hover {
                color: #766fc3;
                background-color: var(--custom-color-light-1);
                border: 2px solid #766fc3;
            }

            .icon {
                margin-right: 10px;
            }

            span {
                font-weight: 600;
            }
        }
    }
}

</style>