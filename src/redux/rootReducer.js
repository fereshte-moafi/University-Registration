import {combineReducers} from 'redux';
import courseReducer from './courses/courseReducers';
import studentReducer from './students/studentReducers';
import teacherReducer from './teachers/teacherReducers';

const rootReducer = combineReducers({
    courseReducer: courseReducer,
    studentReducer : studentReducer,
    teacherReducer : teacherReducer
})

export default rootReducer;
