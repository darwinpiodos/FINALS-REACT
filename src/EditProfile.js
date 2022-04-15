import NavBar from './NavBar';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Footer from './Footer';
import './App.css';



function EditProfile(props)
{   
    const[users,setuser] =useState([])
    const[firstname,setfirstName]=useState("")
    const[lastname,setlastName]=useState("")
    const[middlename,setmiddleName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const[gender,setGender]=useState("")
    const[month,setMonth]=useState("")
    const[day,setDay]=useState("")
    const[year,setYear]=useState("")

    const[primarynumber,setPrimary]=useState("")
    const[secondarynumber,setSecondary]=useState("")
    const[landline,setLandline]=useState("")

    const[province,setProvince]=useState("")
    const[town,setTown]=useState("")
    const[barangay,setBarangay]=useState("")

    const[zipcode,setZipcode]=useState("")
    const[currentaddress,setCurrent]=useState("")
    const[image,setImage]=useState("")
    const[userId,setUserId]=useState(null)


    const [data,setData]=useState([]);
    useEffect (  ()=>{
       getData();
    },[])
   



   

    async function getData(){
        let result= await fetch("http://localhost:8000/api/list");
        result= await result.json();
        setData(result)

    }



    const [datum,setDatas]=useState([])
    console.warn("props",props.match.params.id)
    useState(async ()=>
    {
        let result = await fetch("http://localhost:8000/api/edit/" + props.match.params.id);
        result =await result.json();
         setDatas(result)
    })


  
    return(




        <div className='row'>
            <NavBar/>

            <div className='mt-5'></div>
            <div className='col-sm-6 offset-sm-3'>

                <h1 className='display-3 mt-5'>Registration</h1>
                <small className='fs-5 mb-5'>Please provide all information requested below</small>

                <div className='mb-5'>
                    <hr className='mb-5'></hr>
                </div>

                <h1 className='fs-2 mt-5'>Basic Information</h1>

              

                    <section className='d-flex'>
                        <div className='form-group m-3' style={{width:"50%"}}>
                            <label className='form-label fs-4'>First Name</label>
                            <input type="text" className="form-control fs-4 p-5" placeholder="enter firstname" required defaultValue={datum.firstname}></input>
                        </div>

                        <div className='form-group m-3' style={{width:"50%"}}>
                        <label className='form-label fs-4'>Middle Name</label>
                            <input type="text" className="form-control fs-4 p-5" placeholder="enter middlename (optional)" defaultValue={datum.middlename}></input>
                        </div>

                    </section>



                    
                <section className='form-group m-3'>
                    <label className='form-label fs-4 '>Last Name</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter lastname" defaultValue={datum.firstname}></input>
                        
                </section>


                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Email</label>
                    <input type="text" className="fs-4 form-control p-5" placeholder="enter email" defaultValue={datum.email}></input>
                    <small style={{color:"#0497e0",fontSize:"12px"}}>Make sure your email address is correct.</small>
               
                        
                </section>





                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Password</label>
                    <input type="password" className="form-control p-5 fs-4" placeholder="enter password" defaultValue={datum.password}></input>
                       
                </section>



                <section className='form-group m-3 mb-5 pb-3'>

                    <label className='form-label fs-4'>Gender</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter gender" defaultValue={datum.gender}></input>

                    

                </section>

                
                <h1 className='fs-2 mt-5'>Birth Date</h1>

              

            <div className='d-flex'>
                <div className='form-group m-3' style={{width:"50%"}}>
                    <label className='form-label fs-4'>Month</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter month" defaultValue={datum.month}></input>
                </div>

                <div className='form-group m-3' style={{width:"20%"}}>
                    <label className='form-label fs-4'>Day</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter day" defaultValue={datum.day}></input>
                </div>

                <div className='form-group m-3' style={{width:"30%"}}>
                    <label className='form-label fs-4'>Year</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter year" defaultValue={datum.year}></input>
                </div>

            </div>







                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Mobile Number</label>
                    <input type="text"className="form-control fs-4 p-5" placeholder="enter primary number" defaultValue={datum.primarynumber}></input>

                    <small style={{color:"#0497e0",fontSize:"12px"}}>Please input your correct mobile number.</small>
                </div>

                <div className='d-flex'>
                   
                    <div className='form-group m-3' style={{width:"60%"}}>
                    <label className='form-label fs-4'>Secondary Mobile</label>
                        <input type="text" className="form-control fs-4 p-5" placeholder="(optional)" defaultValue={datum.secondarynumber}></input>
                    </div>

                    <div className='form-group m-3' style={{width:"40%"}}>
                        <label className='form-label fs-4'>Landline</label>
                        <input type="text" className="form-control fs-4 p-5" placeholder="(optional)" defaultValue={datum.landline}></input>
                    </div>

                </div>


                <h1 className='fs-2 mt-5'>Address</h1>


                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Province</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter province" defaultValue={datum.province}></input>
                </div>

                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Town</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter town" defaultValue={datum.town}></input>
                </div>


            <div className='d-flex'>
                <div className='form-group m-3' style={{width:"70%"}}>
                    <label className='form-label fs-4'>Barangay</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter barangay" defaultValue={datum.barangay}></input>
                </div>
                <div className='form-group m-3 ' style={{width:"30%"}}>
                    <label className='form-label fs-4'>Zip Code</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter zipcode" defaultValue={datum.zipcode}></input>
                </div>
            
            </div>

                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Current Address</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter current address" defaultValue={datum.currentaddress}></input>

                    <small style={{color:"#0497e0",fontSize:"12px"}}>House #, Street, Subdivision, Brgy, City/Municipality</small><br></br>

                    <label className='mt-5 fs-2 text-center'><p className='text-center'>UPLOAD PHOTO</p></label>

                </div>




               
                <div className="form-group" style={{display:"flex",justifyContent:"center"}}>
                    
                            <div className='card mt-5'>
                                <div className='card-header' style={{backgroundColor:"#0497e0", color:"white"}}>
                                    <p className='text-center fs-2 p-4'>PHOTO OF FACE</p>
                                </div>
                                <div className='card-body p-5'>
                                   
                                        <div className='text-center fs-3 p-4'>
                                        Please upload latest photo of your face
                                        </div>
                                  
                                    <div className='card-body'>
                                        
                                    <input type="file" className="form-control text-center fs-3 mb-5" defaultValue={datum.image}></input>

                                    <div></div>

                                    </div>
                                </div>
                            </div>
                </div>


                <div className='form-group m-3'>
                    <button class="btn w-100 fs-2 p-4 mt-5 mb-5 sign-up" >SIGN UP</button>
                </div>


            </div>







            <div className='mt-5 mb-5'>

                <Footer />


            </div>

        </div>




    )
}

export default EditProfile;