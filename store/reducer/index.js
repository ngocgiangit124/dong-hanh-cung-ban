// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import login from '../reducer/login'
import register from '../reducer/register'

const appReducers = combineReducers(produce, {
    login,

});

export default appReducers;