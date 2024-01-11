import { createStore } from 'redux'

function storeReducer(state = { sideBarState: { isShow: true } }, action) {
  switch (action.type) {
    case 'sideBar/toggleIsShow':
      state.sideBarState.isShow = !state.sideBarState.isShow
      return { ...state }
    default:
      return state
  }
}

export const store = createStore(storeReducer)
