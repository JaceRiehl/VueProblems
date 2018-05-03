import Vue from 'vue'
import App from './App.vue'

//this is where the bus is created
export const eventBus = new Vue({
    methods: {
      editAge(age){
        this.$emit('ageEdited', age);
      }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

