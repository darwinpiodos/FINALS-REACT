import {useHistory} from 'react-router-dom'; 
import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
function Login()
{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push("/add")
        }
    },[])




    async function login()
    {
        console.warn(email, password)
        let item={email,password};
        let result= await fetch ("http://localhost:8000/api/login ",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            
            body:JSON.stringify(item)
        });

        result = await result.json();

        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/profile")
    }





    return(
      
        <div className='row'>
              <NavBar/>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Login</h1>
                <div className='form-group'>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" className='form-control fs-4 p-4'></input>
                </div>

                <div className='form-group'>
                    <input type="password"  onChange={(e)=>setPassword(e.target.value)}  placeholder="enter password" className='form-control fs-4 p-4'></input>
                </div>

                <div className='form-group'>
                    <button onClick={login} className='btn btn-primary w-100 fs-3 p-4'>Login</button>
                </div>


            </div>
        </div>
    )
}

export default Login