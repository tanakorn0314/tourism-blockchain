import { combineReducers } from 'redux';

import { AuthReducer } from './auth/reducer';
import { ReviewReducer } from './review/reducer';

export default combineReducers({
    Auth: AuthReducer,
    Review: ReviewReducer
})