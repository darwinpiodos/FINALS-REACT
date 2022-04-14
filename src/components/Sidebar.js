import React from 'react';
import{Link, useHistory} from 'react-router-dom';
import Logo from "../../src/mlg-logo.png";


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

                <div className='text-light fs-3 bg-secondary p-3' ><i class="fa brands fa-windows me-3 ms-4"></i>Dashboard</div>

                <div className='text-light fs-3 p-3'><i class="fa solid fa-user me-3 ms-4"></i>Profile</div>
                <div className='text-light fs-3 p-3'><i class="fa solid fa-wrench me-3 ms-4"></i>Settings</div>

                
                <div className='text-light fs-3 p-3'><i class="fa solid fa-database me-3 ms-4"></i>User List</div>


            </div>
        </div>
    )


}


export default Sidebar;