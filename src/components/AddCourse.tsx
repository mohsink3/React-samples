import { useState } from "react";
import { Form } from "react-router-dom";
const AddCourse = () => {
    
    const API_URL = "https://67a97e126e9548e44fc3c722.mockapi.io/Courses";
  
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(" ");
    const [message, setMessage] = useState(" ");
    const [duration, setDuration] = useState(" ");
    const [fees, setFees] = useState(" ");
    const [image, setImage] = useState(" ");
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault(); 
      addCourse(); 
    };
  
    
    const addCourse = async () => {
     
      let requestBody = { title, description,fees, duration, image }; 
      let requestBodyJSON = JSON.stringify(requestBody);
  
      
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBodyJSON,
      };
  
      
      const response = await fetch(API_URL, request);
      if (response.ok) {
        console.log("Course added..");
        const data = await response.json(); 
        console.log(data);
        setMessage("Course Added Successfully"); 
        setTitle(""); 
        setDescription(""); 
        setFees("");
            setDuration("");
            setImage("");
      } else {
        setMessage("Error while adding Course"); 
      }
    
  
    return (
      <div>
        
      
  
        <h2>Add Course</h2>
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
  <input
    type="text"
    name="feesTextBox"
    id="feesTextBox"
    value={fees}
    className="form-control mb-4"
    placeholder="Enter Course Fees"
    onChange={(e) => setFees(e.target.value)}
  />
</div>

<div>
  <input
    type="text"
    name="durationTextBox"
    id="durationTextBox"
    value={duration}
    className="form-control mb-4"
    placeholder="Enter Course Duration"
    onChange={(e) => setDuration(e.target.value)}
  />
  <div>
  <input
    type="file"
    name="imageUpload"
    id="imageUpload"
    className="form-control mb-4"
    onChange={(e) => setImage(e.target.files[0])}
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
  };
  
  export default AddCourse;