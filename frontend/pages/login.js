import React, { useState } from 'react';
import NavSection from "../components/nav";
import HeadSection from "../components/head";
import AuthService from '../services/AuthService';
import { STATUS_CODE } from '../utils/constants/systemSetting';
import { useRouter } from 'next/router';


function Login() {

  const [state, setState] = useState({})

  const router = useRouter();

  const authenticate = async(e) => {

    e.preventDefault()

    const resp = await AuthService.login(state);

    if (resp?.status === STATUS_CODE.SUCCESS){
      alert("Successfull")
      localStorage.setItem("status", "true")
      router.push("/")
    }

    else {
      alert("no")
    }
  }

  const handleInput = (input) => {
    setState({
      ...state,
      [input.target.name]: input.target.value
    })
  }


  return ( 
    <>
      <HeadSection/>
      <div data-spy="scroll" data-target="#site-nav" className="cover-bg">
        <NavSection/>
        <section className="login-form-section">
          <div className="form-wrapper">
            <form id="login_form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="username" name="username" className="form-control" id="username" aria-describedby="usernameHelp" onChange={handleInput} placeholder="Enter username"/>
                <small id="usernameHelp" className="form-text text-muted">We&lsquo;ll never share your username with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleInput} className="form-control" id="password" placeholder="Password"/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember</label>
              </div>
              <button type="button" className="btn btn-primary" onClick={authenticate}>Submit</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
