import React, { useEffect, useState } from 'react';
import Project from '../Home Project/Project';



import './Projects.css'

const Projects = () => {
    const [projects,setProjects]=useState([]);
  
    useEffect(()=>{
    fetch('./project.JSON')
    .then(res=>res.json())
    .then(data=>setProjects(data.slice(0,3)));
},[]);

    return (
        <div className="main-container">
           <div>
               <h3 className="text">Projects</h3>
              <div className="projects-container">
                 
                {
                     projects.map(project=>
                     <Project
                        key={project.id}
                        project={project}
                        ></Project>)
                 }
                </div>  
                </div>  
            <div >

            </div>
        </div>
    );
};

export default Projects;