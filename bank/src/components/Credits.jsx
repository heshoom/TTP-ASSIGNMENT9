import React, { useEffect, useState } from "react";
import axios from "axios";

function Credits() {
  const [Credits, setCredits] = useState([""]);
  const [submittedCredits, setSubmittedCredits] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedCredits([...submittedCredits, Credits]);
    console.log("Credit value:", Credits);
  };

  const handleCreditChange = (event) => {
    setCredits(event.target.value);
  };
  useEffect(() => {
    async function fetchCredits() {
      try {
        const response = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/Credits"
        );
        setCredits(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCredits();
  }, []);

  return (
    <>
      <h1>Credits</h1>
      <h2>
        Credits Balance:{" "}
        {submittedCredits.reduce(
          (total, amount) => total + parseFloat(amount),
          0
        )}
      </h2>
      {console.log(Credits)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="Credit">Add Credit</label>
        <br />
        <input
          id="Credit"
          type="text"
          placeholder="Type Amount"
          value={Credits ?? ""}
          onChange={handleCreditChange}
        />
        <button className="btn">Add</button>
      </form>
    </>
  );
}

export default Credits;
