import React, { Component } from 'react';

export default class StudentUpdate extends Component {
    
    constructor(){
        super();
        this.state={
            title:null,
            author:null
        }
    }
    componentDidMount()
        {

            fetch('http://localhost:3000/students/'+this.props.match.params.id).then((response)=>{
                response.json().then((result)=>
                    {
                        console.warn(result);
                this.setState({
                    id:result.id,
                    name:result.name,
                    email:result.email,
                    phone: result.phone,
                    address: result.address
                });
                    }
                );
            })
        }
        update(){
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
                
    render() {
        console.warn(this.props.match.params)
        return (
          //  <div>
            //    <div>
              //  <h1>This is Create</h1>
                //<input onChange={(event) =>{this.setState({title:event.target.value})
                //}} 
                //placeholder = "Title" value={this.state.title}/>
                //<input onChange={(event) =>{this.setState({
                  //  author:event.target.value
                //})

                //}} placeholder = "Author" value={this.state.author}/>
               // <br/>
                //<button onClick={()=>{this.update()}}>Update Student</button>
            //</div>
           // </div>

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
                <button onClick={()=>{this.update()}} className="btn btn-primary">Update Student</button>
            </div>
                </div>
            </section>
        )
    }
}
