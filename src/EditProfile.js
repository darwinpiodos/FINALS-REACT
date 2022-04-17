import NavBar from './NavBar';
import React, {Component, useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import Footer from './Footer';
import './App.css';
import axios from 'axios';
class EditProfile extends Component
{

    state = {

            firstname: '',
            lastname: '',
            middlename: '',
            email: '',
            password: '',
            gender: '',
            month: '',
            day: '',
            year: '',
            primarynumber: '',
            secondarynumber: '',
            landline: '',
            province: '',
            town: '',
            barangay: '',
            zipcode: '',
            currentaddress: '',
            image: '',
    }
   
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

     async componentDidMount() {
        const stud_id= this.props.match.params.id;
        console.log(stud_id);
        const res= await axios.get(`http://localhost:8000/api/edit/${stud_id}`);
        if (res.data.status === 200)
        {
            this.setState({
                firstname: res.data.student.firstname,
                lastname: res.data.student.lastname,
                middlename: res.data.student.middlename,
                email: res.data.student.email,
                password: res.data.student.password,
                gender: res.data.student.gender,
                month: res.data.student.month,
                day: res.data.student.day,
                year: res.data.student.year,
                primarynumber: res.data.student.primarynumber,
                secondarynumber: res.data.student.secondarynumber,
                landline: res.data.student.landline,
                province: res.data.student.province,
                town: res.data.student.town,
                barangay: res.data.student.barangay,
                zipcode: res.data.student.zipcode,
                currentaddress: res.data.student.currentaddress,
                image: res.data.student.image,
            });
        }
    }



    updateUser = async  (e) => {
        e.preventDefault();

        const stud_id= this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update/${stud_id}`, this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({

                firstname: '',
                lastname: '',
                middlename: '',
                email: '',
                password: '',
                gender: '',
                month: '',
                day: '',
                year: '',
                primarynumber: '',
                secondarynumber: '',
                landline: '',
                province: '',
                town: '',
                barangay: '',
                zipcode: '',
                currentaddress: '',
                image: '',


            });
        }
    }


    render()
    {
         return(

            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                        Darwin Piodos
                    </div>
                    <div className='card-body'>
  
                        <form onSubmit={this.updateUser}>
                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>middlename</label>
                                <input type="text" name="middlename" onChange={this.handleInput} value={this.state.middlename} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>lastname</label>
                                <input type="text" name="lastname" onChange={this.handleInput} value={this.state.lastname} className="form-control" />
                            </div>

                            {/* <div className='form-group mb-3'>
                                <label>password</label>
                                <input type="password" name="password" onChange={this.handleInput} value={this.state.password} className="form-control" />
                            </div> */}

                            <div className='form-group mb-3'>
                                <label>gender</label>
                                <input type="text" name="gender" onChange={this.handleInput} value={this.state.gender} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>month</label>
                                <input type="text" name="month" onChange={this.handleInput} value={this.state.month} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>day</label>
                                <input type="text" name="day" onChange={this.handleInput} value={this.state.day} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>year</label>
                                <input type="text" name="year" onChange={this.handleInput} value={this.state.year} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>primarynumber</label>
                                <input type="text" name="primarynumber" onChange={this.handleInput} value={this.state.primarynumber} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>secondarynumber</label>
                                <input type="text" name="secondarynumber" onChange={this.handleInput} value={this.state.secondarynumber} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>landline</label>
                                <input type="text" name="landline" onChange={this.handleInput} value={this.state.landline} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>province</label>
                                <input type="text" name="province" onChange={this.handleInput} value={this.state.province} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>town</label>
                                <input type="text" name="town" onChange={this.handleInput} value={this.state.town} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>barangay</label>
                                <input type="text" name="barangay" onChange={this.handleInput} value={this.state.barangay} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>zipcode</label>
                                <input type="text" name="zipcode" onChange={this.handleInput} value={this.state.zipcode} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>currentaddress</label>
                                <input type="text" name="currentaddress" onChange={this.handleInput} value={this.state.currentaddress} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>image</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.image} className="form-control" />
                            </div>


                            <div className='form-group'>
                                <button type="submit" className='btn btn-primary'>Update</button>
                            </div>

                            <div className='form-group'>
                                <input type="submit" onSubmit={this.updateUser} />
                            </div>



                        </form>


                    </div>
                </div>
            </div>
         )
    }



}

export default EditProfile;