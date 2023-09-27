import { FETCH_STUDENT_REQUEST, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_FAILURE, FETCH_STUDENT_DELETE } from './ActionTypes';
import axios from 'axios'

const fetchStudentRequest = () => {
   return {
      type: FETCH_STUDENT_REQUEST,
      payload: []
   }
}
const fetchStudentSuccess = (data) => {
   return {
      type: FETCH_STUDENT_SUCCESS,
      payload: data
   }
}

const fetchStudentFailure = (errorMessage) => {
   return {
      type: FETCH_STUDENT_FAILURE,
      payload: errorMessage
   }
}

export const fetchStudentDelete = (id) => {
   return {
     type: FETCH_STUDENT_DELETE,
     payload: id
   };
 };

const fetchStudents = () => {
   return (dispatch) => {
      dispatch(fetchStudentRequest());
      axios.get('http://localhost:3030/students')
         .then(response => {
            dispatch(fetchStudentSuccess(response.data))
         })
         .catch(error => {
            dispatch(fetchStudentFailure(error.message))
         })
   }
}


export const DeleteStudents = (id) => {
   return (dispatch) => {
      dispatch(fetchStudentRequest());
      axios.delete(`http://localhost:3030/students/${id}`)
         .then(response => {
            dispatch(fetchStudentDelete(id))
         })
         .catch(error => {
            dispatch(fetchStudentFailure(error.message))
         })
   }
}


export default fetchStudents;
