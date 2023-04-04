<template>

    <form class="billing__form" @submit="(e) => onSubmit(e)">
        <h1 class="headline">Payment Details</h1>

        <div class="form__item">
            <label for="credit__card__number">
                Credit Card Number
            </label>
            <input type="number" class="credit__card__number" id="credit__card__number" placeholder="Credit Card Number" required>
        </div>
        
        <div class="form__group">
            <div class="form__item">
                <label for="credit__ccv">
                    CCV
                </label>
                <input type="number" min="1" max="999" step="1" value="000" class="credit__ccv" id="credit__ccv" placeholder="CCV" required>
            </div>

            <div class="form__item">
                <label for="credit__expiry__month">
                    Expiry Month
                </label>
                <input type="number" min="1" max="12" step="1" value="01" class="credit__expiry__month" id="credit__expiry__month" placeholder="Expiry Month" required>
            </div>

            <div class="form__item">
                <label for="credit__expiry__year">
                    Expiry Year
                </label>
                <input type="number" min="1900" max="2099" step="1" value="2016" class="credit__expiry__year" id="credit__expiry__year" placeholder="Expiry Year" required>
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

            &[type="submit"] {
                background-color: #2e6cd8;
                color: var(--custom-color-light-1);
                text-transform: uppercase;
                font-weight: 400;
                cursor: pointer;
                transition: all 200ms ease-in-out;

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