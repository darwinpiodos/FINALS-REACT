import NavBar from './NavBar';
import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Footer from './Footer';
import './App.css';
import axios from 'axios';



function EditProfile(props)
{  
     
    const [datum,setDatas]=useState([])
    console.warn("props",props.match.params.id)

    const firstname=datum.firstname;
    const middlename=datum.middlename;
    const lastname=datum.lastname;
    const email=datum.email;
    const password=datum.password;
    const gender=datum.gender;
    const month=datum.month;
    const day=datum.day;
    const year=datum.year;
    const primarynumber=datum.primarynumber;
    const secondarynumber=datum.secondarynumber;
    const landline=datum.landline;
    const province=datum.province;
    const town=datum.town;
    const barangay=datum.barangay;
    const zipcode=datum.zipcode;
    const currentaddress=datum.currentaddress;
    const image=datum.image;





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
                            <input type="text" className="form-control fs-4 p-5" placeholder="enter firstname"  defaultValue={firstname} name={firstname} id={firstname} ></input>
                        </div>

                        <div className='form-group m-3' style={{width:"50%"}}>
                        <label className='form-label fs-4'>Middle Name</label>
                            <input type="text" className="form-control fs-4 p-5" placeholder="enter middlename (optional)" defaultValue={middlename} name={middlename} id={middlename} ></input>
                        </div>

                    </section>



                    
                <section className='form-group m-3'>
                    <label className='form-label fs-4 '>Last Name</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter lastname" defaultValue={lastname} name={lastname} id={lastname} ></input>
                        
                </section>


                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Email</label>
                    <input type="text" className="fs-4 form-control p-5" placeholder="enter email" name={email}id={email}  defaultValue={email}></input>
                    <small style={{color:"#0497e0",fontSize:"12px"}}>Make sure your email address is correct.</small>
               
                        
                </section>





                <section className='form-group m-3'>
                    <label className='form-label fs-4'>Password</label>
                    <input type="password" className="form-control p-5 fs-4" placeholder="enter password" defaultValue={password} name={password} id={password} ></input>
                       
                </section>



                <section className='form-group m-3 mb-5 pb-3'>

                    <label className='form-label fs-4'>Gender</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter gender" defaultValue={gender} name={gender} id={gender} ></input>

                    

                </section>

                
                <h1 className='fs-2 mt-5'>Birth Date</h1>

              

            <div className='d-flex'>
                <div className='form-group m-3' style={{width:"50%"}}>
                    <label className='form-label fs-4'>Month</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter month" defaultValue={month} name={month} id={month} ></input>
                </div>

                <div className='form-group m-3' style={{width:"20%"}}>
                    <label className='form-label fs-4'>Day</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter day" defaultValue={day} name={day} id={day} ></input>
                </div>

                <div className='form-group m-3' style={{width:"30%"}}>
                    <label className='form-label fs-4'>Year</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter year" defaultValue={year} name={year} id={year}></input>
                </div>

            </div>







                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Mobile Number</label>
                    <input type="text"className="form-control fs-4 p-5" placeholder="enter primary number" defaultValue={primarynumber} name={primarynumber} id={primarynumber} ></input>

                    <small style={{color:"#0497e0",fontSize:"12px"}}>Please input your correct mobile number.</small>
                </div>

                <div className='d-flex'>
                   
                    <div className='form-group m-3' style={{width:"60%"}}>
                    <label className='form-label fs-4'>Secondary Mobile</label>
                        <input type="text" className="form-control fs-4 p-5" placeholder="(optional)" defaultValue={secondarynumber} name={secondarynumber} id={secondarynumber} ></input>
                    </div>

                    <div className='form-group m-3' style={{width:"40%"}}>
                        <label className='form-label fs-4'>Landline</label>
                        <input type="text" className="form-control fs-4 p-5" placeholder="(optional)" defaultValue={landline} name={landline} id={landline} ></input>
                    </div>

                </div>


                <h1 className='fs-2 mt-5'>Address</h1>


                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Province</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter province" defaultValue={province} name={province} id={province} ></input>
                </div>

                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Town</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter town" defaultValue={town} name={town} id={town} ></input>
                </div>


            <div className='d-flex'>
                <div className='form-group m-3' style={{width:"70%"}}>
                    <label className='form-label fs-4'>Barangay</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter barangay" defaultValue={barangay} name={barangay} id={barangay} ></input>
                </div>
                <div className='form-group m-3 ' style={{width:"30%"}}>
                    <label className='form-label fs-4'>Zip Code</label>
                    <input type="text" className="form-control fs-4 p-5" placeholder="enter zipcode" defaultValue={zipcode} name={zipcode} id={zipcode} ></input>
                </div>
            
            </div>

                <div className='form-group m-3'>
                    <label className='form-label fs-4'>Current Address</label>
                    <input type="text"  className="form-control fs-4 p-5" placeholder="enter current address" defaultValue={currentaddress} name={currentaddress} id={currentaddress}></input>

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
                                        
                                    <input type="file" className="form-control text-center fs-3 mb-5" defaultValue={image} name={image}   id={image} ></input>

                                    <div style={{ backgroundImage:`url(${"http://localhost:8000/" + datum.image})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        position:"relative",
                                        width:120,
                                        height:120,
                                        margin:"0 auto"}}>
                                    </div>

                                    </div>
                                </div>
                            </div>
                </div>


                <div className='form-group m-3'>
                    <button  type="button" class="btn w-100 fs-2 p-4 mt-5 mb-5 sign-up" >UPDATE</button>
                </div>
              
            </div>







            <div className='mt-5 mb-5'>

                <Footer />


            </div>

        </div>




    )
}

export default EditProfile;






// updateUser = async (e) =>


// {
//     e.preventDefault();
//     const user_id = this.props.match.params.id;
//     const res= await axios.put(`http://localhost:8000/api/update/${user_id}`,this.state);

//     if(res.data.status === 200)
//     {
//         console.log(res.data.message);
//         this.setState({


//     firstname: '',
//     lastname: '',
//     middlename: '',
//     email: '',
//     password: '',
//     gender: '',
//     month: '',
//     day: '',
//     year: '',
//     primarynumber: '',
//     secondarynumber: '',
//     landline: '',
//     province: '',
//     town: '',
//     barangay: '',
//     zipcode: '',
//     currentaddress: '',
//     image: '',


//         });
//     }
// }











    // const updateUser =(e) =>
    // {
    //     e.preventDefault();
       
    //     const user_id = props.match.params.id
        
    //     const formData = new FormData();
    //     formData.append('image',image);
    //     formData.append('firstname',firstname);
    //     formData.append('middlename',middlename);
    //     formData.append('lastname',lastname);
    //     formData.append('email',email);
    //     formData.append('password',password);
    //     formData.append('gender',gender);
    //     formData.append('month',month);
    //     formData.append('day',day);
    //     formData.append('year',year);
    //     formData.append('primarynumber',primarynumber);
    //     formData.append('secondarynumber',secondarynumber);
    //     formData.append('landline',landline);
    //     formData.append('province',province);
    //     formData.append('town',town);
    //     formData.append('barangay',barangay);
    //     formData.append('zipcode',zipcode);
    //     formData.append('currentaddress',currentaddress);
     
        
    //     // ;
    //     // let result = fetch("http://localhost:8000/api/register",{
    //     //     method:'POST',
    //     //     body:formData
    //     // });


    //     let item={firstname,
    //         lastname,
    //         middlename,
    //         email,
    //         password,
    //         gender,
    //         month,
    //         day,
    //         year,
    //         primarynumber,
    //         secondarynumber,
    //         landline,
    //         province,
    //         town,
    //         barangay,
    //         zipcode,
    //         currentaddress,
    //         image}

    //         console.warn("item", item)
    //         fetch (`http://localhost:8000/api/update/${user_id}`,{
    //             method:'PUT',
    //             headers:{
    //             "Content-Type":"application/json",
    //             "Accept":'application/json'
    //             },

    //             body:JSON.stringify(item)
    //         }).then((result) =>
    //         {
    //            result.json().then((resp) =>

    //            {
    //            console.warn(resp)
    //            getData()
               
    //            history.push("/profile");
    //            })
    //         })


    // }
    


    // async function updateUser()
    // {


    // const user_id = props.match.params.id
    // console.warn(firstname,
    //     lastname,
    //     middlename,
    //     email,
    //     password,
    //     gender,
    //     month,
    //     day,
    //     year,
    //     primarynumber,
    //     secondarynumber,
    //     landline,
    //     province,
    //     town,
    //     barangay,
    //     zipcode,
    //     currentaddress,
    //     image
    //     )
    //     const formData = new FormData();
    //     formData.append('image',image);
    //     formData.append('firstname',firstname);
    //     formData.append('middlename',middlename);
    //     formData.append('lastname',lastname);
    //     formData.append('email',email);
    //     formData.append('password',password);
    //     formData.append('gender',gender);
    //     formData.append('month',month);
    //     formData.append('day',day);
    //     formData.append('year',year);
    //     formData.append('primarynumber',primarynumber);
    //     formData.append('secondarynumber',secondarynumber);
    //     formData.append('landline',landline);
    //     formData.append('province',province);
    //     formData.append('town',town);
    //     formData.append('barangay',barangay);
    //     formData.append('zipcode',zipcode);
    //     formData.append('currentaddress',currentaddress);
      
    //     ;
    //     let result = await fetch("http://localhost:8000/api/update" + user_id,{
    //         method:'PUT',
    //         body:formData,
    //         headers:{
    //                         "Content-Type":"application/json",
    //                         "Accept":'application/json'
    //                         },
    //     });

 
        
    // }
  


