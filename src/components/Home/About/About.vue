<template>

    <div class="about__container">
        <div class="about__wrapper">
            <div class="about__content">

                <div class="section cover__section">
                    <img src="@/assets/Imgs/Products/About/Products-1.jpg" alt="" class="image image-1">
                    <img src="@/assets/Imgs/Products/About/Colors-1.jpg" alt="" class="image image-2">
                    <img src="@/assets/Imgs/Products/About/Products-2.jpg" alt="" class="image image-3">
                </div>

                <div class="section text__section">
                    <h1 class="section__title">About us</h1>
                    <p class="section__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem aspernatur exercitationem quaerat? Magni, animi dolores rem inventore sed minus aspernatur libero eum rerum quibusdam.
                    </p>
                </div>

            </div>
        </div>
    </div>

</template>

<script lang="ts">

export default {};

</script>

<style lang="scss" scoped>

.about__container {
    height: fit-content;
    background-color: var(--custom-color-dark-1);
    color: var(--custom-color-light-1);
    font-family: 'Nunito', sans-serif;
	box-shadow: 0px 0px 2px #ffffff22, 0px 0px 10px #ffffff22;

    .about__wrapper {
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
    }

    .about__content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .cover__section {
            height: 700px;
            width: 100%;
            position: relative;

            .image {
                width: 100%;
                object-fit: cover;
                object-position: center;
                height: 50%;
                width: 50%;
                margin: 20px;
                box-shadow: 0px 0px 8px #00000055, 0px 0px 20px #00000055, 0px 0px 40px #00000055;
                border-radius: 10px;

                &.image-1 {
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 1;
                }
                
                &.image-2 {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    z-index: 2;
                }
                
                &.image-3 {
                    position: absolute;
                    bottom: 0;
                    right: 20px;
                    z-index: 3;
                }
                
                &.image-4 {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 5;
                    transform: translate(-50%, -50%);
                    height: 200px;
                    width: 200px;
                    object-fit: fill;
                    box-shadow: none;
                }
            }
        }
        
        .text__section {
            color: #FFF;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .section__title {
                font-family: 'Great Vibes', cursive;
                text-transform: capitalize;
                font-size: 3rem;
                text-align: center;
                margin-bottom: 20px;
            }  
            
            .section__text {
                font-family: 'Great Vibes', cursive;
                font-size: 1.8rem;
                text-align: center;
                max-width: 400px;
                margin: 0px 20px;
                opacity: .7;
            }
        }
    }
}

@media screen and (max-width: 900px){

    .about__content {
        grid-template-columns: repeat(1, 1fr) !important;

        .section {
            width: 100% !important;

            &.cover__section {
                max-width: 500px !important;
                margin: auto !important;
                margin-bottom: 50px !important;
            }
        }
    }
}

</style>