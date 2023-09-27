import { FETCH_TEACHER_REQUEST, FETCH_TEACHER_SUCCESS, FETCH_TEACHER_FAILURE,FETCH_TEACHER_DELETE } from './ActionTypes';
import axios from 'axios'

const fetchTeacherRequest = () => {
   return {
      type: FETCH_TEACHER_REQUEST,
      payload: []
   }
}
const fetchTeacherSuccess = (data) => {
   return {
      type: FETCH_TEACHER_SUCCESS,
      payload: data
   }
}

const fetchTeacherFailure = (errorMessage) => {
   return {
      type: FETCH_TEACHER_FAILURE,
      payload: errorMessage
   }
}

export const fetchTeacherDelete = (id) => {
   return {
     type: FETCH_TEACHER_DELETE,
     payload: id
   };
 };

const fetchTeachers = () => {
   return (dispatch) => {
      dispatch(fetchTeacherRequest());
      axios.get('http://localhost:3030/teachers')
         .then(response => {
            dispatch(fetchTeacherSuccess(response.data))
         })
         .catch(error => {
            dispatch(fetchTeacherFailure(error.message))
         })
   }
}

export const DeleteTeachers = (id) => {
   return (dispatch) => {
      dispatch(fetchTeacherRequest());
      axios.delete(`http://localhost:3030/teachers/${id}`)
         .then(response => {
            dispatch(fetchTeacherDelete(id))
         })
         .catch(error => {
            dispatch(fetchTeacherFailure(error.message))
         })
   }
}


export default fetchTeachers;
