<template>

    <form class="billing__form" @submit="(e) => onSubmit(e)">
        <h1 class="headline">Payment Details</h1>

        <div class="form__item">
            <label for="credit__card__number">
                Credit Card Number
            </label>
            <input type="number" :value="card__number" class="credit__card__number" id="credit__card__number" placeholder="Credit Card Number">
        </div>
        
        <div class="form__group">
            <div class="form__item">
                <label for="credit__ccv">
                    CCV
                </label>
                <input type="number" :value="card__ccv" min="1" max="999" step="1" value="000" class="credit__ccv" id="credit__ccv" placeholder="CCV">
            </div>

            <div class="form__item">
                <label for="credit__expiry__month">
                    Expiry Month
                </label>
                <input type="number" :value="card__month" min="1" max="12" step="1" value="01" class="credit__expiry__month" id="credit__expiry__month" placeholder="Expiry Month">
            </div>

            <div class="form__item">
                <label for="credit__expiry__year">
                    Expiry Year
                </label>
                <input type="number" :value="card__year" min="1900" max="2099" step="1" value="2016" class="credit__expiry__year" id="credit__expiry__year" placeholder="Expiry Year">
            </div>
        </div>

        <div class="form__item">
            <input type="submit" class="form__submit" value="Pay Now">
        </div>
    </form>

</template>

<script>
export default {
    name: 'PaymentDetails',
    data() {
        return {
            card__number: 0,
            card__ccv: 0,
            card__month: 1,
            card__year: 2015,
        }
    },
    props: {},
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.$emit("payment-submit");
        }
    }
}
</script>

<style lang="scss" scoped>

.billing__form {

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
            opacity: .6;
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
                    opacity: .9;
                }
            }
        }
    }
    
    .form__group {
        width: 100%;
        max-width: 600px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        align-items: center;
    }
}

</style>