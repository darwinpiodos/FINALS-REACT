import NavBar from './NavBar';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Footer from './Footer';
import './App.css';


function Register()
{

    useState(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])
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


    const history=useHistory();



    async function signUp()
    {
        console.warn(firstname,
        lastname,
        middlename,
        email,
        password,
        gender,
        month,
        day,
        year,
        primarynumber,
        secondarynumber,
        landline,
        province,
        town,
        barangay,
        zipcode,
        currentaddress,
        image
        )
        const formData = new FormData();
        formData.append('image',image);
        formData.append('firstname',firstname);
        formData.append('middlename',middlename);
        formData.append('lastname',lastname);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('gender',gender);
        formData.append('month',month);
        formData.append('day',day);
        formData.append('year',year);
        formData.append('primarynumber',primarynumber);
        formData.append('secondarynumber',secondarynumber);
        formData.append('landline',landline);
        formData.append('province',province);
        formData.append('town',town);
        formData.append('barangay',barangay);
        formData.append('zipcode',zipcode);
        formData.append('currentaddress',currentaddress);
      
        ;
        let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:formData
        });


        
        


        console.warn(email, password)
        let item={email,password};
        let res= await fetch ("http://localhost:8000/api/login ",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            
            body:JSON.stringify(item)
        });

        res = await res.json();

        localStorage.setItem("user-info",JSON.stringify(res))
        history.push("/profile")


         
    }
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
                            <input type="text" value={firstname} onChange={(e)=>setfirstName(e.target.value)} className="form-control fs-4 p-5" placeholder="enter firstname" required ></input>
                        </div>

                        <div className='form-group m-3' style={{width:"50%"}}>
                        <label className='form-label fs-4'>Middle Name</label>
                            <input type="text" value={middlename} onChange={(e)=>setmiddleName(e.target.value)} className="form-control fs-4 p-5" placeholder="enter middlename (optional)"></input>
                        </div>

                    </section>



                    
                <section className='form-group m-3'>
                    <label className='form-label fs-4 '>Last Name</label>
                    <input type="text" value={lastname} onChange={(e)=>setlastName(e.target.value)} className="form-control fs-4 p-5" placeholder="enter lastname"></input>
                        
                </section>



                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="fs-4 form-control p-5" placeholder="enter email"></input>
                    <small style={{color:"#0497e0",fontSize:"12px"}}>Make sure your email address is correct.</small>
               
                        
                </section>





                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control p-5 fs-4" placeholder="enter password"></input>
                       
                </section>



                <section className='form-group m-3 mb-5 pb-3'>

                    <label className='form-label fs-4'>Gender</label>
                    <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control fs-4 p-5" placeholder="enter gender"></input>

                    

                </section>

                
                <h1 className='fs-2 mt-5'>Birth Date</h1>

              

            <div className='d-flex'>
                <div className='form-group m-3' style={{width:"50%"}}>
                    <label className='form-label fs-4'>Month</label>
                    <input type="text" value={month} onChange={(e)=>setMonth(e.target.value)} className="form-control fs-4 p-5" placeholder="enter month"></input>
                </div>

                <div className='form-group m-3' style={{width:"20%"}}>
                    <label className='form-label fs-4'>Day</label>
                    <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} className="form-control fs-4 p-5" placeholder="enter day"></input>
                </div>

                <div className='form-group m-3' style={{width:"30%"}}>
                    <label className='form-label fs-4'>Year</label>
                    <input type="text" value={year} onChange={(e)=>setYear(e.target.value)} className="form-control fs-4 p-5" placeholder="enter year"></input>
                </div>

            </div>







                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Mobile Number</label>
                    <input type="text" value={primarynumber} onChange={(e)=>setPrimary(e.target.value)} className="form-control fs-4 p-5" placeholder="enter primary number"></input>

                    <small style={{color:"#0497e0",fontSize:"12px"}}>Please input your correct mobile number.</small>
                </div>

                <div className='d-flex'>
                   
                    <div className='form-group m-3' style={{width:"60%"}}>
                    <label className='form-label fs-4'>Secondary Mobile</label>
                        <input type="text" value={secondarynumber} onChange={(e)=>setSecondary(e.target.value)} className="form-control fs-4 p-5" placeholder="(optional)"></input>
                    </div>

                    <div className='form-group m-3' style={{width:"40%"}}>
                        <label className='form-label fs-4'>Landline</label>
                        <input type="text" value={landline} onChange={(e)=>setLandline(e.target.value)} className="form-control fs-4 p-5" placeholder="(optional)"></input>
                    </div>

                </div>


                <h1 className='fs-2 mt-5'>Address</h1>


                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Province</label>
                    <input type="text" value={province} onChange={(e)=>setProvince(e.target.value)} className="form-control fs-4 p-5" placeholder="enter province"></input>
                </div>

                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Town</label>
                    <input type="text" value={town} onChange={(e)=>setTown(e.target.value)} className="form-control fs-4 p-5" placeholder="enter town"></input>
                </div>


            <div className='d-flex'>
                <div className='form-group m-3' style={{width:"70%"}}>
                    <label className='form-label fs-4'>Barangay</label>
                    <input type="text" value={barangay} onChange={(e)=>setBarangay(e.target.value)} className="form-control fs-4 p-5" placeholder="enter barangay"></input>
                </div>
                <div className='form-group m-3 ' style={{width:"30%"}}>
                    <label className='form-label fs-4'>Zip Code</label>
                    <input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} className="form-control fs-4 p-5" placeholder="enter zipcode"></input>
                </div>
            
            </div>

                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Current Address</label>
                    <input type="text" value={currentaddress} onChange={(e)=>setCurrent(e.target.value)} className="form-control fs-4 p-5" placeholder="enter current address"></input>

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
                                        
                                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control text-center fs-3 mb-5"></input>

                                    </div>
                                </div>
                            </div>
                </div>


                <div className='form-group m-3'>
                    <button class="btn w-100 fs-2 p-4 mt-5 mb-5 sign-up" onClick={signUp}>SIGN UP</button>
                </div>


            </div>







            <div className='mt-5 mb-5'>

                <Footer />


            </div>
        </div>




    )
}

export default Register;