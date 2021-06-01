import { combineReducers } from 'redux';
import ImagesReducer from './Images/reducer';

const rootReducer = combineReducers({
    user: ImagesReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
