<template>
    <div class="row">
        <servers></servers>
        <server-details></server-details>
    </div>
</template>

<script>
    import Servers from './DisplayServers.vue'
    import ServerDetails from './ServerDetails.vue'
    export default{
        components:{
            servers: Servers,
            'server-details': ServerDetails,
        }
    }
</script>

<style scoped>
    div {
        border: 2px solid blue;
        background-image: url(http://cdn.shopify.com/s/files/1/1580/3805/products/large-pheasant-pack_grande.jpg?v=1503673397);
    }

</style>