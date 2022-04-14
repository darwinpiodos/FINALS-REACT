import React from 'react';
import Logo from "../../src/mlg-logo.png";
import InfoCard from './InfoCard';
import{Link, useHistory} from 'react-router-dom';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import ProfilePage from '../ProfilePage';




function Content()
{
   

    
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();

    function logOut()
    {
        localStorage.clear();
        history.push('/')
    }

    function profile()
    {
      
        history.push('/')


    }



    return(

        <div className='container-fluid d-flex align-items-center p-4' style={{boxShadow:"1px 0px 4px #b3aead"}}>
            
            <div className='col-8'>
                <h3 className='fs-3 ms-5'>Profile</h3>
            </div>



            {                       
            localStorage.getItem('user-info') ?    
                      
            <div className='d-flex fs-3 col-4 align-items-center'>


                <div><i class="fa solid fa-bell ms-5"></i></div>
                <div className='ms-3'>|</div>
                <div className='ms-3 d-flex align-items-center justify-content-center'>{user.firstname} {user.middlename} {user.lastname}
                
                <Navbar  >
                                        
                                        <Nav>
                                            <NavDropdown  className="btn btn-primary" style={{backgroundImage:`url(${"http://localhost:8000/" + user.image})`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                    position:"relative",
                                                    width:30,
                                                    height:30,
                                                    borderRadius:"50%",
                                                    marginLeft:"15px",
                                                    cursor:"pointer"}}>
        
                        
        
                                            <NavDropdown.Item className="dropdown-item"onClick={logOut}>Logout</NavDropdown.Item>
        
                                            <NavDropdown.Item className="dropdown-item">Profile</NavDropdown.Item>
        
        
        
                                                    </NavDropdown>
        
                                                        
        
                                                        
                                        </Nav>
        
                                    </Navbar>


                </div>
             
                              
                        
                           
                       

            </div>

            :null  

                                    

            }






        </div>

       


    )


}


export default Content;