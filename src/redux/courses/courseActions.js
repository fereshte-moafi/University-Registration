import { FETCH_COURSE_REQUEST, FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE, FETCH_COURSE_DELETE, FETCH_COURSE_EDIT } from './ActionTypes';
import axios from 'axios'

const fetchCourseRequest = () => {
   return {
      type: FETCH_COURSE_REQUEST,
      payload: []
   }
}
const fetchCourseSuccess = (data) => {
   return {
      type: FETCH_COURSE_SUCCESS,
      payload: data
   }
}

const fetchCourseFailure = (errorMessage) => {
   return {
      type: FETCH_COURSE_FAILURE,
      payload: errorMessage
   }
}


export const fetchCourseDelete = (id) => {
   return {
     type: FETCH_COURSE_DELETE,
     payload: id
   };
 };

 export const fetchCourseEdit = (id) => {
   return {
     type: FETCH_COURSE_EDIT,
     payload: id
   };
 };


const fetchCourses = () => {
   return (dispatch) => {
      dispatch(fetchCourseRequest());
      axios.get('http://localhost:3030/course')
         .then(response => {
            dispatch(fetchCourseSuccess(response.data))
         })
         .catch(error => {
            dispatch(fetchCourseFailure(error.message))
         })
   }
}

export const DeleteCourses = (id) => {
   return (dispatch) => {
      dispatch(fetchCourseRequest());
      axios.delete(`http://localhost:3030/course/${id}`)
         .then(response => {
            dispatch(fetchCourseDelete(id))
         })
         .catch(error => {
            dispatch(fetchCourseFailure(error.message))
         })
   }
}


export const updateCourses = (data) => {
   return (dispatch) => {
     axios
       .put(`http://localhost:3030/course/${data.id}`, data)
       .then((response) => {
         dispatch(updateCourses(data.id));
         dispatch(fetchCourses());
       })
       .catch((error) => {
         dispatch(fetchCourseFailure(error.message))
       });
   };
 };


export default fetchCourses;

