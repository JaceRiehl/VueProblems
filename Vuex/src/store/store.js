import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
       counter: 0
   },
    getters: {
       doubleCounter: state => {
           return state.counter * 2;
       },
        stringCounter: state => {
           return state.counter + ' Clicks'
        }
    },
    mutations: {
        increment: (state,payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    //best practice is to have only actions so that youre always committing setters to the same thing!!!!
    actions: {
       //this ({commit}) is es6 syntax that destructs the context parameter and only extract commit
       increment: ({commit}, payload) => {
           commit('increment',payload)
       },
        decrement: ({commit}, payload) => {
            commit('decrement', payload)
        },
        asyncIncrement: ({commit}, payload) => {
           setTimeout(() => {
            commit('increment',payload.by)
           },payload.time)
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by)
            },payload.time)
        }
    }
});