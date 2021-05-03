import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios';



  


 class SignUp extends Component {

  
  
    render() {

      
        return (

            <form className="form-name">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input 
                    name="first_name"
                    type="text" 
                    className="form-control" 
                    placeholder="First name" 


                    />

                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input 
                    name="last_name"
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 

                    />
                </div>
                <div className="form-group">
                    <label>phone</label>
                    <input 
                    name="phone"
                    type="tel" 
                    className="form-control" 
                    placeholder="Enter phone"


                     />
                </div>
                <div className="form-group">
                    <label>cin</label>
                    <input 
                   name="cin"
                    type="text" 
                    className="form-control"
                     placeholder="Enter cin"
                     onChange={handleChange}


                      />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="email"
                    type="email"
                     className="form-control" 
                     placeholder="Enter email"

                     />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                    type="password" 
                    className="form-control"
 
                    placeholder="Enter password" />
                </div>

                <div className="form-group">
                  <select className="browser-default custom-select">
                    <option>select client </option>
                    <option value="admin"  name="role"  >Admin</option>
                    <option value="user" name="role" >Uesr</option>
                    <option value="technicin"  name="role" >Technicien</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
export default SignUp