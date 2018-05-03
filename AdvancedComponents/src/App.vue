<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='app-quote'">Quote</button>
                <button @click="selectedComponent='app-author'">Author</button>
                <button @click="selectedComponent='app-new'">New</button>

                <hr>

                <!--this keeps our component from being destroyed when a new component is switched to-->
                <!--with this we can use two new lifecycle hooks, activated and deactivated -->
                <keep-alive>
                    <!--this is how to dynamically add or change components-->
                    <component :is="selectedComponent"> Default </component>
                </keep-alive>
               <!--<app-quote>-->
                   <!--<h1 slot="title">{{quoteTitle}}</h1>-->
                   <!--<p>A Wonderful Quote!</p>-->
               <!--</app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import New from './components/New.vue'
    import Author from './components/Author.vue'
    export default {
        data() {
            return{
                quoteTitle: 'A Quotes',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
</script>

<style>
</style>
