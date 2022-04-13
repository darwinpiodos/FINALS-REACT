import userEvent from '@testing-library/user-event';
import{Link, useHistory} from 'react-router-dom';
import './App.css';

import Logo from "../src/mlg-logo.png";
function NavBar(){



    

    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();

    // function logOut()
    // {
    //     localStorage.clear();
    //     history.push('/register')
    // }

    // function profile()
    // {
      
    //     history.push('/add')




    return(
        <div style={{backgroundColor:"#0497e0"}} className=" container-fluid d-flex align-items-center p-3">
            
                <div className="container col-lg-6 d-flex align-items-center ">
                    <div className="logo-mlgcl-png ms-5 m-0">
                   
                        <img style={{width:40, marginLeft:100}}src={Logo} />

                    </div>
                    <div className="logo-mlgcl-name ms-3">
                        <p style={{fontSize:22,marginTop:5,color:"white",lineHeight:"20px", fontWeight:"bold"}}>MLGCL <br></br><span style={{fontSize:16}}>COVID-19 CONTACT TRACING SYSTEM</span></p>
                       
                    </div>
                </div>


                <div className="container col-lg-6 piodos-left">
                    
                        {
                            localStorage.getItem('user-info') ?
                            <>

                                        <Link to="/" className='links-menu' style={{fontSize:18}}>Product List </Link>
                             
                              
                                        <Link to="/add" className='links-menu' style={{fontSize:18}}>Add Products</Link>
                                         
                                        <Link to="/" className='links-menu' style={{fontSize:18}}>Update Products</Link>
                                          
                                        </>
                                        :
                                        <>
                                          
                                            <Link to="/login" className='links-menu' style={{fontSize:18}}>Login</Link>
                                         
                                            <Link to="/register" className='links-menu' style={{fontSize:18}}>Register</Link>
                                          
                            </>

                        }   
                 
                </div>
           
        </div>
    )
}

export default NavBar;