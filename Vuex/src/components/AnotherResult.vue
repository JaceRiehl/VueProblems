<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <hr>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        //this will create properties for the getters and map the getters to the getters in the store
        computed: {
            //The triple dot is an es6 property that tells javascript to pull out the methods from the object and
            //create seperate key value pairs
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
    }
</script>