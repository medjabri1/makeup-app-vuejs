<template>

    <div class="profile__container">

        <div class="profile__wrapper">

            <div class="profile__content">
                <div class="section cover">
                    <img v-if="show__login" src="@/assets/Imgs/Products/About/Products-1.jpg" alt="">
                    <img v-else src="@/assets/Imgs/Products/About/Products-2.jpg" alt="">
                </div>

                <div class="section">
                    <Login v-if="show__login"></Login>
                    <Signup v-else></Signup>

                    <h3 class="profile__message" @click="toggleShowLogin" v-if="show__login">Dont have account ? <span>Sign up!</span></h3>
                    <h3 class="profile__message" @click="toggleShowLogin" v-else>Already have account, <span>Log in!</span></h3>
                </div>
            </div>

        </div>

    </div>

</template>

<script>

import Login from "@/components/Profile/Login.vue"
import Signup from "@/components/Profile/Signup.vue"

export default {
    name: 'ProfileView',
    components: {
        Login, Signup
    },
    data() {
        return {
            show__login: true,
        }
    },
    computed: {
        users() {
            return this.$store.getters.users;
        }
    }, 
    methods: {
        toggleShowLogin() {
            this.show__login = !this.show__login;
        }
    }
}
</script>

<style lang="scss" scoped>

.profile__container {
    
	height: 100%;
    font-family: 'Nunito', sans-serif;

    .profile__wrapper {
		height:100%;
        min-height: 100vh;
		width: 100%;
		max-width: 1200px;
		margin: 0px auto;
        color: var(--custom-color-light-1);
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;

        .headline {
            margin: 10px;
            margin-top: 50px;
            margin-bottom: 30px;
        }

        .profile__content {
            width: calc(100% - 30px);
            display: grid;
            grid-template-columns: 1fr 2fr;
            align-items: center;
            background-color: var(--custom-color-light-1);
            border-radius: 10px;
            border: 3px solid var(--custom-color-dark-3);
            overflow: hidden;
            margin: auto;

            .section {
                width: 100%;
                height: 100%;
                min-height: 600px;
                color: var(--custom-color-dark-1);

                &.cover {
                    height: 100%;
                    overflow: hidden;
                    box-shadow: 0px 0px 2px #00000088, 0px 0px 8px #00000088;
                    
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: top right;
                        animation: animateImg 10000ms linear alternate infinite;

                        @keyframes animateImg {
                            from {
                                transform: scale(1.2) rotate(0deg);
                            }
                            to {
                                transform: scale(1.4) rotate(5deg);
                            }
                        }
                    }
                }
            }

            .profile__message {
                margin-bottom: 20px;
                text-align: center;
                width: 100%;
                font-size: 1rem;
                font-weight: 400;
                cursor: pointer;
                user-select: none;

                span {
                    font-weight: 800;
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    
    .profile__content {

        grid-template-columns: 1fr !important;
        width: 100%;

        .section.cover {
            display: none;
        }
    }
}

</style>