// store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        name:'超级玛丽',
        age:'20'
    },
    mutations:{
        showPeople(state,msg){
            state.name=msg
        }
    }
})
export default store



















