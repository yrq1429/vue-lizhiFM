import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 分开写
Vue.use(Vuex)

// lbs应用
const state = {
  showHeader: true,
  showListenContent: false
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})