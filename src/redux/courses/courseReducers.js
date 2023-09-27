import { FETCH_COURSE_REQUEST, FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE, FETCH_COURSE_DELETE, FETCH_COURSE_EDIT } from './ActionTypes';

const initialState = {
loading: false,
courses: [],
errorMessage: null,
editing:false
}

const courseReducer=(state=initialState,action)=>{
switch(action.type){
   case FETCH_COURSE_REQUEST:
     return {...state,loading:true}
case FETCH_COURSE_SUCCESS:
     return {...state,loading:false,courses:action.payload,errorMessage: null,editing:false}
case FETCH_COURSE_FAILURE:
      return {...state,loading:false,courses:[] ,errorMessage: action.payload,editing:false}
case FETCH_COURSE_DELETE:
      return {...state,loading:false,courses:state.courses.filter(course => course.id !==action.payload),errorMessage: null,editing:false}

case FETCH_COURSE_EDIT:
      return {...state,loading:false,courses:state.courses.map((course) => course.id ===action.payload ? {...course,editing:!course.editing}:course),errorMessage: null,editing:true}

default:
     return state;
       }
}

export default courseReducer;
