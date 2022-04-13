import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';


function UserList()
{

    const [data,setData]=useState([]);
    useEffect (  ()=>{
       getData();
    },[])
   

    async function deleteOperation(id)
    {
        let result= await fetch("http://localhost:8000/api/delete/" +id,{
            method:'DELETE'
        });

        result = await  result .json();
        console.warn(result);
        getData(); 
    }


    async function getData(){
        let result= await fetch("http://localhost:8000/api/list");
        result= await result.json();
        setData(result)

    }

    return(
        
    
            <div className='col full-width'>
                    <NavBar/>
                <h1>Product List</h1>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Product ID #</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {
                            data.map((item)=>
                            <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.firstname}</td>
                            <td>{item.middlename}</td>
                            <td>{item.lastname}</td>
                            <td>{item.image}</td>
                            <td><img style={{width:100,height:100}} src={"http://localhost:8000/" + item.image} /></td>

                            <td>
                                <button onClick={()=>deleteOperation(item.id)} className='btn btn-danger'>Delete</button>

                                <Link to ={"update/" + item.id}>
                                    <button className=' btn btn-primary'>Edit</button>
                                </Link>

                            </td>

                            
                        

                                
                            </tr>

                            
                            ) 
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>  
   
    )
}

export default UserList;