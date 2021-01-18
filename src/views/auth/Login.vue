<template>
    <div id="page-login">
        <div id="box-login">
            <div class="columns">
                <div class="column">
                    <h1>Acessar Painel</h1>
                </div>
            </div>

            <!-- FORMULÁRIO -->
            <div class="columns is-multiline">
                <div class="column is-12">
                    <label for="username">Usuário</label>
                    <input type="text" v-model="form.username" id="username" class="form-control">
                </div>

                <div class="column is-12">
                    <label for="username">Senha</label>
                    <input type="password" v-model="form.password" id="password" class="form-control">
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <b-button type="is-primary" v-on:click="onLogin()" size="is-medium" inverted outlined rounded>Fazer Login</b-button>
                </div>
            </div>
        </div>

        <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
    </div>
</template>

<script>
    import AuthService from '@/services/auth/auth'

    export default {
        name: 'auth',
        components: {},
        data () {
            return {
                form: {},
                isLoading: false
            }
        },

        mounted () {
            if (this.$store.state.authenticated) {
                this.$router.push({ name: 'painel.dashboard' })
            }
        },

        methods: {
            async onLogin () {
                try {
                    this.isLoading = true

                    let data = {
                        username: this.form.username,
                        password: this.form.password
                    }

                    let result = await AuthService.login(data)

                    if (result.status === 200) {
                        this.$store.dispatch('login', result.data)
                        this.$router.push({ name: 'painel.dashboard' })
                        return
                    } else if (result.status === 422) {
                        for (const key in result.data.errors) {
                            if (result.data.errors[key]) {
                                throw Error(result.data.errors[key].message)
                            }
                        }
                        return
                    }

                    throw Error(result.data.message)
                } catch (e) {
                    this.isLoading = false
                    this.msgNotification(e.message, 'is-top-right', 'is-danger')
                } finally {
                    this.isLoading = false
                }
            },

            msgNotification (messagem, possition, type) {
                this.$buefy.notification.open({
                    duration: 5000,
                    message: messagem,
                    position: possition,
                    type: type,
                    hasIcon: false
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/unauthenticated.scss';

    #page-login {
        background-color: $primary;
        width: 100%;
        height: 100vh;
        display: inline-grid;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        text-align: center;
    }

    #box-login {
        max-width: 400px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.1);
        padding: 40px;
        border-radius: 4px;
        label {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 13px;
            color: #FFFFFF;
            margin-bottom: 5px;
            display: block;
            text-align: left;
        }

        .form-control {
            background: rgba(255, 255, 255, 0.15);
            width: 100%;
            border: 0;
            border-radius: 3px;
            height: 42px;
            padding: 0 15px;
            color: #FFFFFF;
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14);
            &:focus {
                border: 0;
                box-shadow: none;
                outline: none;
            }
        }

        h1 {
            font-size: 38px;
            font-weight: 700;
            display: block;
            margin: 0 0 15px 0;
            color: #FFFFFF;
            line-height: 32px;
        }
    }
    

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
