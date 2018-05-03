<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'
    export default{
        props: ['userAge'],
        methods: {
            editAge: function(){
                this.userAge = 32;
                // this.$emit('ageEdited',this.userAge);
                //were emitting a custom event through the bus, any other component can use it
                //We can centralize this into where the bus was created:
                // eventBus.$emit('ageEdited', this.userAge);
                //And use it like this
                eventBus.editAge(this.userAge);
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
