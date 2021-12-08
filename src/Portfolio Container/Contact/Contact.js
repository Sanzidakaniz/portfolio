import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e){
       e.preventDefault();

        emailjs.sendForm('service_dzxbo5i','template_i5v0k2a',e.target,'user_k4sa7pzWs0nMpQiKlfBN2')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="contact-container"
        style={{margin:"auto",
        width:"50%",
        backgroundImage:`url("https://wallpapercave.com/wp/wp4849737.jpg")`,
        backgroundPosition:"center",
        backgroundSize:"cover"
        }}>
           <h1 style={{marginTop:"25px"}}>Contact Form</h1> 
           <form className="row" style={{margin:"25px 85px 75px 100px"}} onsubmit={sendEmail}>
          
              <input type="text" name="name"  style={{marginBottom:"25px"}}className="form-control" placeholder="name"/>

         
              <input type="email" name="user_email"  style={{marginBottom:"25px"}} className="form-control" placeholder="email"/>

            
              <textarea name="message" rows='4'   style={{marginBottom:"25px"}}className="form-control" placeholder="message"/>

              <input type="submit" value="send"  style={{marginBottom:"25px"}} className="form-control btn btn-primary"/>
           </form>
        </div>
    );
};

export default Contact;