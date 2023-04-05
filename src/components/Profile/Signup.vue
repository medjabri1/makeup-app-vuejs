<template>

    <form class="signup__form" @submit.prevent="onSubmit" id="signup__form">

        <h1 class="signup__headline">Sign Up</h1>
        <h3 class="signup__sub__headline">Create new account</h3>

        <div class="form__group">

            <div class="form__item">
                <label for="signup__last__name">Last Name</label>
                <input 
                    type="text" 
                    id="signup__last__name" 
                    :value="signup__last__name" 
                    @input="(e) => { signup__last__name = e.target.value }"
                    placeholder="Enter your Last Name">
            </div>
            
            <div class="form__item">
                <label for="signup__first__name">First Name</label>
                <input 
                    type="text" 
                    id="signup__first__name" 
                    :value="signup__first__name" 
                    @input="(e) => { signup__first__name = e.target.value }"
                    placeholder="Enter your First Name">
            </div>

        </div>

        <div class="form__item">
            <label for="signup__email">Email Address</label>
            <input 
                type="email" 
                id="signup__email" 
                :value="signup__email" 
                @input="(e) => { signup__email = e.target.value }"
                placeholder="Enter your email">
        </div>

        <div class="form__item">
            <label for="signup__password">Password</label>
            <input 
                type="password" 
                id="signup__password" 
                :value="signup__password" 
                @input="(e) => { signup__password = e.target.value }"
                placeholder="Enter your Password">
        </div>

        <p class="error" v-if="hasError">{{ error }}</p>

        <div class="form__item">
            <input type="submit" :value="loading ? 'Loading' : 'Submit'" :disabled="loading">
        </div>

    </form>

</template>

<script>
import UserService from '@/Services/UserService'
export default {
    name: 'signup',
    data() {
        return {
            signup__first__name: '',
            signup__last__name: '',
            signup__email: '',
            signup__password: '',
            loading: false,
            hasError: false,
            error: ''
        }
    },
    methods: {
        onSubmit() {

            if(
                this.signup__email.trim() == '' || 
                this.signup__password.trim() == '' || 
                this.signup__first__name.trim() == '' ||
                this.signup__last__name.trim() == ''
            ) {
                this.hasError = true;
                this.error = 'Please fill all fields'
                return;
            }

            let user = {
                first_name: this.signup__first__name,
                last_name: this.signup__last__name,
                email: this.signup__email,
                password: this.signup__password,
            };

            let users = this.$store.getters.users;

            let found = false;

            users.map((user) => {
                console.log(user.email, this.signup__email);
                if(user.email == this.signup__email) {
                    found = true;
                }
            })

            if(found) {
                this.hasError = true;
                this.error = "Email already used";
                return;
            } else {
                UserService.addUser(user)
                    .then((res) => {
                        this.$store.dispatch("fetchUsers");
                    })
            }

            document.getElementById("signup__form").reset();
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