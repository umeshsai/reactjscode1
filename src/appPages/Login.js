import React, { Component } from 'react';
import HomePage from './HomePage';
import { Link, Redirect,useHistory } from 'react-router-dom';

function Login () {
    let history = useHistory();
    
    
    const auth = () =>{
        let uname = document.getElementById('uname').value;
        let passwd = document.getElementById('passwd').value;
        if(uname && passwd)
        history.push('./homepage')
    }
        return (
            <div>
                <div>
                    <label>UserName</label>
                    <br></br>
                    <input  type='text' id='uname'  />
                </div>
                <div>
                    <label >Password</label>
                    <br></br>
                    <input type='password' id='passwd' />
                </div>
                <div>
                    <button onClick={auth}>Login</button>
                </div>
            </div>
        )
   
}

export default Login;