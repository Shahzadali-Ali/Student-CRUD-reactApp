import React, {useState , useEffect } from 'react';
import getItems from '../services/DataBaseServices';
export default function StudentUpdate(props){
    
    // eslint-disable-next-line no-unused-vars
    const [inputName, setInputname] = useState({
        name : "",
        email : "",
        phone : "",
        address : "",
             });
             
             useEffect(() => {
                getItems().then((result)=>
                    {
                setInputname({
                    id:result.id,
                    name:result.name,
                    email:result.email,
                    phone: result.phone,
                    address: result.address
                });
                    }
                );
            })
      
        function updateData(){
            console.warn(this.state);
            fetch('http://localhost:3000/students/'+this.state.id,{
                method:"PUT",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(this.state)
                      
                    }).then((result)=>{
                        result.json().then((resp)=>
                            {
                        //console.warn(resp);
                        alert("Student Hase Been Update");
                        this.props.history.push('/students');
                        //return <Redirect to='/students'  />
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
                <input onChange={(event) =>{this.setState({
                    name:event.target.value
                })

                }} placeholder = "Enter Name"
                    className="form-control"
                    value={this.state.name}
                />
                </div>
                <div className="form-group">
                <input onChange={(event) =>{this.setState({
                    email:event.target.value
                })

                }} placeholder = "Enter Email"
                    className="form-control"
                    value={this.state.email}
                />
                </div>
               
                <div className="form-group">
                <input onChange={(event) =>{this.setState({
                    phone:event.target.value
                })

                }} placeholder = "Enter Phone"
                    className="form-control"
                    value={this.state.phone}
                />
                </div>
                <div className="form-group">
                <input onChange={(event) =>{this.setState({
                    address:event.target.value
                })

                }} placeholder = "Enter Address"
                    className="form-control"
                    value={this.state.address}
                />
                
                </div>
                <button onClick={() => updateData()} className="btn btn-primary">Update Student</button>
            </div>
                </div>
            </section>
        )
    }

