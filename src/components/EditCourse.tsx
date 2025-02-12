import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
//import fetchCourse from "../Services/CourseServices";
const EditCourse = () => {

  const { id } = useParams<{ id: string }>();

  const API_URL = `https://67a97e126e9548e44fc3c722.mockapi.io/Courses/${id}`;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [titleError, setTitleError] = useState("");

  const [message, setMessage] = useState("");

  const fetchCourse = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTitle(data.title);
    setDescription(data.description);
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      editCourse();
      setMessage("");
    } else {
      setMessage("please fix validation error");
    }
  };

  const isFormValid = () => {
    let validform: boolean = true;

    if (title.trim() == "") {
      setTitle("title is required");
      validform = false;

    } else {
      setTitleError("");
    }
    if (description.trim().length == 0) {
      setDescriptionError("Description is required");
      validform = false;

    } else {
      setDescriptionError("");
    }
    return validform;
  }

  const editCourse = async () => {
    let requestBody = { title, description };
    let requestBodyJSON = JSON.stringify(requestBody);

    const request = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: requestBodyJSON,
    };
    const response = await fetch(API_URL, request);
    if (response.ok) {
      console.log("Course Updated sucessfully..");
      const data = await response.json();
      console.log(data);
      setMessage("Course updated Successfully");
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div>
      <h2>Edit Course</h2>
      <form className="border p-3 shadow-lg rounded" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="titleTextBox" className="text-secondary">
              Title
            </label>
          </div>
          <div>
            <input
              type="text"
              name="titleTextBox"
              id="titleTextBox"
              value={title}
              className="form-control mb-4"
              placeholder="Enter Course Title"
              onChange={(e) => setTitle(e.target.value)}
            />

          </div>
        </div>
        <div>
          <div className="mb-2">
            <label htmlFor="descriptionextBox" className="text-secondary">
              Description
            </label>
          </div>
          <div>
            <input
              type="text"
              name="descriptionextBox"
              id="descriptionextBox"
              value={description}
              className="form-control mb-4"
              placeholder="Enter Course Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditCourse;
