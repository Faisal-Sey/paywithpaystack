
import HeadSection from "../components/head"
import NavSection from "../components/nav"
import Link from "next/link"


export default function Home() {
  return (
    <>
      <HeadSection/>
      <div data-spy="scroll" data-target="#site-nav">
        <NavSection/>
        <header id="site-header" className="site-header valign-center"> 
            <div className="intro">

                <h2>Payment Platform</h2>
                
                <h1>With Paystack Integration</h1>
                
                <Link href="/dashboard">
                  <a className="btn btn-white" href="login.html">Pay Now</a>
                </Link>
            </div>
        </header>
      </div>
    </>
  )
}
