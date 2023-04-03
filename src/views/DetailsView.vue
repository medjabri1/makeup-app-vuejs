<template>

    <div class="details__container">

        <div class="details__wrapper">

            <h1 class="section__title">Product Details</h1>

            <div class="product__card">
                <div class="product__cover">
                    <img :src="require('@/assets/Imgs/Makeup/'+ product.image)" alt="">
                    
                    <div class="share">
                        <font-awesome-icon class="share__brand" :icon="['fab', 'square-facebook']" />
                        <font-awesome-icon class="share__brand" :icon="['fab', 'square-twitter']" />
                        <font-awesome-icon class="share__brand" :icon="['fab', 'square-google-plus']" />
                        <font-awesome-icon class="share__brand" :icon="['fab', 'square-whatsapp']" />
                    </div>
                </div>

                <div class="product__info">
                    <div class="section">
                        <h1 class="product__name">Product Name</h1>
                        <div class="rating__stars">
                            <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
                            <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
                            <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
                            <font-awesome-icon class="star fill" :icon="['fas', 'star']" />
                            <font-awesome-icon class="star" :icon="['fas', 'star-half-alt']" />
                        </div>
                        <p class="product__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsum quae omnis repellendus quia odit ab dignissimos officiis animi! Aliquid, natus. Voluptate ut dolor quas?
                        </p>
                        <div class="product__colors">
                            <p class="color__item" style="background-color: #766fc3"></p>
                            <p class="color__item" style="background-color: #7693a8"></p>
                            <p class="color__item" style="background-color: #766fc3"></p>
                            <p class="color__item" style="background-color: #e44d4d"></p>
                            <p class="color__item" style="background-color: "></p>
                        </div>
                    </div>
                    <div class="section">
                        <h3 class="price"><span class="original">380</span><span class="current">290 $</span></h3>
                        <h3 class="on-sale">-60%</h3>
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
                </div>
            </div>

        </div>

    </div>

</template>

<script>
export default {
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

                .share {
                    position: absolute;
                    top: calc(100% - 2.5rem);
                    right: .5rem;
                    z-index: 100;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    .share__brand {
                        margin: 2px;
                        font-size: 1.5rem;
                        color: #766fc3;
                    }
                }
            }

            .product__info {
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: space-between;
                position: relative;

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

                .rating__stars {
                    .star {
                        color: #e44d4d;
                        margin-bottom: 30px;
                    }
                }

                .product__description {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    margin-bottom: 30px;
                    text-align: justify;
                }

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

                .price {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

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

                .on-sale {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background-color: #e44d4d;
                    padding: 10px 20px;
                    border-bottom-left-radius: 10px;
                    color: var(--custom-color-light-1);
                }

                .cart {
                    display: grid;
                    width: 100%;
                    grid-template-columns: repeat(2, 1fr);

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
        }
    }
}

</style>