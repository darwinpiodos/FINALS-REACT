import React from "react";
import Darwin from '../image/darwin-piodos.jpg';
import{Link, useHistory} from 'react-router-dom';



function InfoCard()
{



     
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();





    return(
        <div className="container-fluid p-5 fs-4">

            <div className="container p-5" style={{boxShadow:"0px 0px 5px gray",backgroundColor:"whitesmoke"}}>
                <h2 className="fs-1">User Information</h2>
                <div className="card">
                    <div className="card-header">


                        {
                            localStorage.getItem('user-info') ?
                            <>

                        <button className="btn btn-outline-secondary m-3 fs-4">See More</button>

                        <Link to="/editprofile">
                        <button className="btn btn-outline-secondary m-3 fs-4">Edit Profile</button>
                        </Link>
                            </>


                        :null


                        }
                    </div>


                    
                    <div className="card-body d-flex p-4">







                        <div className="col-4">

                            
                            {


                            localStorage.getItem('user-info') ?
                            <>
                       
                        <div style={{ backgroundImage:`url(${"http://localhost:8000/" + user.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position:"relative",
                            width:120,
                            height:120}}>
                            {/* <img style={{width:100}}src={darwin} /> */}


                        </div>
                        

                                    
                             </>
                            :null
                     
                            }




                                
                        {


                        localStorage.getItem('user-info') ?
                        <>
                        
                        <h1 className="mt-3">{user.firstname} {user.middlename} {user.lastname} </h1>
                        <h5><i class="fa solid fa-envelope me-3 mt-4"></i>{user.email}</h5>
                        <h5><i class="fa solid fa-phone me-3"></i>{user.primarynumber}</h5>
                        <h5><i class="fa solid fa-map me-3"></i>{user.barangay}, {user.town}, {user.province}</h5>
                      
                        </>
                        :null
                        
                        }

                        </div>



                        {


                        localStorage.getItem('user-info') ?
                        <>
                        <div className="col-8">
                            <div className="card">
                                <div className="card-header p-4">
                                <i class="fa solid fa-address-card"></i>
                                </div>
                                <div className="card-body d-flex p-4">
                                        <div className="col-2">
                                            <p className="fw-bold">Birthday:</p>
                                            <p className="fw-bold">Gender:</p>
                                            <p className="fw-bold">Email:</p>
                                        </div>
                                        <div className="col-3 me-3">
                                            <p>{user.month} {user.day}, {user.year}</p>
                                            <p>{user.gender}</p>
                                            <p>{user.email}</p>
                                        </div>
                                        <div className="col-3">
                                            <p className="fw-bold">Current Address:</p>
                                            <p className="fw-bold">Zip Code:</p>
                                            <p className="fw-bold">Mobile (Secondary):</p>
                                        </div>
                                        <div className="col">
                                            <p>{user.currentaddress}</p>
                                            <p>{user.zipcode}</p>
                                            <p>{user.secondarynumber}</p>
                                        </div>
                                </div>
                            </div>
                        </div>

                        </>
                        :null


                        }





                    </div>




















                </div>
            
            </div>

        </div>
    )
}


export default InfoCard;