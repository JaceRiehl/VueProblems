<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, time: 2000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 100, time: 1000})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'

            ]),
        }
    }
</script>