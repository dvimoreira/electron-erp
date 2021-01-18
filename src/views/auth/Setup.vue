<template>
    <div id="page-setup">
        <div class="columns is-gapless">
            <div class="column is-3">
                <div id="step-box">
                    <div class="text-right">
                        <ul>
                            <li :class="{ active: step === 1 }">Bem vindo!</li>
                            <li :class="{ active: step === 2 }">Informações Básicas</li>
                            <li :class="{ active: step === 3 }">Cadastro de Usuário</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="column is-9">
                <div id="step-form">
                    <div id="step-1" v-if="step === 1">
                        <h1>Bem vindo ao seu novo ERP!</h1>
                        <p>- Contagem de estoque de maneira muito mais prática e rápida, com a visão geral dos produtos que você tem.</p>
                        <p>- Alerta de estoque mínimo para você não perder vendas.</p>
                        <p>- Controle tudo em uma única tela e imprima facilmente sua lista de apoio ao inventário físico, separado por categoria, código, fornecedor ou nome.</p>

                        <b-button type="is-primary" v-on:click="toStep(2)" size="is-medium" inverted outlined rounded>Vamos Nessa!</b-button>
                    </div>

                    <div id="step-2" v-if="step === 2">
                        <div class="columns">
                            <div class="column">
                                <h2>Dados de configuração da Empresa</h2>
                                <small>Informações básicas para emissão de pedidos, boletos e NF-e.</small>
                            </div>
                        </div>

                        <!-- FORMULÁRIO -->

                        <div class="columns">
                            <div class="column">
                                <label for="company_name">Nome da Empresa</label>
                                <input type="text" v-model="form.company.company_name" id="company_name" class="form-control">
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <label for="cnpj">CNPJ</label>
                                <input type="text" v-model="form.company.cnpj" v-mask="'##.###.###/####-##'" id="cnpj" class="form-control">
                            </div>

                            <div class="column">
                                <label for="ie">Inscrição Estadual</label>
                                <input type="text" v-model="form.company.ie" id="ie" class="form-control">
                            </div>

                            <div class="column">
                                <label for="municipal_registration">Inscrição Municipal</label>
                                <input type="text" v-model="form.company.municipal_registration" id="municipal_registration" class="form-control">
                            </div>
                        </div>

                        <div class="columns is-vcentered">
                            <div class="column">
                                <label for="fixed_phone">Telefone</label>
                                <input type="text" v-model="form.company.fixed_phone" v-mask="'(##) ####-####'" id="fixed_phone" class="form-control">
                            </div>

                            <div class="column">
                                <label for="mobile_phone">Celular</label>
                                <input type="text" v-model="form.company.mobile_phone" v-mask="'(##) #####-####'" id="mobile_phone" class="form-control">
                            </div>

                            <div class="column">
                                <label for="icms">Redução ICMS %</label>
                                <input type="text" v-model="form.company.icms" id="icms" class="form-control">
                            </div>
                        </div>

                        <div class="columns is-vcentered">
                            <div class="column is-5">
                                <label for="address">Endereço</label>
                                <input type="text" v-model="form.company.address" id="address" class="form-control">
                            </div>

                            <div class="column is-4">
                                <label for="district">Bairro</label>
                                <input type="text" v-model="form.company.district" id="district" class="form-control">
                            </div>

                            <div class="column is-3">
                                <label for="number">Número</label>
                                <input type="text" v-model="form.company.number" id="number" class="form-control">
                            </div>
                        </div>

                        <div class="columns is-vcentered">
                            <div class="column is-6">
                                <label for="city">Cidade</label>
                                <input type="text" v-model="form.company.city" id="city" class="form-control">
                            </div>

                            <div class="column is-3">
                                <label for="state">Estado</label>
                                <input type="text" v-model="form.company.state" id="state" class="form-control">
                            </div>

                            <div class="column is-3">
                                <label for="postal_code">CEP</label>
                                <input type="text" v-model="form.company.postal_code" v-mask="'#####-###'" id="postal_code" class="form-control">
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <b-button type="is-primary" v-on:click="onSaveCompany()" size="is-medium" inverted outlined rounded>Salvar</b-button>
                            </div>
                        </div>
                    </div>
                    <div id="step-3" v-if="step === 3">
                        <div class="columns">
                            <div class="column">
                                <h2>Cadastro de usuário</h2>
                                <small>Cadastro do usuário administrador do sistema</small>
                            </div>
                        </div>

                        <!-- FORMULÁRIO -->

                        <div class="columns">
                            <div class="column">
                                <label for="user_full_name">Nome Completo</label>
                                <input type="text" v-model="form.user.user_full_name" id="user_full_name" class="form-control">
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <label for="dt_birth">Data de Nascimento</label>
                                <input type="text" v-model="form.user.dt_birth" v-mask="'##/##/####'" id="dt_birth" class="form-control">
                            </div>

                            <div class="column">
                                <label for="mobile_phone_user">Celular</label>
                                <input type="text" v-model="form.user.mobile_phone" v-mask="'(##) #####-####'" id="mobile_phone_user" class="form-control">
                            </div>

                            <div class="column">
                                <label for="dt_register">Data de contratação</label>
                                <input type="text" v-model="form.user.dt_register" v-mask="'##/##/####'" id="dt_register" class="form-control">
                            </div>
                        </div>

                        <div class="columns is-vcentered">
                            <div class="column">
                                <label for="email">E-mail</label>
                                <input type="text" v-model="form.user.email" id="email" class="form-control">
                            </div>

                            <div class="column">
                                <label for="username">Usuário</label>
                                <input type="text" v-model="form.user.username" id="username" class="form-control">
                            </div>

                            <div class="column">
                                <label for="password">Senha</label>
                                <input type="password" v-model="form.user.password" id="password" class="form-control">
                            </div>
                        </div>

                        <div class="columns">
                            <div class="column">
                                <b-button type="is-primary" v-on:click="onSaveUserAdmin()" size="is-medium" inverted outlined rounded>Finalizar</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
    </div>
