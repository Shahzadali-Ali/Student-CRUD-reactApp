/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { configure } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import getItems from '../services/DataBaseServices';
//import DataBaseServices from "../services/DataBaseServices";
//import getItems from "../services/DataBaseServices";

//const fetchURL = "http://localhost:3000/students";
//const getItems = () => fetch(fetchURL).then(res => res.json());

  export default function StudentsList(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
      }, []);
      


      function deleteData(id){
        //console.warn(this.state);
        fetch('http://localhost:3000/students/'+id,{
            method:"DELETE",
            //headers:{'Content-Type': 'application/json'},
            //body:JSON.stringify(this.state)
                  
                }).then((result)=>{
                    result.json().then((resp)=>
                        {
                    //console.warn(resp);
                    alert("Student Hase Been Delete");
                    //this.getData();
                   // this.props.history.push('/students');
                        }
                    );
                })
            }
      
      return (
        <div>
        <Table responsive className="table table-bordered" >
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

          {items.map(item => (
              
            <>
            <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td><Link to={"/update/"+item.id} className="text-dark">Edit</Link>
      <span onClick={() => deleteData(item.id)} className="ml-3">Delete</span></td>
   
      </tr>
            </>
           
          ))}
         
          </tbody>
          </Table>
        </div>
        
      );
    }
  
