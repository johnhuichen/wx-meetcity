import {
  bindActionCreators,
  compose,
  createStore,
  combineReducers,
  applyMiddleware
} from '../libs/redux.min'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk))
)

export { bindActionCreators, store }
