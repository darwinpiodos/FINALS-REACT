import React from 'react';
import Logo from "../../src/mlg-logo.png";


function Content()
{

    return(

        <div className='container-fluid d-flex align-items-center p-4' style={{boxShadow:"1px 0px 4px #b3aead"}}>
            
            <div className='col-8'>
                <h3 className='fs-3 ms-5'>Dashboard</h3>
            </div>
            <div className='d-flex fs-3 col-4'>
                <div><i class="fa solid fa-bell ms-5"></i></div>
                <div className='ms-3'>|</div>
                <div className='ms-3'>Darwin Piodos</div>
                <div className='ms-4'><img style={{width:30}}src={Logo} />
                </div>
            </div>
        </div>
    )


}


export default Content;