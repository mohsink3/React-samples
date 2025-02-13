import  { useState } from "react";

const AddCar = () =>{
    const api_url = "https://67a97e126e9548e44fc3c722.mockapi.io/Cars";

    const[brand,setBrand] = useState("");
    const[model,setModel] = useState("");
    const[price,setPrice] = useState("");
    const[message,SetMessage] = useState("");

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();

        if(isvalidform()){
            addcourse();
            SetMessage("");
        }else{
            SetMessage("pls validate form");
        }
    }

    const isvalidform =()=>{
        let validform:boolean=true;

        return validform;
    }
    const addcourse = async()=>{
        let requestbody = {id,brand,model,price};
        let requestBodyJSON = JSON.stringify(requestbody);
    

    const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBodyJSON,
    };
    const response = await fetch(api_url,request);
    if(response.ok){
        console.log("car added");
        const data = await response.json();
        console.log(data);
        setBrand("");
        setModel("");
        setPrice("");
    }else{
        SetMessage("error while adding car ");
    }
    }
    return(
        <div>
        <h2>Add car</h2>
        <form className="border p-3 shadow-lg rounded" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="brandtextbox" className="text-secondary">
              Title
            </label>
          </div>
          <div>
            <input
              type="text"
              name="brandtextbox"
              id="brandtextbox"
              value={brand}
              className="form-control mb-4"
              placeholder="Enter brand name"
              onChange={(e) => setBrand(e.target.value)} 
            />
            
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label htmlFor="modeltextbox" className="text-secondary">
              Description
            </label>
          </div>
          <div>
            <input
              type="text"
              name="modeltextbox"
              id="modeltextbox"
              value={model}
              className="form-control mb-4"
              placeholder="Enter model name"
              onChange={(e) => setModel(e.target.value)} 
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

export default AddCar;
  


