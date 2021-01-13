/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UserUpdate = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    age: "",
    country: "",
    position: "",
    wage: ""
  });

  const { name, age, country, position, wage } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  function update1(id){
    //alert(id);
    axios.put("http://localhost:3009/update", {id: id, 
    name : name ,  
    age : age, 
    country : country ,
    position: position,
    wage : wage
    }).then(
                          (response) => {
                            alert("Data Update");
                            //this.props.history.push('/employees');
                          }
                        );
                      };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3009/update/${id}`);
    setUser(result.data);
  };
  return (
    <section className="py-5">
                <div className="container">
                <div className="border shadow offset-md-3 col-md-6 p-4">
                <h1>Edit Employee</h1>
        
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="country"
              value={country}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="position"
              value={position}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="wage"
              value={wage}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button onClick='update1{id)' className="btn btn-primary">Update Employee</button>
        
      </div>
    </div>
    </section>
  );
};

export default UserUpdate;