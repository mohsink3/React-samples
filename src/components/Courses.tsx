import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the Course interface to type the course data
interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;

  fees: number;
}

function Courses() {
  const API_URL = "https://67a97e126e9548e44fc3c722.mockapi.io/Courses";
  const [courses, setCourses] = useState<Course[]>([]);
  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCourses(data);
  };
  const deleteCourse = async (id: string) => {
    const request = {
      method: "DELETE",
    };

    const response = await fetch(`${API_URL}/${id}`, request);
    const data = response.json();
    console.log(data);

    const updatedCourses = courses.filter((course) => course.id != id);
    setCourses(updatedCourses);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div>
        <Link to="/add-course" className="btn btn-outline-success mb-3">
          ➕ Add Course
        </Link>
      </div>
      <h2>Course List</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Fees</th>
            <th scope="col">Actions</th>
            <th scope="col">Edit Actions</th>


          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <th>{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>{course.fees}</td>
              <td>
                <button className="btn btn-danger"
                  onClick={() => deleteCourse(course.id)}>Delete</button>
              </td>
              <td>
                <Link to = {`/edit-course/${course.id}`}>
                <button>Edit</button>
                </Link>
                          </td>
            </tr>

          ))}
        </tbody>
      </table>
    </>
  );
}

export default Courses;