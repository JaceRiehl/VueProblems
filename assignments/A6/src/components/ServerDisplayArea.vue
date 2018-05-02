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