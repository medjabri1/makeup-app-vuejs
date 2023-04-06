<template>
	<form class="checkout__form" @submit="(e) => onSubmit(e)">
		<h1 class="headline">Payment Details</h1>

		<div class="form__item">
			<label for="credit__card__email"> Credit Card Email </label>
			<input type="email" :value="user.data.email" disabled class="credit__card__email" id="credit__card__email"
				placeholder="Credit Card Email" />
		</div>

		<div class="form__item">
			<label for="credit__card__number"> Credit Card Number </label>
			<input type="number" v-model="card__number" class="credit__card__number" id="credit__card__number"
				placeholder="Credit Card Number" 
				@keypress="() => { this.errors.cardNumberError = false; this.errors.cardNumberInvalidError = false}"
				/>
			<p class="error__message" v-if="this.errors.cardNumberError">
				Enter card number
			</p>
			<p class="error__message" v-if="this.errors.cardNumberInvalidError">
				Enter a valid card number
			</p>
		</div>

		<div class="form__group">
			<div class="form__item">
				<label for="credit__expiry__date">Expiry Date </label>
				<input type="text" v-model="credit__expiry__date" min="1900" max="2099" step="1" value="2016"
					class="credit__expiry__date" id="credit__expiry__date" placeholder="Expiry Year" @input="onExpiryDateChange" 
					@keypress="() => { this.errors.expiryDateError = false; this.errors.expiryDateInvalidError = false}"
					/>
				
				<p class="error__message" v-if="this.errors.expiryDateError">
					Enter expiration date
				</p>
				<p class="error__message" v-if="this.errors.expiryDateInvalidError">
					Enter a valid expiration date
				</p>
			</div>

			<div class="form__item">
				<label for="card__cvv"> CCV </label>
				<input type="number" v-model="card__cvv" min="1" max="999" step="1" value="000" class="card__cvv"
					id="card__cvv" placeholder="CCV"
					@keypress="() => { this.errors.cvvError = false; this.errors.ccvInvalidError = false}"
					/>
				<p class="error__message" v-if="this.errors.cvvError">
					Enter ccv
				</p>
				<p class="error__message" v-if="this.errors.ccvInvalidError">
					Enter a valid ccv
				</p>
			</div>
		</div>

		<div class="form__item">
			<input type="submit" class="form__submit" value="Pay Now" />
		</div>
	</form>
</template>

<script>
export default {
	name: "PaymentDetails",
	data() {
		return {
			card__number: null,
			card__cvv: null,
			credit__expiry__date: null,
			errors: {
				cardNumberError: false,
				cardNumberInvalidError: false,
				expiryDateError: false,
				expiryDateInvalidError: false,
				cvvError: false,
				cvvInvalidError: false,
			},
		};
	},
	props: {},
	methods: {
		onSubmit(e) {
			e.preventDefault();

			if (this.checkForm()) {
				this.$emit("payment-submit");
			} else {
				// console.log("Invalid payment");
			}
		},
		checkForm() {
			this.errors = [];

			if (!this.card__number) {
				this.errors = { ...this.errors, cardNumberError: true };
			} else if (!this.validCardNumber(this.card__number)) {
				this.errors = { ...this.errors, cardNumberInvalidError: true };
			}

			if (!this.credit__expiry__date) {
				this.errors = { ...this.errors, expiryDateError: true };
			} else if (!this.validExpiryDate(this.credit__expiry__date)) {
				this.errors = { ...this.errors, expiryDateInvalidError: true };
			}

			if (!this.card__cvv) {
				this.errors = { ...this.errors, cvvError: true };
			} else if (!this.validCvv(this.card__cvv)) {
				this.errors = { ...this.errors, cvvInvalidError: true };
			}

			if (Object.values(this.errors).every((error) => !error)) {
				return true;
			}

			return false;
		},

		validCardNumber(cardNumber) {
			var re = /^[0-9]{13,19}$/;
			return re.test(cardNumber);
		},

		validExpiryDate(expiryDate) {
			var re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

			if (!re.test(expiryDate)) {
				return false;
			}

			var today = new Date();
			var parts = expiryDate.split("/");
			var month = parseInt(parts[0]);
			var year = parseInt(parts[1]);

			if (year < 100) {
				year += 2000;
			}

			var expiry = new Date(year, month - 1, 1);

			expiry.setMonth(expiry.getMonth() + 1);
			expiry.setDate(expiry.getDate() - 1);

			return expiry >= today;
		},

		onExpiryDateChange() {
			if (this.credit__expiry__date.length === 2 && !this.credit__expiry__date.includes("/")) {
				this.credit__expiry__date += "/";
			}
		},

		validCvv(cvv) {
			var re = /^[0-9]{3,4}$/;
			return re.test(cvv);
		},
	},
	computed: {
		user() {
			return this.$store.getters.user;
		},
	},
};
</script>

<style lang="scss" scoped>
.checkout__form {
	width: 100%;
	max-width: 800px;
	background-color: var(--custom-color-light-1);
	margin: 0 auto;
	margin-top: 20px;
	border-radius: 5px;
	color: var(--custom-color-dark-1);
	padding: 30px 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;

	.headline {
		margin-bottom: 30px;
		font-size: 1.8rem;
	}

	.form__item {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		margin-bottom: 20px;

		label {
			font-size: 1rem;
			opacity: 0.6;
		}

		.error__message {
			color: #F00;
			font-weight: 600;
			font-size: .8rem;
			margin-top: 3px;
		}

		input {
			width: 100%;
			padding: 8px;
			margin-top: 5px;
			font-size: 1rem;
			border: none;
			outline: none;
			border: 2px solid var(--custom-color-dark-3);

			&::-webkit-inner-spin-button {
				display: none;
			}

			&:focus {
				border: 2px solid #2e6cd8;
			}

			&[type="submit"] {
				background-color: var(--custom-color-dark-1);
				color: var(--custom-color-light-1);
				text-transform: uppercase;
				font-weight: 400;
				cursor: pointer;
				transition: all 200ms ease-in-out;
				margin-top: 20px;

				&:hover {
					opacity: 0.9;
				}
			}
		}
	}

	.form__group {
		width: 100%;
		max-width: 600px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		align-items: start;
	}
}
</style>
