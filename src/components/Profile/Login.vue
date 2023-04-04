<template>

    <form class="login__form">

        <h1 class="signup__headline">Log In</h1>
        <h3 class="signup__sub__headline">Welcome Back!</h3>

        <div class="form__item">
            <label for="login__email">Email Address</label>
            <input type="text" :value="login__email" placeholder="Enter your email">
        </div>

        <div class="form__item">
            <label for="login__email">Password</label>
            <input type="text" :value="login__email" placeholder="Enter your email">
        </div>

        <p class="form__message">Lost your password ?</p>

        <div class="form__item">
            <input type="submit" value="Log In">
        </div>

    </form>

</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            login__email: '',
            login__password: ''
        }
    }
}
</script>

<style lang="scss" scoped>

.login__form {
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
        width: 100%;
        max-width: 500px;
        text-align: end;
    } 

    .form__item {
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        margin-bottom: 10px;
        margin-top: 5px;

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
                margin-top: 20px;

                &:hover {
                    opacity: .9;
                }
            }
        }
    }
}

</style>