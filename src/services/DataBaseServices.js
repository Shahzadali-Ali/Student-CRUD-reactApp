/* eslint-disable no-unused-vars */
const getItems = function() {
    return fetch("http://localhost:3000/students").then(res => res.json());    
    }   
        export default getItems;
    