<template>

    <div class="notfound__container">

        <div class="notfound__wrapper">

            <h1 class="headline">Page Not Found</h1>
            <h2 class="sub__headline">Oops! Looks like you followed a broken Link</h2>
            <router-link to="/" class="return__home">Return to Home</router-link>

        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.notfound__container {
    
	height: 100%;
    font-family: 'Nunito', sans-serif;

    .notfound__wrapper {
		height:100%;
        min-height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
        color: var(--custom-color-light-1);
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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

        .return__home {
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