import React from 'react';
import './Project.css';



const Project = (props) => {
    const {name,details,image}=props.project;
    return(
    <div className="card new-design"> 
    <img src={image} alt="" />
    <h4>{name}</h4>
   <p><span>{details}</span></p>
   <button>Details</button>
    
    
    

</div>
   );
};

export default Project;