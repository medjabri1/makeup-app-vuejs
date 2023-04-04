<template>

    <div class="checkout__container">

        <div class="checkout__wrapper">

            <h1 class="headline">Checkout</h1>

            <BillComponent></BillComponent>
            <PaymentDetails @payment-submit="paymentSubmit"></PaymentDetails>

        </div>

    </div>

</template>

<script>

import BillComponent from "@/components/Checkout/BillComponent/BillComponent.vue"
import PaymentDetails from "@/components/Checkout/PaymentDetails/PaymentDetails.vue"
import router from '@/router'

export default {
    components: {
        PaymentDetails, BillComponent
    },
    methods: {
        paymentSubmit() {
            router.push('/confirmation')
        }, 
    }
}
</script>

<style lang="scss" scoped>

.checkout__container {
	height: 100%;
    font-family: 'Nunito', sans-serif;

    .checkout__wrapper {
		height:100%;
        min-height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
        color: var(--custom-color-light-1);
        padding-top: 100px;

        .headline {
            margin-top: 40px;
            margin-bottom: 20px;
            text-align: center;
        }

        .bill {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: var(--custom-color-dark-2);
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;

            .divider {
                opacity: .2;
            }

            .items__count {
                font-weight: 800;
                font-size: 1rem;

                span {
                    margin-left: 10px;
                    font-weight: 400;
                    font-size: 1.2rem;
                }
            }

            .total__price {
                font-weight: 800;
                font-size: 1rem;

                span {
                    margin-left: 10px;
                    font-weight: 400;
                    font-size: 1.2rem;
                }
            }
        }
    }
}

</style>