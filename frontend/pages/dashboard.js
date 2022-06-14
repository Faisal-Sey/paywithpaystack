import React, { useState } from 'react';
import NavSection from "../components/nav";
import HeadSection from "../components/head";
import AuthService from '../services/AuthService';
import { pk, STATUS_CODE } from '../utils/constants/systemSetting';
import { useRouter } from 'next/router';
import PaymentService from '../services/PaymentService';


function Dashboard() {

  const [state, setState] = useState({})

  const router = useRouter();


  const handleInput = (input) => {
    setState({
      ...state,
      [input.target.name]: input.target.value
    })
  }

  if (typeof window != "undefined") {
    if(!localStorage.getItem("status")) {router.push("/")} 
  }

  const payWithPaystack = (e) => {
    e.preventDefault();
    let handler = PaystackPop.setup({
      key: pk, // Replace with your public key
      email: state.email,
      amount: state.amount * 100,
      currency: "GHS",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      // label: "Optional string that replaces customer email"
      onClose: function(){
        alert('Window closed.');
      },
      callback: async function(response){
        setState({...state, reference: response.reference})
        const resp = await PaymentService.pay(state);
        if (resp?.status === STATUS_CODE.SUCCESS){
          alert("Successfull")
        }
        else {
          alert("error")
        }

      }
    });
    handler.openIframe();
  }


  return (
    <>
      <HeadSection/>
      <div data-spy="scroll" data-target="#site-nav" className="cover-bg">
        <NavSection/>
        <section className="pay-form-section">
          <div className="form-wrapper">
            <form id="pay_form">
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input type="fname" name="fname" className="form-control" id="fname"onChange={handleInput} placeholder="Enter first name"/>
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input type="lname" name="lname" className="form-control" id="lname"onChange={handleInput} placeholder="Enter last name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" id="email"onChange={handleInput} placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="amount" name="amount" className="form-control" id="amount" aria-describedby="amountHelp" onChange={handleInput} placeholder="Enter amount"/>
                <small id="amountHelp" className="form-text text-muted">Amount is in GHC (Ghana cedis)</small>
              </div>
              <button type="button" className="btn btn-primary" onClick={payWithPaystack}>Pay Now</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
  
}

export default Dashboard;
