import NavBar from './NavBar';
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

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
            <div className='col-sm-6 offset-sm-3'>
                <h1>Register</h1>

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
                        
                </section>





                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control p-5 fs-4" placeholder="enter password"></input>
                       
                </section>



                <section className='form-group m-3'>

                    
                    <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control" placeholder="enter gender"></input>

                    

                </section>

                

                <div className='form-group m-3'>
                    <input type="text" value={month} onChange={(e)=>setMonth(e.target.value)} className="form-control" placeholder="enter month"></input>
                </div>

                <div className='form-group m-3'>
                    <input type="text" value={day} onChange={(e)=>setDay(e.target.value)} className="form-control" placeholder="enter day"></input>
                </div>

                <div className='form-group m-3'>
                    <input type="text" value={year} onChange={(e)=>setYear(e.target.value)} className="form-control" placeholder="enter year"></input>
                </div>

                <div className='form-group m-3'>
                    <input type="text" value={primarynumber} onChange={(e)=>setPrimary(e.target.value)} className="form-control fs-4 p-5" placeholder="enter primary number"></input>
                    <small style={{color:"#0497e0",fontSize:"10px"}}>Please input your correct mobile number.</small>
                </div>

                <div className='d-flex'>

                    <div className='form-group m-3' style={{width:"60%"}}>
                        <input type="text" value={secondarynumber} onChange={(e)=>setSecondary(e.target.value)} className="form-control fs-4 p-5" placeholder="enter secondary number"></input>
                    </div>

                    <div className='form-group m-3' style={{width:"40%"}}>
                        <input type="text" value={landline} onChange={(e)=>setLandline(e.target.value)} className="form-control fs-4 p-5" placeholder="enter landline"></input>
                    </div>

                </div>




                <div className='form-group m-3'>
                    <input type="text" value={province} onChange={(e)=>setProvince(e.target.value)} className="form-control" placeholder="enter province"></input>
                </div>

                <div className='form-group m-3'>
                    <input type="text" value={town} onChange={(e)=>setTown(e.target.value)} className="form-control" placeholder="enter town"></input>
                </div>

                <div className='form-group m-3'>
                    <input type="text" value={barangay} onChange={(e)=>setBarangay(e.target.value)} className="form-control" placeholder="enter barangay"></input>
                </div>
                 <div className='form-group m-3 '>
                            <input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} className="form-control fs-4 p-5" placeholder="enter zipcode"></input>
                </div>

                <div className='form-group m-3'>
                            <input type="text" value={currentaddress} onChange={(e)=>setCurrent(e.target.value)} className="form-control fs-4 p-5" placeholder="enter current address"></input>
                </div>

                <div className="form-group" style={{display:"flex",justifyContent:"center"}}>
                            <div className='card'>
                                <div className='card-header'>
                                    <p className='text-center fs-2 p-4'>PHOTO OF FACE</p>
                                </div>
                                <div className='card-body p-5'>
                                   
                                        <div className='text-center fs-3 p-4'>
                                        Please upload latest photo of your face
                                        </div>
                                  
                                    <div className='card-body'>
                                        
                                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-control text-center"></input>

                                    </div>
                                </div>
                            </div>
                </div>


                <div className='form-group m-3'>
                    <button class="btn w-100 fs-4 p-4" onClick={signUp}style={{backgroundColor:"#0497e0", color:"white"}}>Sign Up</button>
                </div>


            </div>
        </div>




    )
}

export default Register;