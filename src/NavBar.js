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
        <div className=" container-fluid bg-primary d-flex align-items-center p-2">
            
                <div className="container col-lg-6 d-flex align-items-center ">
                    <div className="logo-mlgcl-png ms-5 m-0">
                   
                        <img style={{width:40, marginLeft:100}}src={Logo} />

                    </div>
                    <div className="logo-mlgcl-name ms-3">
                        <p style={{fontSize:22,marginTop:5}}>MLGCL <br></br><span style={{fontSize:18}}>COVID-19 CONTACT TRACING SYSTEM</span></p>
                       
                    </div>
                </div>


                <div className="container col-lg-6 piodos-left">
                    
                        {
                            localStorage.getItem('user-info') ?
                            <>

                                        <Link to="/">Product List </Link>
                             
                              
                                        <Link to="/add">Add Products</Link>
                                         
                                        <Link to="/">Update Products</Link>
                                          
                                        </>
                                        :
                                        <>
                                          
                                            <Link to="/login" className='links-menu'>Login</Link>
                                         
                                            <Link to="/register" className='links-menu'>Register</Link>
                                          
                            </>

                        }   
                 
                </div>
           
        </div>
    )
}

export default NavBar;