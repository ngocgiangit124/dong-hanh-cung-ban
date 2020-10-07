// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import login from '../reducer/login'
import register from '../reducer/register'
import post from '../reducer/post'

const appReducers = combineReducers(produce, {
    login, post

});

export default appReducers;