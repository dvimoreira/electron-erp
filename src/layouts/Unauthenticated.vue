<template>
    <div>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'unauthenticated',
        components: {},
        data () {
            return {}
        },

        computed: {},

        methods: {}
    }
</script>

<style lang="scss">
    @import '../assets/unauthenticated.scss';
</style>
