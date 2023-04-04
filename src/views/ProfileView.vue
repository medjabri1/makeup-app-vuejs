<template>

    <div class="profile__container">

        <div class="profile__wrapper">

            <h1 class="headline">Profile</h1>

        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.profile__container {
    
	height: 100%;
    font-family: 'Nunito', sans-serif;

    .profile__wrapper {
		height:100%;
        min-height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
        color: var(--custom-color-light-1);
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;

        .headline {
            margin-top: 20px;
        }
    }
}

</style>