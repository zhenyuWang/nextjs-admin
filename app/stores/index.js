import { createStore } from 'redux'

function storeReducer(state = { sideBarState: { isShow: true } }, action) {
  switch (action.type) {
    case 'sideBar/toggleIsShow':
      state.sideBarState.isShow = !state.sideBarState.isShow
      return { ...state }
    case 'sideBar/hide':
      state.sideBarState.isShow = false
      return { ...state }
    case 'sideBar/show':
      state.sideBarState.isShow = true
      return { ...state }
    default:
      return state
  }
}

export const store = createStore(storeReducer)
