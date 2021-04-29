import { createStore } from 'redux'
import reducer from '../reducers/indexReducer'

const store = createStore(reducer);

export default store;