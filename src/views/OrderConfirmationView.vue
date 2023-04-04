<template>

    <div class="confirmation__container">

        <div class="confirmation__wrapper">

            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="icon"></font-awesome-icon>
            <h1 class="headline">Order Confirmed</h1>
            <h2 class="sub__headline">Thank you for your trust 💖 See you soon again 😉</h2>
            <router-link to="/browse" class="return__browse">Return to Browsing</router-link>

        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.confirmation__container {
    
	height: 100%;
    font-family: 'Nunito', sans-serif;

    .confirmation__wrapper {
		height:100%;
        min-height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
        color: var(--custom-color-light-1);
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .icon {
            font-size: 5rem;
            margin-bottom: 20px;
        }

        .headline {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        .sub__headline {
            font-size: 1rem;
            max-width: 400px;
            text-align: center;
            margin-bottom: 40px;
        }

        .return__browse {
            font-size: 1.1rem;
            padding: 10px 20px;
            background-color: var(--custom-color-light-1);
            color: var(--custom-color-dark-1);
            text-decoration: none;
            text-transform: capitalize;
            border-radius: 5px;
            font-weight: 800;
        }
    }
}

</style>