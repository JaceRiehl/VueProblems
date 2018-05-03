<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>My name is: {{name}}</p>
        <p>My age is: {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!--the :name="name" makes it dynamic, so it will input the value of name instead of a string 'name'-->
                <!--this is where we listen to the event that was emitted from the child, which can be used to gather data-->
                <app-user-detail
                        :myName="name"
                        @nameWasReset="name = $event"
                        :resetFn="resetName"
                        :userAge="age"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :userAge="age"
                        @ageEdited="age=$event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data:
            function() {
                return {
                    name: 'Jace',
                    age: 27
                };
            },
        methods: {
           changeName: function(){
               this.name = "Not Jace"
               // if(this.name == "Jace")
               //  this.name = 'Not Jace';
               // else
               //     this.name = 'Jace';
           },
           resetName: function(){
                this.name = "Jace";
           }

        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
