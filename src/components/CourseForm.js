import React from "react";
import { useDispatch } from "react-redux";
import { fetchCourseEdit, updateCourses } from "../redux/courses/courseActions";

function CourseForm({ course }) {
  const dispatch = useDispatch();

  const [name, setName] = React.useState(course.name);

  const handleSubmit = () => {
    console.log(name);
    dispatch(updateCourses({ ...course, name }));
  };

  const handleCancel = () => {
    dispatch(fetchCourseEdit(course.id));
  };

  return (
    <tr>
      <td>{course.id}</td>
      <td>
        <input
          defaultValue={course.name}
          onChange={e => setName(e.target.value)}
        />
      </td>
      <td>
        <button type="button" className="btn outline" onClick={handleCancel}>
          <i className="material-icons">Cancel</i>
        </button>
        <button
          type="button"
          className="btn btn-success btn-link"
          onClick={handleSubmit}
        >
          <i className="material-icons">save</i>
        </button>
      </td>
    </tr>
  );
}

export default CourseForm;
