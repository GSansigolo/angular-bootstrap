<template>
    <div id="app">
        <p-header />
        <p-datasets />
        <p-footer />
    </div>
</template>

<script>
    import Datasets from './components/Datasets.vue'
    import Footer from './components/Footer.vue'
    import Header from './components/Header.vue'

    export default {
        name: 'app',
        components: {
            'p-datasets': Datasets,
            'p-header': Header,
            'p-footer': Footer
        }
    }
</script>

<style lang="scss">

</style>