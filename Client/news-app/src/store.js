import { createStore } from 'redux';
import newsReducer from './app/reducers/newsReducer';


export default createStore(newsReducer);