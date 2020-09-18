// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immer';
import produce from 'immer';
import config from '../reducer/config'

const appReducers = combineReducers(produce, {
    config,

});

export default appReducers;