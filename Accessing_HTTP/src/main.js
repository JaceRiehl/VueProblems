import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://httppract.firebaseio.com/data.json';
//This is an interceptor for a request and a response
Vue.http.interceptors.push((request,next) => {
    console.log(request);
    //this intercepts the request
    if(request.method == 'POST') {
        request.method('PUT');
    }
    //this is the interceptor for the response
    next(response => {
      response.json = () => {
        return {
          messages: response.body 
        }
      }
    });

});
new Vue({
  el: '#app',
  render: h => h(App)
});
