import React, { useState } from "react";
//import {Bar} from 'react-chartjs-2';
import Pract9 from "./Pract9";
//import LineChart from 'reactochart/LineChart'

// import XYPlot from "reactochart/XYPlot";
// import XAxis from "reactochart/XAxis";
// import YAxis from "reactochart/YAxis";
// import Histogram from "reactochart/LineChart";

export default function Pract8() {
  const [dataA, setDataA] = useState(6);
  const [dataB, setDataB] = useState(5);
  const [dataC, setDataC] = useState(3);


  const HandleIncrementA = () => {
    setDataA(dataA + 1);
  };

  const HandleIncrementB = () => {
    setDataB(dataB + 1);
  };

  const HandleIncrementC = () => {
    setDataC(dataC + 1);
  };

  const HandleDecrementA = () => {
    setDataA(dataA - 1);
  };

  const HandleDecrementB = () => {
    setDataB(dataB - 1);
  };

  const HandleDecrementC = () => {
    setDataC(dataC - 1);
  };


  return (
    <div>
      <h1>Hi this prac8</h1>
      <div className="container">
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              color: "black",
            }}
          >
            a
          </div>
          <div
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "blue",
            }}
            value={dataA}
            onChange={(e) => {
              setDataA(e.target.value);
            }}

          >
            {dataA}
          </div>
          <button
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={HandleIncrementA}
          >
            +
          </button>
          <button
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={HandleDecrementA}
          >
            -
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              color: "black",
            }}
          >
            b
          </div>
          <div
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "blue",
            }}
            value={dataB}
            onChange={(e) => {
              setDataB(e.target.value);
            }}
          >
            {dataB}
          </div>
          <button
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={HandleIncrementB}
          >
            +
          </button>
          <button
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={HandleDecrementB}
          >
            -
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "10px",
              color: "black",
            }}
          >
            c
          </div>
          <div
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "blue",
            }}
            value={dataC}
            onChange={(e) => {
              setDataC(e.target.value);
            }}
          >
            {dataC}
          </div>
          <button
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={HandleIncrementC}
          >
            +
          </button>
          <button
            style={{
              border: "1px solid green",
              padding: "10px",
              color: "white",
              backgroundColor: "black",
            }}
            onClick={HandleDecrementC}
          >
            -
          </button>
        </div>
        <div
          
        
        >
          <Pract9  dataA={dataA} dataB={dataB} dataC={dataC}/>
         
        </div>
      </div>
    </div>
  );
}
