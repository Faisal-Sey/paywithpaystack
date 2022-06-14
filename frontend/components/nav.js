import Link from "next/link";
import { useState } from "react";


function NavSection() {

    let state = false

    if (typeof window != "undefined") {
        if(localStorage.getItem("status")) {state = localStorage.getItem("status")} 
    }


  return ( 
    <nav id="site-nav" className="navbar navbar-fixed-top navbar-custom">
      <div className="container">
          <div className="navbar-header">

              <div className="site-branding">
                  <a className="logo" href="index.html">
                      
                      <img src="/images/logo.png" alt="Logo"/>

                      Payment Platform
                  </a>
              </div>

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-items" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>

          </div>

          <div className="collapse navbar-collapse" id="navbar-items">
              <ul className="nav navbar-nav navbar-right">
                
                  <Link href="/" passHref>
                    <li className="active"><a data-scroll href="index.html">Home</a></li>
                  </Link>
                  <Link href="/login" passHref>
                    <li><a data-scroll href="login.html" style={{display: state ? "none" : "block"}}>Login</a></li>   
                  </Link>           
                  <Link href="/dashboard" passHref>
                    <li><a data-scroll href="dashboard.html">Dashboard</a></li>  
                  </Link> 
                  <Link href="/history" passHref>
                    <li><a data-scroll href="dashboard.html" style={{display: state ? "block" : "none"}}>History</a></li> 
                  </Link>
              </ul>
          </div>
      </div>
    </nav>
  );
}

export default NavSection;