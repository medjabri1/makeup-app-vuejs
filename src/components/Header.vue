<template>
	<div class="header__container">
		<nav class="nav__wrapper">

			<!-- NAV LOGO -->

			<router-link to="/" class="nav__logo">Gleaming</router-link>

			<!-- NAV LIST -->

			<ul class="nav__list" :class="{ active: isButtonActive }">
				<router-link to="/" class="nav__item" exact-active-class="active__link">
					<li>Home</li>
				</router-link>

				<router-link to="/browse" class="nav__item" exact-active-class="active__link">
					<li>Browse</li>
				</router-link>

				<router-link to="/cart" class="nav__item" exact-active-class="active__link">
					<li>Cart</li>
				</router-link>
			</ul>

			<!-- NAV LIST BUTTON -->

			<span class="nav__list__button" :class="{ active: isButtonActive }" @click="this.toggleButtonActive">
				<font-awesome-icon class="icon" :icon="['fas', 'bars']" />
			</span>

			<!-- NAV ACTIONS -->

			<ul class="nav__actions">

				<router-link to="/profile" class="nav__item" exact-active-class="active__link">
					<font-awesome-icon class="icon" :icon="['fas', 'user']" />
				</router-link>
				
				<router-link to="/cart" class="nav__item" exact-active-class="active__link">
					<font-awesome-icon class="icon" :icon="['fas', 'bag-shopping']" />
					<span class="cart__value">{{ cart__length }}</span>
				</router-link>

			</ul>
		</nav>
	</div>
</template>

<script lang="ts">


export default {

	data() {
		return {
			isButtonActive: false,
			cart__length: 0
		}
	},
	methods: {
		toggleButtonActive() {
			console.log("test")
			this.isButtonActive = !this.isButtonActive;
		}
	}

};
</script>

<style lang="scss" scoped>
.header__container {
	height: fit-content;
	width: 100%;
	background-color: var(--custom-color-dark-1);
	color: #fff0f3;
	position: fixed;
	top: 0;
	box-shadow: 0px 0px 2px #FFFFFF22, 0px 0px 10px #FFFFFF22;
	z-index: 1000000;
	font-family: 'Nunito', sans-serif;

	a {
		color: inherit;
		text-decoration: none;
	}

	.nav__wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0px auto;
		padding: 15px 20px;
		position: relative;
		background-color: var(--custom-color-dark-1);

		.nav__logo {
			font-size: 1.7rem;
			// font-weight: 700;
			cursor: pointer;
			font-family: 'Great Vibes', cursive;
			text-transform: capitalize;
		}

		.nav__list__button {
			display: none;
			cursor: pointer;
			font-size: 1.2rem;
			transition: all 200ms ease-in-out;

			&.active {
				transform: rotate(90deg);
			}
		}

		.nav__list {
			display: flex;
			align-content: center;
			justify-content: center;
			list-style: none;
			font-family: 'Nunito', sans-serif;

			.nav__item {
				margin: 5px 10px;
				opacity: 0.5;
				font-weight: 400;
				position: relative;
				transition: all 200ms ease-in-out;

				&.active__link {
					opacity: 1;
					font-weight: 400;
				}

				::before {
					content: "";
					position: absolute;
					top: calc(100%);
					right: 0;
					height: 1px;
					width: calc(100%);
					background-color: #fff0f3;
					transform: scaleX(0);
					transform-origin: left;
					transition: all 300ms 200ms ease-in-out;
				}

				:hover::before {
					transform: scaleX(1);
				}
			}
		}

		.nav__actions {
			display: flex;
			align-content: center;
			justify-content: center;
			list-style: none;

			.nav__item {
				margin: 5px 5px;
				font-weight: 400;
				position: relative;
				color: var(--custom-color-light-1);
				// opacity: .7;
				position: relative;

				&.active__link {
					opacity: 1;
					color: #e72f2f;
				}

				.icon {
					font-size: .8rem;
					width: .8rem;
					border: 1px solid var(--custom-color-light-1);
					padding: .4rem;
					border-radius: 50%;
				}

				.cart__value {
					position: absolute;
					background-color: var(--custom-color-light-1);
					color: var(--custom-color-dark-1);
					top: -.3rem;
					right: -.3rem;
					font-size: .7rem;
					width: 1rem;
					height: 1rem;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: 900;
					border-radius: 50%;

				}
			}
		}
	}
}

@media screen and (max-width: 650px) {

	.nav__list {
		// display: none !important;
		position: absolute;
		top: 100%;
		left: 0;
		background-color: var(--custom-color-dark-1);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		padding: 10px 0px;
		padding-left: 20px;
		box-shadow: 0px 5px 5px #FFFFFF11, 0px 20px 20px #FFFFFF11;
		z-index: -1;

		transform: translateY(-100%);
		transition: all 200ms ease-in-out;

		&.active {
			transform: translateY(0);
		}
	}

	.nav__list__button {
		display: block !important;
	}
	
}
</style>
