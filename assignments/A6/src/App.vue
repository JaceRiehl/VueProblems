<template>
    <div class="container">
        <server-head></server-head>
        <hr>
        <servers></servers>
        <hr>
        <foot></foot>
    </div>
</template>

<script>

    import Footer from './components/Footer.vue'
    import Servers from './components/ServerDisplayArea.vue'
    import Head from './components/ServersHead.vue'
    export default{
        components: {
            foot: Footer,
            servers: Servers,
            'server-head': Head
        }
    }
</script>

<style>

</style>
