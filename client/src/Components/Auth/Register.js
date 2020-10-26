import React, { useContext, useState } from 'react'
import AlertContext from '../../Context/Alert/alertContext'
import AuthContext from '../../Context/Auth/authContext'

const Register = () => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
   
   
    const { setAlert } = alertContext;
    const {register} = authContext;
 

const [user, setUser] = useState({
    name : '',
    email: '',
    password: '',
    password2: ''
});

const { name, email, password, password2} = user;

const onChange =e => setUser({ ...user, [e.target.name]: e.target.value})


const onSubmit = e => {
    e.preventDefault();
    if(name == ''  || email == '' || password == ''){
        setAlert('Please fill all the details', 'danger')
    }
    else if( password !== password2 ){
        setAlert('Password does not match','danger');
    }else{
        register({
            name,
            email,
             password
        })
    }
};


    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value = {name} onChange ={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value = {email} onChange ={onChange} required/>
                </div> 
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" value = {password} onChange ={onChange} required minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm password</label>
                    <input type="password" name="password2" value = {password2} onChange ={onChange} required 
                    minLength="6"/>
                </div>
                <input type="submit" value="register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    )
}

export  default Register;