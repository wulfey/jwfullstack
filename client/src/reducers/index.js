import { combineReducers } from 'redux';
import AuthReducer from './authReducer'
// import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: AuthReducer

});

