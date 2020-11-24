import React, {useState } from 'react'

export default function StudentCreate(){

    const [inputName, setInputname] = useState({
        name : "",
        email : "",
        phone : "",
        address : "",
        
     });
    function create(){
//console.warn(this.state);
fetch('http://localhost:3000/students',{
    method:"Post",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(inputName)
          
        }).then((result)=>{
            result.json().then((resp)=>
                {
            console.warn(resp);
            alert("Student Hase Been Added");
                }
            );
        })
    }
 
        return (
            <section className="py-5">
                <div className="container">
                <div className="border shadow offset-md-3 col-md-6 p-4">
                <h1>Add Student</h1>
                <div className="form-group">
                <input onChange={(event) =>{setInputname({
                    name:event.target.value
                })

                }} placeholder = "Enter Name"
                    className="form-control"
                />
                </div>
                <div className="form-group">
                <input onChange={(event) =>{setInputname({
                    email:event.target.value
                })

                }} placeholder = "Enter Email"
                    className="form-control"
                />
                </div>
               
                <div className="form-group">
                <input onChange={(event) =>{setInputname({
                    phone:event.target.value
                })

                }} placeholder = "Enter Phone"
                    className="form-control"
                />
                </div>
                <div className="form-group">
                <textarea onChange={(event) =>{setInputname({
                    address:event.target.value
                })

                }} placeholder = "Enter Address"
                    className="form-control"
                />
                </div>
                <button onClick={create} className="btn btn-primary">Add Student</button>
            </div>
                </div>
            </section>
            
        )
    }

