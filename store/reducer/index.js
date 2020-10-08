// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import login from '../reducer/login'
import register from '../reducer/register'
import post from '../reducer/post'
import category from '../reducer/category'
const appReducers = combineReducers(produce, {
    login, post, category

});

export default appReducers;