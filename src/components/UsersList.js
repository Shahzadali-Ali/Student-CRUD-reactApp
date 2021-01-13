import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import getItems from '../services/DataBaseServices';
import Axios from "axios";
import { useHistory} from "react-router-dom";

  export default function StudentsList(props) {
      const [items, setItems] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getItems().then(data => setItems(data));
      }, []);
      
      const deleteEmployee = (id) => {
        console.log('Delete Function');
        Axios.delete(`http://localhost:3009/delete/${id}`).then((response) => {
          alert("Employee Hase Been Delete");
          history.push("/employees");
      
        }
        );
        
      };
      
    
    
      return (
      <div>
      <section class="my-5">
      <div class="container">
      <h1 className="text-center mb-4"> All Employees</h1>
      <Table responsive className="table table-bordered" >
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>country</th>
      <th>Age</th>
      <th>position</th>
      <th>Wage</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>           {items.map(item => (
                        <>
            <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.country}</td>
      <td>{item.position}</td>
      <td>{item.wage}</td>
      <td><Link to={"/update/"+item.id} className="btn btn-success btn-sm">Edit</Link>
      <span onClick={() => deleteEmployee(item.id)} className="ml-3 btn btn-danger btn-sm">Delete</span></td>
   
      </tr>
            </>
           
          ))}
         
          </tbody>
          </Table>
          </div>
          </section>
        </div>
        
      );
    }
  
