<template>
    <div id="page-stock">
        <div class="page-content">
            <div class="box-title">
                <h1>Estoque</h1>
                <hr>
            </div>

            <div class="card">
                <div id="buttons-bar">
                    <div class="columns is-vcentered">
                        <div class="column is-6">
                            <div class="text-left">
                                <b-button type="is-success" v-on:click="modalAddStock = true"><i class="fas fa-plus"></i> Adicionar Produto</b-button>
                            </div>
                        </div>

                        <div class="column is-6">
                            <div class="text-right">
                                <b-button class="filter"><i class="fas fa-filter"></i> Filtrar</b-button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="data-table">
                    <div class="columns">
                        <div class="column is-12">
                            <b-table :data="data" :bordered="false" :striped="true" :narrowed="false" :hoverable="true" :loading="isLoading" :focusable="false" :mobile-cards="false">
                                <b-table-column field="stock_reference" label="Referência" v-slot="props">
                                    {{ props.row.stock_reference }}
                                </b-table-column>

                                <b-table-column field="title" label="Título" v-slot="props">
                                    {{ props.row.title }}
                                </b-table-column>

                                <b-table-column field="fornecedor" label="Fornecedor" v-slot="props">
                                    {{ props.row.fornecedor }}
                                </b-table-column>

                                <b-table-column field="qtd" label="Quantidade" v-slot="props">
                                    {{ props.row.qtd }}
                                </b-table-column>

                                <b-table-column field="price" label="Preço" v-slot="props">
                                    {{ props.row.price }}
                                </b-table-column>

                                <b-table-column field="created_at" label="Data de Cadastro" v-slot="props">
                                    {{ props.row.created_at }}
                                </b-table-column>

                                <b-table-column>
                                    <div class="actions-button">
                                        <b-button type="is-primary" title="Detalhes" size="is-small"><i class="fas fa-eye"></i></b-button>
                                        <b-button type="is-success" title="Editar" size="is-small"><i class="fas fa-pen"></i></b-button>
                                        <b-button type="is-danger" title="Deletar" size="is-small"><i class="fas fa-trash"></i></b-button>
                                    </div>
                                </b-table-column>
                            </b-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal v-model="modalAddStock" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog" aria-label="Adicionar Item" aria-modal>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Controle de Estoque</p>
                </header>

                <section class="modal-card-body">
                    <div class="columns">
                        <div class="column">
                            <label for="stock_reference">Código do Produto</label>
                            <input type="text" v-model="form.stock_reference" id="stock_reference" class="form-control">
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-8">
                            <label for="title">Título</label>
                            <input type="text" v-model="form.title" id="title" class="form-control">
                        </div>

                        <div class="column is-4">
                            <label for="creator_type">Tipo</label>
                            <select v-model="form.creator_type" id="creator_type" class="form-control">
                                <option value="" disabled>Selecione um tipo</option>
                            </select>
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-4">
                            <label for="fornecedor">Fornecedor</label>
                            <select v-model="form.fornecedor" id="fornecedor" class="form-control">
                                <option value="" disabled>Selecione um fornecedor</option>
                            </select>
                        </div>

                        <div class="column is-4">
                            <label for="qtd">Quantidade</label>
                            <input type="number" v-model="form.qtd" id="qtd" class="form-control">
                        </div>

                        <div class="column is-4">
                            <label for="price">Preço</label>
                            <input type="text" v-model="form.price" id="price" class="form-control">
                        </div>
                    </div>

                    <div class="columns">
                        <div class="column is-12">
                            <label for="description">Descrição</label>
                            <textarea v-model="form.description" id="description" class="form-control-textarea"></textarea>
                        </div>
                    </div>
                </section>

                <footer class="modal-card-foot">
                    <b-button type="is-danger" v-on:click="closeModal()"><i class="fas fa-times"></i> Cancelar</b-button>
                    <b-button type="is-success"><i class="fas fa-check"></i> Salvar</b-button>
                </footer>
            </div>
        </b-modal>
    </div>
</template>

<script>
    // import AuthService from '@/services/auth/auth'

    export default {
        name: 'stock',
        components: {},
        data () {
            return {
                search: '',
                form: {},
                isLoading: false,
                modalAddStock: false,
                data: [
                    { 'stock_reference': '1324567', 'title': 'Suplemento Growth', 'fornecedor': 'Growth Suplementos', 'qtd': 50, 'price': '50,00', 'created_at': '2016-10-15 13:43:27' },
                    { 'stock_reference': '1324567', 'title': 'Suplemento Growth', 'fornecedor': 'Growth Suplementos', 'qtd': 50, 'price': '50,00', 'created_at': '2016-10-15 13:43:27' },
                    { 'stock_reference': '1324567', 'title': 'Suplemento Growth', 'fornecedor': 'Growth Suplementos', 'qtd': 50, 'price': '50,00', 'created_at': '2016-10-15 13:43:27' },
                    { 'stock_reference': '1324567', 'title': 'Suplemento Growth', 'fornecedor': 'Growth Suplementos', 'qtd': 50, 'price': '50,00', 'created_at': '2016-10-15 13:43:27' },
                    { 'stock_reference': '1324567', 'title': 'Suplemento Growth', 'fornecedor': 'Growth Suplementos', 'qtd': 50, 'price': '50,00', 'created_at': '2016-10-15 13:43:27' },
                    { 'stock_reference': '1324567', 'title': 'Suplemento Growth', 'fornecedor': 'Growth Suplementos', 'qtd': 50, 'price': '50,00', 'created_at': '2016-10-15 13:43:27' },
                ]
            }
        },

        mounted () {
            if (!this.$store.state.authenticated) {
                this.$router.push({ name: 'auth.login' })
            }
        },

        methods: {
            closeModal() {
                this.modalAddStock = false
                this.form = {}
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
    @import '../../assets/authenticated.scss';

    #buttons-bar {
        background: #f3f3f3;
        display: block;
        padding: 15px;
        border-radius: 4px;
        .filter {
            background: none;
            border: 0;
            cursor: pointer;
            font-size: 18px;
        }
    }

    .data-table {
        margin-top: 30px;
    }

    .actions-button {
        text-align: right;
        .button {
            margin-right: 5px;
            &:last-child { margin: 0; }
        }
    }

    label {
        display: block;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .form-control {
        display: block;
        width: 100%;
        height: 32px;
        border-radius: 4px;
        border: 1px solid #494949;
    }

    .form-control-textarea {
        display: block;
        width: 100%;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #494949;
    }

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