</template>

<script>
    import CompanyService from '@/services/setup/company'
    import UserService from '@/services/setup/user'
    // import storage from '@/security/storage'

    export default {
        name: 'setup',
        components: {},
        data () {
            return {
                form: {
                    company: {},
                    user: {
                        user_full_name: ""
                    }
                },
                isLoading: false,
                step: 1
            }
        },

        async mounted () {
            await this.checkCompanyExist()
            await this.checkUserExist()
        },

        methods: {
            toStep (paramStep) {
                try {
                    this.isLoading = true
                    this.step = paramStep
                    return
                } catch (e) {
                    this.isLoading = false
                    this.msgNotification(e.message, 'is-top-right', 'is-danger')
                } finally {
                    this.isLoading = false
                }
            },

            async onSaveCompany () {
                try {
                    this.isLoading = true
                     let data = {
                        company_name: this.form.company.company_name,
                        cnpj: this.form.company.cnpj,
                        ie: this.form.company.ie,
                        municipal_registration: this.form.company.municipal_registration,
                        phone: this.form.company.fixed_phone,
                        mobile_phone: this.form.company.mobile_phone,
                        icms: this.form.company.icms,
                        address: this.form.company.address,
                        district: this.form.company.district,
                        number: this.form.company.number,
                        city: this.form.company.city,
                        state: this.form.company.state,
                        postal_code: this.form.company.postal_code
                    }

                    let result = await CompanyService.saveCompany(data)

                    if (result.status === 200) {
                        this.step = 3
                        this.msgNotification("Empresa cadastrada com sucesso!", 'is-top-right', 'is-success')
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

            async checkCompanyExist () {
                try {
                    this.isLoading = true

                    let result = await CompanyService.checkCompanyExist()

                    if (result.status === 200) {
                        this.step = 3
                        return
                    } else if (result.status === 422) {
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

            async onSaveUserAdmin () {
                try {
                    this.isLoading = true
                     let data = {
                        full_name: this.form.user.user_full_name,
                        dt_birth: this.form.user.dt_birth,
                        mobile_phone: this.form.user.mobile_phone,
                        dt_register: this.form.user.dt_register,
                        email: this.form.user.email,
                        username: this.form.user.username,
                        password: this.form.user.password
                    }

                    let result = await UserService.saveUser(data)

                    if (result.status === 200) {
                        this.$router.push({ name: 'auth.login' })
                        this.msgNotification("Usuário cadastrado com sucesso!", 'is-top-right', 'is-success')
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

            async checkUserExist () {
                try {
                    this.isLoading = true

                    let result = await UserService.checkUserExist()

                    if (result.status === 200) {
                        this.$router.push({ name: 'auth.login' })
                        return
                    } else if (result.status === 422) {
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

    #step-box, #step-form {
        width: 100%;
        height: 100vh;
        padding: 50px;
        display: inline-grid;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
    }

    #step-box {
        background: $secundary;
        ul {
            padding: 0;
            margin: 0;
            li {
                display: block;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 14px;
                color: #FFFFFF;
                margin-bottom: 40px;
                padding-bottom: 10px;
                border-bottom: 1px solid #FFFFFF;
                opacity: 0.5;
                &.active {
                    opacity: 1;
                }
            }
        }
    }

    #step-form {
        background: $primary;
        #step-1 {
            color: #FFFFFF;
            h1 {
                font-size: 38px;
                font-weight: 700;
                display: block;
                margin: 0 0 15px 0;
            }

            p {
                font-size: 15px;
                margin-bottom: 10px;
            }

            .button {
                margin-top: 30px;
                transition: all 0.3s;
            }
        }

        #step-2, #step-3 {
            color: #FFFFFF;
            h2 {
                font-size: 38px;
                font-weight: 700;
                display: block;
                margin: 0;
            }

            small {
                font-size: 15px;
                margin-bottom: 10px;
                display: block;
            }

            .button {
                transition: all 0.3s;
            }
        }
    }

    label {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 13px;
        color: #FFFFFF;
        margin-bottom: 5px;
        display: block;
    }

    .form-control {
        background: rgba(255, 255, 255, 0.15);
        width: 100%;
        border: 0;
        border-radius: 3px;
        height: 42px;
        padding: 0 15px;
        color: #FFFFFF;
        &:focus {
            border: 0;
            box-shadow: none;
            outline: none;
        }
    }

    .switch.is-rounded input[type=checkbox] + .check {
        float: left !important;
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
