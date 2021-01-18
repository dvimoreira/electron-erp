<template>
    <div id="page-stock">
        <div class="page-content">
            <div class="box-title">
                <h1>Fornecedor</h1>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    // import AuthService from '@/services/auth/auth'

    export default {
        name: 'provider',
        components: {},
        data () {
            return {
                search: '',
                form: {},
                isLoading: false
            }
        },

        mounted () {
            if (!this.$store.state.authenticated) {
                this.$router.push({ name: 'auth.login' })
            }
        },

        methods: {
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

    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
</style>
