import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import modules from './modules'
import state from './state'
/* import products from './modules/products'
import createLogger from '../../../src/plugins/logger' */
/* import createLogger from 'vuex/dist/logger' */
Vue.use(Vuex)

/* const debug = process.env.NODE_ENV !== 'production' */
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,
})