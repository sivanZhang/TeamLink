import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
/* import createLogger from 'vuex/dist/logger' */
Vue.use(Vuex)

/* const debug = process.env.NODE_ENV !== 'production' */

const store = new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    strict: true
        /* strict: debug,
        plugins: debug ? [createLogger()] : []  */
})

export default store