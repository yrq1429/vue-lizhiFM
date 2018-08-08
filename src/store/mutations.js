import * as types from './mutation-types'
export default {
  [types.UPDATE_HEAD] (state, NotShow) {
    state.showHeader = NotShow
  },
  [types.SHOW_LISTEN_CONTENT] (state, showListenContent) {
    state.showListenContent = showListenContent
  },
  [types.SHOW_HEAD] (state, showHead) {
    state.showHeader = showHead;
  }
}