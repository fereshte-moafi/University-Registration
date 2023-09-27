import React, { useEffect } from 'react'
import fetchCourses, {DeleteCourses, updateCourses} from '../redux/courses/courseActions';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import CourseForm from "./CourseForm";
import "../styles/styles.css";




const Courses = ({ loading, courses, errorMessage, fetchCourses, DeleteCourses , updateCourses }) => {
    useEffect(() => {
        fetchCourses();
    }, []);

    if (loading) {
        return <h2>Loading.... </h2>
    }

    if (errorMessage) {
        return <p>Error : {errorMessage}</p>
    }




    return (
        <div >
            <h1 className='hcenter'>لیست دروس</h1>
            <hr />
            <table border="1" className='center'>
                <thead>
                    <tr>
                        <th>کد درس</th>
                        <th>نام درس</th>
                        <th>تعداد واحد</th>
                        <th>نام استاد</th>
                        {/* <th>ویرایش</th> */}
                        <th>حذف</th>
                    </tr>

                </thead>
                {
                    courses.map((course, index) => (
                        <tbody>
                     
                            <tr>
                                <td>{course.id} </td>
                                <td> {course.name} </td>
                                <td>{course.tedad} </td>
                                <td>{course.teacher} </td>

                                {/* <td key={index}>
                                    <button style={{ color: 'red', marginRight: '5px' }}>
                                        <i className='fa fa-edit' onClick={() => updateCourses(course.id)}></i>
                                    </button>

                                </td> */}

                                <td>
                                    <button style={{ color: 'red', marginRight: '5px' }}>
                                        <i className='fa fa-trash' onClick={() => DeleteCourses(course.id)} ></i>
                                    </button>

                                </td>

                            </tr>
         
                        </tbody>


                    ))
                }
            </table>
        </div>
    )
}

const mapStateToProps = state => (
    {
        loading: state.loading,
        courses: state.courseReducer.courses,
        errorMessage: state.errorMessage
    }
)

  
const mapDispatchToProps = dispatch => {
    return {
       fetchCourses: () => dispatch(fetchCourses()),
       DeleteCourses: id => dispatch(DeleteCourses(id)),
       updateCourses: id => dispatch(updateCourses(id)),
    };
  };
 

// export default connect(mapStateToProps, { fetchCourses })(Courses)

export default connect(mapStateToProps, mapDispatchToProps)(Courses)

