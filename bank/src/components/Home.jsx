import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Debits from './Debits';

function Home(){
    
        return(
        <>
        <div>
            
            <h1>Bank of React</h1>
            <div style={{ display: 'flex' }}>
  <Link to="/debits" style={{ marginRight: '10px' }}>Debits</Link>
  <Link to="/">Home</Link>
</div>

        </div>
        <Routes>
            <Route path="/debits" element={<Debits/>} />
            
        </Routes>
        </>
        );
}


export default Home