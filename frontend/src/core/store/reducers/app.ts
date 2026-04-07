import { AppEnums } from './../../constants/types';
import { stateAppTypes } from './../interfaces/app';

let stateDefault: stateAppTypes = {
  isModal: false
}

const AppReducer = (state = stateDefault, action: any): stateAppTypes => {
  switch (action.type) {
    case AppEnums.SET_MODAL: {
      return { ...state, isModal: action.payload }
    }
    default: return { ...state }
  }
}


export default AppReducer