<template>
    
    <div class="reviews__container">

        <h1 class="section__title">Reviews list ({{ reviews.length }})</h1>

        <div class="add__review">
            <form @submit.prevent="addReviewSubmit" id="new__form">
                
                <rating class="rating" :clickable="true" @rateChange="rateChange"></rating>
                
                <div class="form__item">
                    <label for="new__username">Username</label>
                    <input type="text" id="new__username" v-model="new__username" placeholder="Enter your name">
                </div>

                <div class="form__item">
                    <label for="new__content">Review Content</label>
                    <textarea type="text" id="new__content" v-model="new__content" placeholder="Your review content..."></textarea>
                </div>

                <div class="form__item">
                    <button type="submit">
                        <span :class="{'hidden': loading}">Submit</span>
                        <img v-if="loading" class="loading__gif" src="@/assets/Icons/spinner.gif" alt="Loading Icon">
                    </button>
                </div>
            </form>
        </div>

        <div class="reviews__list">
            <div class="review__item" v-for="(review, index) in reviews" :key="index">
                <div class="review__cover">
                    <img src="https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png" alt="Avatar">
                </div>
                <div class="review__info">
                    <h1 class="username">{{ review.username }}</h1>
                    <rating class="rating" :fixedRating="review.rating"></rating>
                    <p class="content">
                        {{ review.content }}
                    </p>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import Rating from "@/components/Details/Rating/Rating.vue";
export default {
    components: {
        Rating
    },
    props: {
        product: {
            type: Object,
            required: true,
        }
    },  
    data() {
        return {
            new__username: '',
            new__rating: 4,
            new__content: '',
            loading: false
        }
    },
    mounted() {
        this.$store.dispatch('fetchProductReviews', this.product.id);
    },
    created() {
        this.$store.dispatch('emptyReviewsState');
    },
    computed: {
        reviews() {
            return this.$store.getters.reviews;
        },
    },
    watch: {
        '$store.getters.reviews': {
            handler() {
                let average_review = 0;

                this.reviews.map((review) => {
                    average_review += review.rating / this.reviews.length;
                });

                this.$emit('averageReviewChange', average_review);
            },
        }
    },
    methods: {
        rateChange(rate) {
            this.new__rating = rate;
        },
        resetForm() {
            this.new__username = '';
            this.new__content = '';
        },
        addReviewSubmit() {

            if(this.loading) {
                return;
            }

            if(this.new__username.trim().length < 1 || this.new__content.trim().length < 1) {
                return;
            }

            this.loading = true;

            let data = {
                product_id: this.product.id,
                username: this.new__username,
                content: this.new__content,
                rating: this.new__rating,
            }

            this.$store.dispatch("addReview", data)

            this.resetForm();

            this.loading = false;

        },
    }
}
</script>

<style lang="scss">

.reviews__container {
    background-color: var(--custom-color-light-2);
    width: 100%;
    margin-top: 50px;
    color: var(--custom-color-dark-1);
    border-radius: 10px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;

    .section__title {
        grid-column: span 2;
        font-size: 1.5rem;
        margin: 20px 0px;
        font-weight: 800;
        text-align: center;
    }

    .add__review {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 30px;

        form {
            width: 100%;
            max-width: 900px;
            background-color: var(--custom-color-light-1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            border-radius: 5px;
            box-shadow: 0px 0px 2px #00000022, 0px 0px 8px #00000022;

            .form__item {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                width: 100%;
                margin-bottom: 20px;

                label {
                    font-size: .9rem;
                    opacity: .8;
                    font-weight: 600;
                    margin-bottom: px;
                }

                input, textarea, button {
                    font-size: .9rem;
                    padding: 8px;
                    outline: none;
                    border: none;
                    border-radius: 3px;
                    box-shadow: 0px 0px 2px #00000022, 0px 0px 8px #00000022;
                    resize: none;
                    width: 100%;
                    margin-top: 5px;
                    font-weight: 400;
                    font-family: inherit !important;

                    &:focus {
                        box-shadow: 0px 0px 2px #190c4d55, 0px 0px 8px #190c4d55;
                    }
                }

                button {
                    text-transform: uppercase;
                    font-weight: 600;
                    background-color: var(--custom-color-dark-1);
                    color: var(--custom-color-light-1);
                    transition: all 200ms ease-in-out;
                    cursor: pointer;
                    position: relative;

                    &:hover {
                        opacity: .9;
                    }
            
                    span.hidden {
                        visibility: hidden;
                    }

                    .loading__gif {
                        height: 30px;
                        width: 30px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }

    .reviews__list {        
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .review__item {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: start;
            background-color: var(--custom-color-light-1);
            padding: 15px 10px;
            box-shadow: 0px 0px 2px #00000022, 0px 0px 8px #00000022;
            border-radius: 5px;
    
            .review__cover {
                height: 80px;
                width: 80px;
                overflow: hidden;
                margin-right: 20px;
                
                img {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                    box-shadow: 0px 0px 2px #00000022, 0px 0px 8px #00000022;
                    border-radius: 50%;
                }
            }
    
            .review__info {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
    
                .rating {
                    font-size: .7rem;
                    margin-bottom: -20px;
                }
                
    
                .username {
                    font-size: 1.1rem;
                }
    
                .content {
                    font-size: .9rem;
                    opacity: .7;
                }
            }
        }
    }

}

@media screen and (max-width: 900px) {
    
    .reviews__list {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}


</style>