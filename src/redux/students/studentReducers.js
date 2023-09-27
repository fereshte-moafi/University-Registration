import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_FAILURE,FETCH_STUDENT_DELETE } from './ActionTypes';

const initialState = {
loading: false,
students: [],
errorMessage: null
}

const studentReducer=(state=initialState,action)=>{
switch(action.type){
   case FETCH_STUDENT_REQUEST:
     return {...state,loading:true}
case FETCH_STUDENT_SUCCESS:
     return {...state,loading:false,students:action.payload,errorMessage: null}
case FETCH_STUDENT_FAILURE:
      return {...state,loading:false,students:[] ,errorMessage: action.payload}
case FETCH_STUDENT_DELETE:
      return {...state,loading:false,students:state.students.filter(student => student.id !==action.payload),errorMessage: null}
default:
     return state;
       }
}

export default studentReducer;
