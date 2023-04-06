<template>
    
    <div class="reviews__container">

        <h1 class="section__title">Reviews list (4)</h1>

        <div class="review__item">
            <div class="review__cover">
                <img src="https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png" alt="Avatar">
            </div>
            <div class="review__info">
                <h1 class="username">Mohammed JABRI</h1>
                <rating class="rating"></rating>
                <p class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa at porro tempora nemo, natus assumenda doloribus ut ducimus veritatis.
                </p>
            </div>
        </div>

        <div class="review__item">
            <div class="review__cover">
                <img src="https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png" alt="Avatar">
            </div>
            <div class="review__info">
                <h1 class="username">Mohammed JABRI</h1>
                <rating class="rating"></rating>
                <p class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa at porro tempora nemo, natus assumenda doloribus ut ducimus veritatis.
                </p>
            </div>
        </div>

        <div class="review__item">
            <div class="review__cover">
                <img src="https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png" alt="Avatar">
            </div>
            <div class="review__info">
                <h1 class="username">Mohammed JABRI</h1>
                <rating class="rating"></rating>
                <p class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa at porro tempora nemo, natus assumenda doloribus ut ducimus veritatis.
                </p>
            </div>
        </div>

        <div class="review__item">
            <div class="review__cover">
                <img src="https://rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png" alt="Avatar">
            </div>
            <div class="review__info">
                <h1 class="username">Mohammed JABRI</h1>
                <rating class="rating"></rating>
                <p class="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat culpa at porro tempora nemo, natus assumenda doloribus ut ducimus veritatis.
                </p>
            </div>
        </div>

    </div>

</template>

<script>
import Rating from "@/components/Details/Rating/Rating.vue";
export default {
    components: {
        Rating
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    .section__title {
        grid-column: span 2;
        font-size: 1.5rem;
        margin: 20px 0px;
        font-weight: 800;
        text-align: center;
    }

    .review__item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        background-color: var(--custom-color-light-1);
        padding: 10px;
        box-shadow: 0px 0px 2px #00000022, 0px 0px 8px #00000022;
        border-radius: 5px;

        .review__cover {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0px 0px 2px #00000022, 0px 0px 8px #00000022;
            margin-right: 20px;
            
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
                height: 100%;
                max-height: 80px;
            }
        }

        .review__info {
            width: 100%;
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
                font-size: 1rem;
                opacity: .7;
            }
        }
    }
}

@media screen and (max-width: 900px) {
    
    .reviews__container {
        
        grid-template-columns: repeat(1, 1fr);

        .section__title {
            grid-column: span 1;
        }
    }
}


</style>