<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                <router-view></router-view>
                </transition>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            'app-header': Header
        }
    }
</script>

<style>
    .slide-enter {

    }

    .slide-enter-active {
        animation: slide-in .5s ease-out forwards;
        transition: opacity .25s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out .5s ease-out forwards;
        transition: opacity .5s;
        opacity: 0;
        /*this is essential to make sure that when an item is removed it will interact with the position correctly*/
        position: absolute;
    }
    /*were given access to this by naming the transition group slide*/
    .slide-move {
        transition: transform .5s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
