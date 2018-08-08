import * as types from './mutation-types'
export default {
  updateHead ({ commit }, NotShow) {
    commit(types.UPDATE_HEAD, NotShow)
  },
  showListenContent ({ commit }, showListenContent) {
    commit(types.SHOW_LISTEN_CONTENT, showListenContent)
  },
  showHead ({ commit }, showHead) {
    commit(types.SHOW_HEAD, showHead)
  }
}
