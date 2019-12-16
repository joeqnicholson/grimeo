import ModalReducer from './modal_reducer'
import { combineReducers } from 'redux'
const UiReducer=combineReducers({
    modal: ModalReducer
})
export default UiReducer;