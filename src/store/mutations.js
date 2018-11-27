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
  },
  setUrl(state, url) {
    state.url = url
  }
}

export default mutations