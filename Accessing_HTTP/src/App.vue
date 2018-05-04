<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>User Name</label>
                    <input type="text" class="form-control" v-model="userData.userName">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" v-model="userData.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Fetch Data</button>
                <ul class="list-group" >
                    <li class="list-group-item" v-for="user in users">{{user.userName}} - {{user.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    userName: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                //vue-resource posting data to the http
                // this.$http.post('data.json',this.userData)
                //     .then(response => {
                //     console.log(response);
                // }, error => {
                //         console.log(error);
                //     });
                //this.resource.save({}, this.userData)
                //We can use our custom action here instead
                this.resource.saveAlt(this.userData);
            },
            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //         return response.json()
                //     }) .then(data => {
                //         const resultArray = [];
                //         for(let key in data){
                //             resultArray.push(data[key]);
                //         }
                //         this.users = resultArray;
                //     }
                // );
                this.resource.getData({node: this.node})
                    .then(response => {
                                return response.json()
                            }) .then(data => {
                                const resultArray = [];
                                for(let key in data){
                                    resultArray.push(data[key]);
                                }
                                this.users = resultArray;
                            }
                        );
            }
        },
        created() {
            //custom action to be performed
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            }
            //this could be more centralized to share across multiple components
            this.resource = this.$resource('{node}.json', {}, customActions)
        }
    }
</script>

<style>
</style>
