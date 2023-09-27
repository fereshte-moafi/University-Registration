import React, { useEffect } from 'react'
import fetchTeachers, {DeleteTeachers} from '../redux/teachers/teacherActions';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import "../styles/styles.css";


const Teachers = ({ loading, teachers, errorMessage, fetchTeachers,DeleteTeachers }) => {
    useEffect(() => {
        fetchTeachers();
    }, []);

    if (loading) {
        return <h2>Loading.... </h2>
    }

    if (errorMessage) {
        return <p>Error : {errorMessage}</p>
    }

    return (
        <div>
            <h1 className='hcenter'>لیست اساتید</h1>
            <hr />
            <table border="1" className='center'>
                <thead>
                    <tr>
                    <th>نام </th>
                    <th>نام خانوادگی</th>
                    <th>نام درس</th>
                    {/* <th>ویرایش</th> */}
                    <th>حذف</th>
                    </tr>
                   
                </thead>
                {
                    teachers.map((teacher,index) => (
                        <tbody>
                          <tr>
                              <td> {teacher.first_name} </td>
                              <td>{teacher.last_name} </td>
                              <td>{teacher.course} </td>
                              {/* <td key={index}>
                                <button style={{ color: 'red', marginRight: '5px' }}>
                                    <i className='fa fa-edit'></i>
                                </button>

                               </td> */}
                               
                              <td>
                                <button style={{ color: 'red', marginRight: '5px' }}>
                                    <i className='fa fa-trash' onClick={() => DeleteTeachers(teacher.id)}></i>
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
        teachers: state.teacherReducer.teachers,
        errorMessage: state.errorMessage
    }
)

const mapDispatchToProps = dispatch => {
    return {
        fetchTeachers: () => dispatch(fetchTeachers()),
        DeleteTeachers: id => dispatch(DeleteTeachers(id)),
    };
  };



export default connect(mapStateToProps, mapDispatchToProps)(Teachers)

