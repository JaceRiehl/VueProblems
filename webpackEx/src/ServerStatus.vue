<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Click Me! <3</button>
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
        status: 'Critical'
      };
    },
    methods: {
      changeStatus: function(){
        this.status="ABOUT TO BLOW";
      }
    }
  }
</script>
