<template>

    <form class="login__form" @submit.prevent="onSubmit" id="login__form">

        <h1 class="signup__headline">Log In</h1>
        <h3 class="signup__sub__headline">Welcome Back!</h3>

        <div class="form__item">
            <label for="login__email">Email Address</label>
            <input 
                type="email" 
                id="login__email" 
                v-model="login__email" 
                placeholder="Enter your email">
        </div>

        <div class="form__item">
            <label for="login__password">Password</label>
            <input 
                type="password" 
                id="login__password" 
                v-model="login__password" 
                placeholder="Enter your email">
        </div>

        <p class="form__message">Lost your password ?</p>
        <p class="error" v-if="hasError">{{ error }}</p>

        <div class="form__item">
            <!-- <input type="submit" value="Log In"> -->
            <button type="submit">
                <span :class="{'hidden': loading}">Log In</span>
                <img v-if="loading" class="loading__gif" src="@/assets/Icons/spinner.gif" alt="Loading Icon">
            </button>
        </div>

    </form>

</template>

<script>

import UserService from '@/Services/UserService'

export default {
    name: 'Login',
    data() {
        return {
            login__email: '',
            login__password: '',
            hasError: false,
            error: '',
            loggedIn: false,
            loading: false,
        }
    },
    methods: {
        onSubmit() {

            if(this.loading) {
                return;
            }

            this.loading = true;

            let user = {
                email: this.login__email.trim(),
                password: this.login__password,
            }

            if(user.email.length < 1 || user.password.length < 1) {
                this.hasError = true;
                this.error = 'Please fill all fields';
                this.loading = false;
                return;
            }

            UserService.login(user)
                .then((res) => {
                    // console.log(res);
                    this.$emit("loggedIn");

                    this.$store.dispatch("logState");
                    this.loading = false;
                })
                .catch((err) => {
                    console.log(err);
                    let message = err.code;
                    this.hasError = true;
                    this.error = message;
                    this.loading = false;
                    return;
                });
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

    .error {
        text-align: center;
        text-transform: uppercase;
        font-size: .9rem;
        color: #F00;
        margin-bottom: 10px;
        width: 100%;
        max-width: 500px;
        font-weight: 700;
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

        button {
            width: 100%;
            padding: 12px;
            outline: none;
            border: 2px solid #000000bb;
            color: var(--custom-color-dark-1);
            background-color: var(--custom-color-dark-1);
            color: var(--custom-color-light-1);
            text-transform: uppercase;
            font-weight: 400;
            cursor: pointer;
            transition: all 200ms ease-in-out;
            margin-top: 20px;
            position: relative;

            &:hover {
                opacity: .9;
            }
            
            span.hidden {
                visibility: hidden;
            }

            .loading__gif {
                height: 30px;
                width: 30px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

</style>