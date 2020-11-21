import React, { Component } from 'react'

export default class StudentCreate extends Component {

    constructor(){
        super();
        this.state={
            title:null,
            author:null
        }
    }
    create(){
console.warn(this.state);
fetch('http://localhost:3000/students',{
    method:"Post",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(this.state)
          
        }).then((result)=>{
            result.json().then((resp)=>
                {
            console.warn(resp);
            alert("Student Hase Been Added");
                }
            );
        })
    }
    render() {
        return (
            <section className="py-5">
                <div className="container">
                <div className="border shadow offset-md-3 col-md-6 p-4">
                <h1>Add Student</h1>
                <div className="form-group">
                <input onChange={(event) =>{this.setState({
                    name:event.target.value
                })

                }} placeholder = "Enter Name"
                    className="form-control"
                />
                </div>
                <div className="form-group">
                <input onChange={(event) =>{this.setState({
                    email:event.target.value
                })

                }} placeholder = "Enter Email"
                    className="form-control"
                />
                </div>
               
                <div className="form-group">
                <input onChange={(event) =>{this.setState({
                    phone:event.target.value
                })

                }} placeholder = "Enter Phone"
                    className="form-control"
                />
                </div>
                <div className="form-group">
                <textarea onChange={(event) =>{this.setState({
                    address:event.target.value
                })

                }} placeholder = "Enter Address"
                    className="form-control"
                />
                </div>
                <button onClick={()=>{this.create()}} className="btn btn-primary">Add Student</button>
            </div>
                </div>
            </section>
            
        )
    }
}
