import { FETCH_TEACHER_REQUEST, FETCH_TEACHER_SUCCESS, FETCH_TEACHER_FAILURE,FETCH_TEACHER_DELETE } from './ActionTypes';

const initialState = {
loading: false,
teachers: [],
errorMessage: null
}

const teacherReducer=(state=initialState,action)=>{
switch(action.type){
   case FETCH_TEACHER_REQUEST:
     return {...state,loading:true}
case FETCH_TEACHER_SUCCESS:
     return {...state,loading:false,teachers:action.payload,errorMessage: null}
case FETCH_TEACHER_FAILURE:
      return {...state,loading:false,teachers:[] ,errorMessage: action.payload}
case FETCH_TEACHER_DELETE:
return {...state,loading:false,teachers:state.teachers.filter(teacher => teacher.id !==action.payload),errorMessage: null}

default:
     return state;
       }
}

export default teacherReducer;
