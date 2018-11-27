
import router from '@/router'

const actions = {
  // 页面初始化menu、tag、bread 等
  createMenuList({ commit, state }) {
    let menuList = [];
    appRouters.forEach((item) => {
      // TODO:权限功能
      menuList.push(item);
    });
    commit('setTagNavList')
    commit('setHomeRoute', otherRouters)
    commit('addTag', {
      route: state.homeRoute
    })
    commit('setBreadCrumb', router.currentRoute)
    commit('setMenuList', menuList)
  }
}

export default actions