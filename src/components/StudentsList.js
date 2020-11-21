import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class StudentsList extends Component {
    constructor(){
        super();
        this.state={
            list:null,
        }
    }
        componentDidMount()
        {
       this.getData();
        }

        getData()
        {
            fetch('http://localhost:3000/students').then((response)=>{
                response.json().then((result)=>
                    {
                this.setState({list:result});
                    }
                );
            })
        }
delete(id){
    console.warn(this.state);
    fetch('http://localhost:3000/students/'+id,{
        method:"DELETE",
        //headers:{'Content-Type': 'application/json'},
        //body:JSON.stringify(this.state)
              
            }).then((result)=>{
                result.json().then((resp)=>
                    {
                //console.warn(resp);
                //alert("Student Hase Been Delete");
                //this.getData();
                this.props.history.push('/students');
                    }
                );
            })
        }
    render() {
       // console.warn(this.state);
        return (
            <section className="py-5">
            <div className="container">
                <h1>Students List</h1>
                {
                    this.state.list?
                    <div>
                    <Table responsive className="table table-bordered "  >
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>  

                    {
                        this.state.list.map((item,i)=>
                        
                      
                       
                        <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td><Link to={"/update/"+item.id} className="text-dark">Edit</Link>
      <span onClick={()=>this.delete(item.id)} className="ml-3">Delete</span></td>
    </tr>
    
                        )

                    }
                    </tbody>
                    </Table>
                    </div>
                   
                :<p>Please Wait</p>}
            </div>
            </section>
        )
    }
}
