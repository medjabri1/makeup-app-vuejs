<template>
	<swiper-container class="swiper__container" navigation="true" autoplay="true" loop="true" effect="fade">
		<swiper-slide class="swiper__slide">
			<div class="slide__container">
				<div class="section info flex-1">
					<h1 class="section__title">Eye Shadow</h1>
					<p class="section__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						odit delectus qui dolores sint. Exercitationem?
					</p>
					<button class="section__details">Browse Category</button>
				</div>
				<div class="section flex-1">
					<div class="image__container">
						<img src="@/assets/Imgs/Models/Model-1.jpg" alt="Model Face" title="Hold to Pause" />
					</div>
				</div>
			</div>
		</swiper-slide>

		<swiper-slide class="swiper__slide">
			<div class="slide__container">
				<div class="section info flex-1">
					<h1 class="section__title">Face Screens</h1>
					<p class="section__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						odit delectus qui dolores sint. Exercitationem?
					</p>
					<button class="section__details">Browse Category</button>
				</div>
				<div class="section flex-1">
					<div class="image__container">
						<img src="@/assets/Imgs/Models/Model-2.jpg" alt="Model Face" title="Hold to Pause" />
					</div>
				</div>
			</div>
		</swiper-slide>

		<swiper-slide class="swiper__slide">
			<div class="slide__container">
				<div class="section info flex-1">
					<h1 class="section__title">Lip Stick</h1>
					<p class="section__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						odit delectus qui dolores sint. Exercitationem?
					</p>
					<button class="section__details">Browse Category</button>
				</div>
				<div class="section flex-1">
					<div class="image__container">
						<img src="@/assets/Imgs/Models/Model-3.jpg" alt="Model Face" title="Hold to Pause" />
					</div>
				</div>
			</div>
		</swiper-slide>

		<swiper-slide class="swiper__slide">
			<div class="slide__container">
				<div class="section info flex-1">
					<h1 class="section__title">Lip Gloss</h1>
					<p class="section__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						odit delectus qui dolores sint. Exercitationem?
					</p>
					<button class="section__details">Browse Category</button>
				</div>
				<div class="section flex-1">
					<div class="image__container">
						<img src="@/assets/Imgs/Models/Model-5.jpg" alt="Model Face" title="Hold to Pause" />
					</div>
				</div>
			</div>
		</swiper-slide>
	</swiper-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.swiper__container {
	height: 100vh;
	max-height: 1000px;
	--swiper-navigation-color: #000;
	box-shadow: 0px 0px 2px #ffffff22, 0px 0px 10px #ffffff22;
	padding-top: 50px;

	.swiper__slide {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--custom-color-light-1);

		.slide__container {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.section {
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: center;
				background-color: var(--custom-color-dark-1);

				&.flex-1 {
					flex: 1;
				}

				&.flex-2 {
					flex: 2;
				}

				&.info {
					background-color: var(--custom-color-dark-1);
					color: var(--custom-color-light-1);
					padding: 50px;
					max-width: 700px;

					.section__title {
						font-family: "Great Vibes", cursive;
						font-weight: 400;
						font-size: 4.5rem;
						cursor: pointer;
						margin-bottom: 20px;
					}

					.section__description {
						font-weight: 200;
						font-size: 1rem;
						line-height: 1.5rem;
						max-width: 400px;
						text-align: justify;
						margin-bottom: 20px;
					}

					.section__details {
						font-size: 1rem;
						text-transform: uppercase;
						margin-top: 20px;
						padding: 10px 20px;
						font-family: "Nunito", sans-serif;
						font-weight: 900;
						border: none;
						outline: none;
						background-color: var(--custom-color-light-1);
						border-radius: 2px;
						transition: all 200ms ease-in-out;
						cursor: pointer;

						&:hover {
							background-color: var(--custom-color-light-3);
						}
					}
				}

				.image__container {
					height: 100%;
					width: 100%;
					overflow: hidden;
					position: relative;

					&::before {
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						height: 100%;
						width: 100%;
					}

					img {
						height: 100%;
						width: 100%;
						object-fit: cover;
						animation: zoomInOut 10000ms linear infinite alternate;
						transform-origin: top left;
						cursor: pointer;

						&:active {
							animation-play-state: paused;
						}

						@keyframes zoomInOut {
							from {
								transform: scale(1);
							}

							to {
								transform: scale(1.1);
							}
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 900px){

	.slide__container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column !important;

		.section {
			height: 50% !important;
			width: 100% !important;
			max-width: unset !important;
		}
	}
	
}
</style>
