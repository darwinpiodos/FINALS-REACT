import NavBar from './NavBar';
import React from 'react';
import Footer from './Footer';
import Sidebar from './profilepagecomponents/Sidebar';
import Content from './profilepagecomponents/Content';
import InfoCard from './profilepagecomponents/InfoCard';
import {useLocation} from 'react-router-dom';



function ProfilePage()
{

    



    return(
        <div className='container-fluid position d-flex'  style={{height:"100%"}}>
            
                <div id='sidebar' className="piodos-navigation-items col-2" style={{height:"100%",backgroundColor:"#0497e0",  boxShadow:"3px 0px 6px #b3aead" , zIndex:2}}> 
                    <div className='sidebar ' >
                        <Sidebar />
                    </div>
                </div>

                <div className="piodos-navigation-items col-10" style={{height:"100%",backgroundColor:"white"}}>
                    <div className='rightcontent 'style={{backgroundColor:"whitesmoke"}} >
                        <Content />
                    </div>

                    <div className='main-content'>
                        <InfoCard />
                    </div>
                </div>

        </div>

    )
}

export default ProfilePage;