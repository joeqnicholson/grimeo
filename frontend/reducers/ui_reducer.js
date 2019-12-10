import modalReducer from './modal_reducer'
import { combineReducers } from '../../../../Library/Caches/typescript/3.6/node_modules/redux'
const uiReducer=combineReducers({
    modal: modalReducer
})
export default uiReducer;