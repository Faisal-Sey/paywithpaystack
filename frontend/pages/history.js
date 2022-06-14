import React, { useRef, useEffect } from 'react';
import HeadSection from "../components/head";
import NavSection from "../components/nav";
import PaymentService from '../services/PaymentService';
import { STATUS_CODE } from '../utils/constants/systemSetting';


function PaymentHistory() {

  const state = useRef([]);

  useEffect(() => {
    let run = true;

    async function fetchData(){
      if (run) {
        const resp = await PaymentService.payments({});
        if (resp?.status === STATUS_CODE.SUCCESS) {
          state.current = resp.data
        }
      }
    }

    fetchData();

    return () => {
      run = false
    }
  }, [])
  

  return ( 
    <>
      <HeadSection/>
      <div data-spy="scroll" data-target="#site-nav" className="cover-bg">
        <NavSection/>
        <section className="history-table-section">
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Payment Channel</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Number</th>
                </tr>
              </thead>
              <tbody>
                {state.current.map((item, index) => 
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.payment_channel}</td>
                  <td>{item.amount}</td>
                  <td>{item.number}</td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default PaymentHistory;