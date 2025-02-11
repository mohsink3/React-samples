import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const EditCourse =()=>{

   

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams<{ id: string }>();


    const ProductList = () => {
        const [courses, setCourses] = useState("");
        const [error, setError] = useState("");
      
        const fetchCoures = async () => {
          const response = await fetch(`https://67a97e126e9548e44fc3c722.mockapi.io/Courses/${id}`);
          console.log(response);
      
          if (response.ok == false) {
            setError("Error while fetching the list of Products");
          } else {
            const data = await response.json();
            setCourses(data);
          }
        };
      
        useEffect(() => {
          fetchProducts();
        }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

}
const editCourse = async () => {
   
    let requestBody = { title, description };
    let requestBodyJSON = JSON.stringify(requestBody);

    const request = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: requestBodyJSON,
      };
