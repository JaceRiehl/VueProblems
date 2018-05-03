<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                   <h1 slot="title">{{quoteTitle}}</h1>
                   <p>A Wonderful Quote!</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    export default {
        data() {
            return{
              quoteTitle: 'A Quote'
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>

<style>
</style>
