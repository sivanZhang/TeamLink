export default {
    setToken(state, val) {
        state.token = val;
        localStorage.setItem('token', val);
    },
    setUserName(state, name) {
        state.user_name = name;
    },
    setPortrait(state, url) {
        state.portrait = url;
    },
    set_search(state, text) {
        state.search_text = text;
    },
    setUrl(state, url) {
        state.url = url
    },
    setAgents(state, arr) {
        state.agents = arr
    },
    setBASE_URL(state, url) {
        state.BASE_URL = url
    },
    setViewList(state, payload) {
        state.viewList = payload.obj;
        state.keyword = payload.keyword;
    },
}