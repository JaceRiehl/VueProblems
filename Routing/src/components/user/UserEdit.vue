<template>
    <div>
    <h3>Edit the User</h3>
    <hr>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="isClicked=true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some data</p>
    </div>
</template>

<script>
    export default{
       data() {
           return{
               isClicked: false
           }
       },
        beforeRouteLeave(to,from,next){
           //this is after the component has been clicked so we can again use the this keyword
            //this ensures that the user actually wants to leave
           if(this.isClicked == true){
               next();
           } else{
               if(confirm('Are you sure?')){
                   next();
               }else {
                   next(false);
               }
           }

        }
    }
</script>
