/* eslint-disable no-unused-vars */
const getItems = () => {
    return fetch("http://localhost:3009/employees").then(res => res.json());    
    
    }   
    
        export default getItems;
    

        // const method = () => {
        //    alert("this is method function");
        //  }
         
        //  const otherMethod = () => {
        //     alert("this is overmethod method function");
        //  }
         
        //  module.exports = {
        //      method, 
        //      otherMethod,
            
        //  };