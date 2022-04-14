import React from 'react';
import Logo from "../../src/mlg-logo.png";
import{Link, useHistory} from 'react-router-dom';
import '../App.css';

function Sidebar()
{

    return(

        <div className=' m-0' >

            <div className='d-flex align-items-center p-5 pb-0 mt-2 mb-0'>
                <div className='logo'>
                    <img style={{width:40}}src={Logo} />
                </div>
                <div className='mlg-name ms-3'>
                    <h4 className='fs-3 fw-bold text-light'>MLGCL<br></br><span className='fs-5 fw-bold text-light'>COVID-19 CONTACT TRACING SYSTEM</span></h4>
                </div>
            </div>

            <hr></hr>

            <div className=' m-0'>

                <div className='fs-3 p-3 background-color-text' ><i class="fa brands fa-windows me-3 ms-4 "></i>Dashboard</div>

                <div className='fs-3 p-3 bg-link background-color-text  '><i class="fa solid fa-user me-3 ms-4"></i>Profile</div>
                <div className=' fs-3 p-3 background-color-text'><i class="fa solid fa-wrench me-3 ms-4"></i>Settings</div>
                
                <Link to="/list">
                <div className='fs-3 p-3 background-color-text'><i class="fa solid fa-database me-3 ms-4"></i>User List</div>
                </Link>

            </div>
        </div>
    )


}


export default Sidebar;