import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const EditCourse =()=>{

    const API_URL = "https://67a97e126e9548e44fc3c722.mockapi.io/Courses";

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams<{ id: string }>();

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
