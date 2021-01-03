import { combineReducers } from 'redux'
import TodosReducer from './Todos'

const allReducers = combineReducers({ todo: TodosReducer })
export default allReducers
