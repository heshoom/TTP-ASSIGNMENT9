import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Debits() {
  const [debits, setDebits] = useState([""]);
  const [submittedDebits, setSubmittedDebits] = useState([]);
  

  const handleSubmit = (event) => {
   event.preventDefault();
   setSubmittedDebits([...submittedDebits, debits]);
    console.log('Debit value:', debits);
  }

  const handleDebitChange = (event) => {
    setDebits(event.target.value);
  };
  useEffect(() => {
    async function fetchDebits() {
      try {
        const response = await axios.get("https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits");
        setDebits(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDebits();
  }, []);

  return (
    <>
      <h1>Debits</h1>
      Welcome to the Debits page!
      <h2>Debits Balance: {submittedDebits.reduce((total, amount) => total + parseFloat(amount), 0)}</h2>
      {console.log(debits)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="debit">Debit</label>
        <br/>
        <input id="debit" type="text" placeholder='Type Amount' value={debits ?? ''} onChange={handleDebitChange}/>
        <button className="btn">Add</button>
      </form>
    </>
  );
}

export default Debits;
