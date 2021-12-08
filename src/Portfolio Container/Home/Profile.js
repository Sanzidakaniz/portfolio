import React from 'react';

// import Typical from "react-typical";
import './Profile.css'
const Profile = () => {
    return (
        <div className="profile-container">
           <div className="profile-parent">

               <div className="profile-details">
                   <div className="colz">
                       <div className="colz-icon">
                       <a href="https://www.facebook.com/kanij.sanjida.9/">
                    <i className="fa fa-facebook-square"></i>
                        </a> 
                    <a href="https://www.linkedin.com/in/kaniz-sanzida-begum-582396227/">
                    <i class="fab fa-linkedin"></i>
                        </a> 
                    <a href="https://github.com/Sanzidakaniz">
                   
                    <i class="fab fa-github"></i>
                        </a> 
                       </div>
                   

                       
                   </div>
                   <div className="profile-details-name">
<span className="primary-text">
 Hi!I am <span className="highlighted-text"> Kaniz Sanzida</span>
</span>
</div>
                   <div  className="profile-details-role">
<span className="primary-text" >
<h5>
Junior Front End Developer 
 </h5>
 <span className="profile-role-tagline">
knock me for your work
 </span>
</span>
                   </div>
                   <div className="profile-options">
                       <a href='https://drive.google.com/file/d/1MxFjHysF-3SsNioKgUF-MorObbf_9TcJ/view' download=" my resume.pdf">
                        <button className="btn highlighted-btn">Download Resume</button>
                       </a>
                   </div>
               </div>
               <div className="profile-picture">
<div className="profile-picture-background"></div>
               </div>
               </div> 
        </div>
    );
};

export default Profile;