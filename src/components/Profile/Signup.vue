<template>

    <form class="signup__form">

        <h1 class="signup__headline">Sign Up</h1>
        <h3 class="signup__sub__headline">Create new account</h3>

        <div class="form__group">

            <div class="form__item">
                <label for="signup__last__name">Last Name</label>
                <input type="text" :value="signup__last__name" placeholder="Enter your Last Name">
            </div>
            
            <div class="form__item">
                <label for="signup__first__name">First Name</label>
                <input type="text" :value="signup__first__name" placeholder="Enter your First Name">
            </div>

        </div>

        <div class="form__item">
            <label for="signup__email">Email Address</label>
            <input type="text" :value="signup__email" placeholder="Enter your email">
        </div>

        <div class="form__item">
            <label for="signup__email">Password</label>
            <input type="text" :value="signup__email" placeholder="Enter your email">
        </div>

        <div class="form__item">
            <input type="submit" value="Sign Up">
        </div>

    </form>

</template>

<script>
export default {
    name: 'signup',
    data() {
        return {
            signup__first__name: '',
            signup__last__name: '',
            signup__email: '',
            signup__password: ''
        }
    }
}
</script>

<style lang="scss" scoped>

.signup__form {
    width: calc(100% - 40px);
    height: 100%;
    color: var(--custom-color-dark-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: auto;

    .signup__headline {
        font-size: 2rem;
        text-align: start;
        width: 100%;
    }
    
    .signup__sub__headline {
        margin-bottom: 50px;
        font-size: 1rem;
        text-align: start;
        width: 100%;
        opacity: .8;
    }

    .form__message {
        font-size: .9rem;
        margin-bottom: 10px;
        opacity: .8;
        width: 90%;
        max-width: 500px;
        text-align: end;
    } 

    .form__group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 10px;
    }

    .form__item {
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        margin-bottom: 10px;

        label {
            width: 100%;
            font-size: .9rem;
            opacity: .8;
            font-weight: 600;
            margin-bottom: 3px;
        }

        input {
            width: 100%;
            padding: 8px;
            outline: none;
            border: 2px solid #000000bb;
            color: var(--custom-color-dark-1);

        
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
                margin-top: 30px;

                &:hover {
                    opacity: .9;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    
    .form__group {
        grid-template-columns: 1fr !important;
    }
}

</style>