import React, {useState } from 'react';
import Axios from "axios";

const UserCreate = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState("");

    const addEmployee = () => {
        Axios.post("http://localhost:3009/create", {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        }).then(() => {
            alert("Data Inserted");
        });
      };
      
        return (
            <section className="py-5">
                <div className="container">
                <div className="border shadow offset-md-3 col-md-6 p-4">
                <h1>Add Employee</h1>
                <div className="form-group">
                <input  onChange={(event) => {
            setName(event.target.value);
          }} 
                placeholder = "Enter Name"
                className="form-control"
                type="text"
                required="required"
                />
                </div>
                <div className="form-group">
                <input  onChange={(event) => {
            setAge(event.target.value);
          }}
                placeholder = "Enter Age"
                className="form-control"
                
                />
                </div>
                <div className="form-group">
                <input  onChange={(event) => {
            setCountry(event.target.value);
          }}
                placeholder = "Enter Country"
                className="form-control"
                />
           </div>
                <div className="form-group">
                <input onChange={(event) => {
            setPosition(event.target.value);
          }}
                placeholder = "Enter Position"
                className="form-control"
                />
                </div>
                <div className="form-group">
                <input onChange={(event) => {
            setWage(event.target.value);
          }}
                placeholder = "Enter Wage"
                className="form-control"
                />
                </div>
                <button onClick={addEmployee} className="btn btn-primary">Add Employee</button>
            </div>
                </div>
            </section>
            
        )
    }

    export default UserCreate;