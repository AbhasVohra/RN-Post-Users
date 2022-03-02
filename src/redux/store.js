import { createStore } from 'redux'
import privatePostsReducer from './post_actions';

const store = createStore(privatePostsReducer)

export default store