<template>
    <div>        
        <aside>
            <div class="navigation-menu">
                <div id="box-img">
                    <img src="../assets/logo.png">
                </div>
               
               <ul>
                    <li v-for="(item, key) in navigation.menu" :key="key">
                        <b-tooltip :label="item.name" position="is-right">
                            <router-link :to="{ name: item.route }" v-bind:class="{ 'active': activeRoute === item.route }">
                                <i :class="`${item.icon}`"></i>
                            </router-link>
                        </b-tooltip>
                    </li>
                </ul>

                <div id="exit-button">
                    <button type="button" v-on:click="logout()"><i class="fas fa-sign-out-alt"></i><span>Sair</span></button>
                </div>
            </div>
        </aside>

        <div class="wrapper">
            <div class="main-content">
                <div class="container is-fluid">
                    <transition name="slide-fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import menu from '@/config/menu'
    export default {
        name: 'authenticated',
        components: {},
        data () {
            return {
                navigation: menu
            }
        },
        computed: {
            authenticated () {
                return this.$store.state.authenticated || false
            },

            /**
            * Pegando os dados do usuário
            */
            user () {
                return this.$store.state.user
            },

            /**
            * Pegando name da página ativa
            */
            activeRoute () {
                return this.$route.name
            }
        },
        methods: {
            logout () {
                this.$store.dispatch('logout')
                this.$router.push({ name: 'auth.login' })
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/authenticated.scss';

    html {
        background-color: #EEEEEE !important;
    }

    aside {
        background: #000000;
        text-align: center;
        width: 60px;
        height: 100%;
        position: fixed;
        box-shadow: 0px 0 10px rgba(0, 0, 0, 0.58);
        #box-img {
            padding: 5px 5px 0 5px;
            margin-bottom: 15px;
            display: block;
            background: rgba(255, 255, 255, 0.068);
            img {
                width: 100%;
            }
        }
        .navigation-menu {
            ul {
                padding: 0;
                margin: 0;
                li {
                    display: block;
                    a {
                        display: block;
                        color: hsla(0, 0%, 100%, 0.534);
                        font-size: 28px;
                        transition: all 0.3s;
                        margin-bottom: 20px;
                        &:hover, &.active {
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
    }

    .wrapper {
        margin-left: 60px;
    }

    .page-content {
        padding: 20px 0;
        .box-title {
            margin-bottom: 30px;
            h1 {
                font-size: 35px;
                font-weight: 700;
                text-transform: uppercase;
                margin: 0;
                display: block;
            }

            hr {
                margin: 0;
                background: #4a4a4a;
            }
        }
    }

    #exit-button {
        position: absolute;
        bottom: 0;
        width: 100%;
        button {
            cursor: pointer;
            background: rgba(255, 255, 255, 0.068);
            padding: 5px 0;
            width: 100%;
            border: 0;
            i, span {
                display: block;
                color: #e74c3c;
            }
            i { font-size: 30px; }
            span { font-size: 18px; }
        }
    }

    .card {
        padding: 15px;
    }

    .text-right {
        text-align: right;
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
