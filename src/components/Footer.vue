<template>
	<div class="footer__container">
		<div class="footer__wrapper">
			<div class="footer__content">
				<div class="footer__section">
					<h2 class="section__title">Shopping</h2>
					<ul class="section__list">
						<li class="section__list__item">Promotions</li>
						<li class="section__list__item">Auto Replenish</li>
						<li class="section__list__item">Gift Cards</li>
						<li class="section__list__item">Afterpay</li>
						<li class="section__list__item">Favourites</li>
					</ul>
				</div>

				<div class="footer__section">
					<h2 class="section__title">NEED HELP?</h2>
					<ul class="section__list">
						<li class="section__list__item">Track my order</li>
						<li class="section__list__item">returns & excahnges</li>
						<li class="section__list__item">Shipping</li>
						<li class="section__list__item">Account Sign-up / Login</li>
						<li class="section__list__item">Live chat</li>
					</ul>
				</div>

				<div class="footer__section">
					<h2 class="section__title">About Brand</h2>
					<ul class="section__list">
						<li class="section__list__item">Our story</li>
						<li class="section__list__item">Ingredients</li>
						<li class="section__list__item">Commitements</li>
						<li class="section__list__item">Back To us</li>
						<li class="section__list__item">Corporate Info</li>
						<li class="section__list__item">Careers</li>
					</ul>
				</div>

				<div class="footer__section">
					<h2 class="section__title">Your Brand Store</h2>
					<ul class="section__list">
						<li class="section__list__item">Find a store</li>
						<li class="section__list__item">Events</li>
						<li class="section__list__item">Online Appointment</li>
						<li class="section__list__item">Buy Online</li>
						<li class="section__list__item">Same Day Delivery</li>
					</ul>
				</div>

				<div class="footer__section">
					<h2 class="section__title">Privacy & Terms</h2>
					<ul class="section__list">
						<li class="section__list__item">Privacy Policy</li>
						<li class="section__list__item">Accessibility</li>
						<li class="section__list__item">Limit use of my sensitive</li>
						<li class="section__list__item">Buy Online</li>
						<li class="section__list__item">Same Day Delivery</li>
						<li class="section__list__item">Supplier Relations</li>
					</ul>
				</div>
			</div>

			<p class="footer__copyright">
				All Copyrights &copy; Reserved to MJABRI.SQLI - 2023 
			</p>
		</div>
	</div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>

.footer__container {
	height: fit-content;
	width: 100%;
	background-color: var(--custom-color-dark-1);
	color: var(--custom-color-light-1);
	font-family: "Nunito", sans-serif;

	.footer__wrapper {
		width: 100%;
		max-width: 1200px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0px auto;
		padding: 80px 10px;

		.footer__copyright {
			font-size: .9rem;
			margin-top: 60px;
		}

		.footer__content {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			align-items: start;

			.footer__section {
				display: flex;
				flex-direction: column;
				align-items: start;
				justify-content: start;

				.section__title {
					font-size: .9rem;
					font-weight: 700;
					margin-bottom: 15px;
				}

				.section__list {
					width: 100%;
					list-style: none;

					.section__list__item {
						font-size: .9rem;
						font-weight: 200;
						opacity: .7;
						cursor: pointer;
						transition: all 200ms ease-in-out;
						margin-bottom: 5px;

						&:hover {
							opacity: 1;
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 900px){
	.footer__content {
		grid-template-columns: repeat(3, 1fr) !important;

		.footer__section {
			margin-bottom: 30px;
		}
	}
}

@media screen and (max-width: 600px){
	.footer__content {
		grid-template-columns: repeat(2, 1fr) !important;

		.footer__section {
			margin-bottom: 30px;
		}
	}
}

@media screen and (max-width: 400px){
	.footer__content {
		grid-template-columns: repeat(1, 1fr) !important;

		.footer__section {
			margin-bottom: 30px;
		}
	}
}

</style>
