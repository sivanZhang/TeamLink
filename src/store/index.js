import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//数据
const state = {
    'token': '',
    'user_name': '',
    'portrait': '',
    'searchText': ''
};
//改变数据的方法
const mutations = {
    setToken(state, val) {
        state.token = val;
    },
    setUserName(state, name) {
        state.user_name = name;
    },
    setPortrait(state, url) {
        state.portrait = url;
    },
    setSearchText(state, text) {
        state.searchText = text;
    }
};
//实例化vuex,暴露方法
export default new Vuex.Store({
    state,
    mutations
});