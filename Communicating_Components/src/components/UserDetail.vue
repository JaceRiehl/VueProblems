<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name without event</button>
        <p>User Name: {{myName}}</p>
        <p>User Age: {{userAge}}</p>
    </div>
</template>

<script>
    import {eventBus} from '../main.js'
export default{
    //this property 'name' has to be the same as the parent.
    //by turning props into an object you can force the prop to have certain types
    props: {
        //this says that myName can only be a String or an Array
        //myName: [String,Array]
        //myName: String
        //This can also be an object with certain types of properties
        myName: {
            type: String,
            //This will make it so that this property has to be sent into this component through HTML
            //required: true
            //The default value
            default: "You shouldnt see this"
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        //This only resets the name in the child
        //We need a custom event in order to tell the parent that the name has been changed
        resetName: function(){
            this.myName = "Jace";
            //This emits a custom event that can be listened to by the parent using the component
            this.$emit('nameWasReset', this.myName);
        }
    },
    created(){
        eventBus.$on('ageEdited', (age) => {
            this.userAge = age;
        });
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
