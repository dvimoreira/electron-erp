<template>
    <div id="page-dashboard">
        <div class="page-content">
            <div class="box-title">
                <h1>Dashboard</h1>
                <hr>
            </div>

            <div class="content">
                <div class="columns is-vcentered">
                    <div class="column is-6">
                        <div class="card">
                            <apexchart type="area" height="400" :options="chartArea" :series="seriesAria"></apexchart>
                        </div>
                    </div>

                    <div class="column is-3">
                        <div class="card">
                            <apexchart type="donut" height="400" :options="chartOptions" :series="series"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import AuthService from '@/services/auth/auth'

    export default {
        name: 'dashboard',
        components: {},
        data () {
            return {
                form: {},
                isLoading: false,
                // AREA CHART
                seriesAria: [{
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],
                chartArea: {
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    },
                },

                // DONUTS CHART
                series: [44, 55, 41, 17, 15],
                chartOptions: {
                    chart: {
                        type: 'donut',
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },
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
