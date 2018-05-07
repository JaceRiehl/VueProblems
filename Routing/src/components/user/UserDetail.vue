<template>
    <div>
    <h3>Some User Details</h3>
    <p>This user has ID: {{$route.params.id}}</p>
    <router-link
        tag="button"
        :to="link">
    Edit User
    </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: { name: 'userEdit',
                params: { id: this.$route.params.id},
                query: {locale: 'en', q:100},
                hash: '#data'
                }
            }
        },
        beforeRouteEnter(to,from,next){
            //in this function the component hasnt been created yet so we cant use the this. keyword
            //this is one of the three places where this function can be implemented, main, or in the routes
            if(true){
                next();
            } else{
                next(false);
            }
        }
    }
</script>