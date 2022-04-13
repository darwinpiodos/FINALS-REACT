import React from "react";




function HomepageLeft()
{
    return(
        <div className="container-fluid  d-flex flex-column justify-content-center p-5 content-text">
           <h1 className=" display-2">
           Welcome to MLGCL COVID-19 Contact Tracing System!
           </h1>

           <h4 className="subhead">
           MLGCL COVID-19 Contact Tracing System is the MLGCL's unofficial contact tracing system. We aim to manage the spread of COVID-19 to keep our students, instructors and staffs safe and healthy.
           </h4>




        <div className="logincontainer">

           <h3 style={{color:"#636161"}}>
           I'd like to <span style={{color:"#0771AB ",fontWeight:"bold"}}>login</span> as an
           </h3>

           <div style={{marginTop:"20px", marginBottom:"15px"}}>
               <button className="btn btn-primary" style={{borderRadius:"25px",padding:"10px 50px", fontSize:"18px",letterSpacing:"1px", marginRight:"20px"}}>Individual</button>
               <button className="btn btn-primary" style={{borderRadius:"25px",padding:"10px 50px", fontSize:"18px",letterSpacing:"1px"}}>Admin</button>
           </div>

           <h4>
           Don't have an account yet? <span style={{color:"#0771AB ",fontWeight:"bold", cursor:"pointer"}}>Register Now</span>
           </h4>

        </div>

        <div className="registercontainer">
            
           <h3 style={{color:"#636161"}}>
           I'd like to <span style={{color:"#0771AB ",fontWeight:"bold"}}>login</span> as an
           </h3>

           <div style={{marginTop:"20px", marginBottom:"15px"}}>
               <button className="btn btn-primary" style={{borderRadius:"25px",padding:"10px 50px", fontSize:"18px",letterSpacing:"1px", marginRight:"20px"}}>Individual</button>
               <button className="btn btn-primary" style={{borderRadius:"25px",padding:"10px 50px", fontSize:"18px",letterSpacing:"1px"}}>Admin</button>
           </div>

           <h4>
           Don't have an account yet? <span style={{color:"#0771AB ",fontWeight:"bold", cursor:"pointer"}}   >Register Now</span>
           </h4>

        </div>

    

           
        </div>
    )
}

export default HomepageLeft;