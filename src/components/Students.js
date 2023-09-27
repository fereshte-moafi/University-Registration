import React, { useEffect } from 'react'
import fetchStudents,{DeleteStudents} from '../redux/students/studentActions';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import "../styles/styles.css";


const Students = ({ loading, students, errorMessage, fetchStudents,DeleteStudents }) => {
    useEffect(() => {
        fetchStudents();
    }, []);

    if (loading) {
        return <h2>Loading.... </h2>
    }

    if (errorMessage) {
        return <p>Error : {errorMessage}</p>
    }

    return (
        <div>
            <h1 className='hcenter'>لیست دانشجویان</h1>
            <hr />
            <table border="1" className='center'>
                <thead>
                    <tr>
                    <th>شماره دانشجویی</th>
                    <th>نام </th>
                    <th>نام خانوادگی</th>
                    <th>رشته تحصیلی</th>
                    {/* <th>ویرایش</th> */}
                    <th>حذف</th>
                    </tr>
                   
                </thead>
                {
                    students.map((student,index) => (
                        <tbody>
                          <tr>
                              <td>{student.id} </td>
                              <td> {student.first_name} </td>
                              <td>{student.last_name} </td>
                              <td>{student.field} </td>

                              {/* <td key={index}>
                                <button style={{ color: 'red', marginRight: '5px' }}>
                                    <i className='fa fa-edit'></i>
                                </button>

                               </td> */}

                              <td>
                                <button style={{ color: 'red', marginRight: '5px' }}>
                                    <i className='fa fa-trash' onClick={() => DeleteStudents(student.id)}></i>
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
        students: state.studentReducer.students,
        errorMessage: state.errorMessage
    }
)

const mapDispatchToProps = dispatch => {
    return {
        fetchStudents: () => dispatch(fetchStudents()),
        DeleteStudents: id => dispatch(DeleteStudents(id)),
    };
  };


//export default connect(mapStateToProps, { fetchStudents })(Students)

export default connect(mapStateToProps, mapDispatchToProps)(Students)

