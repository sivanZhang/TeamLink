export default {
    setToken(state, val) {
        state.token = val;
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
    }
}