<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition>
                <transition
                        appear
                        enter-active-class="animated bounce"
                        leave-active-class="animated shake"
                        >
                    <div class="alert alert-info" v-if="show">Some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">Some info</div>
                    <div class="alert alert-warning" v-else="!show" key="warning">This is a warning</div>
                </transition>
                <br>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br><br>
                <!--animation with javascript-->
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
                    <!--this is important to tell vue that css animation wont be used, and instead javascript will be-->
                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="changeComponents">Toggle Components</button>
                <br> <br>
                <transition name="fade" mode="out-in">
                <component :is="selectedComponent"></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Success from './SuccessAlert.vue'
    import Danger from './DangerAlert.vue'
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                load: false,
                elementWidth: 100,
                selectedComponent: 'app-success-alert'
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('Before Enter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('Enter');
                let round = 1;

                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        //This is important to tell JS that the animation is finished, it can't infer it by itself
                        done();
                    }
                },20);


            },
            afterEnter(el) {
                console.log("After Enter");
            },
            enterCancelled(el) {
              console.log('Enter Cancelled');
            },
            beforeLeave(el) {
                console.log('Before Leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('Leave');
                let round = 1;

                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        //This is important to tell JS that the animation is finished, it can't infer it by itself
                        done();
                    }
                },20);
            },
            afterLeave(el) {
                console.log('After Leave');
            },
            leaveCancelled(el) {
                console.log('Leave Cancelled');
            },
            changeComponents() {
                this.selectedComponent == 'app-success-alert' ? this.selectedComponent = 'app-danger-alert' : this.selectedComponent = 'app-success-alert';
            }
        },

        components: {
            'app-danger-alert': Danger,
            'app-success-alert': Success
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;

    }

    .fade-enter-active {
        transition: opacity 1s;

    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {

    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
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
