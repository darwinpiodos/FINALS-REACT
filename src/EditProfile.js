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

        const res = await axios.post('http://localhost:8000/api/update/${user_id}')
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
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.lastname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>

                            <div className='form-group mb-3'>
                                <label>firstname</label>
                                <input type="text" name="firstname" onChange={this.handleInput} value={this.state.firstname} className="form-control" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
         )
    }



}

export default EditProfile;