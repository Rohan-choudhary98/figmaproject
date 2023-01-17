 import React from 'react'
import styled from "styled-components";
import Data from "../Data/Data";
import { AiOutlineCalendar } from "react-icons/ai";


function Main() {
    

console.log(Data)

    return (
        <Section>
        <div className="container">
      <div className="container__details">
        <div>
          <ul style={{display:"flex",gap:"25px",listStyle:"none",fontWeight: 'bold'}}>
        
            <li style={{fontWeight: 'bold'}}><a href="def"> All</a></li>
            <li> <a href="def">Live </a></li>
            <li><a href="def"> Draft </a></li>
          </ul>
        </div>
        <div>
          <div className="date">
                    <AiOutlineCalendar />
                    <span>Jan 16, 2023</span>
                </div>
        </div>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {Data.map((data,index)=>{
            return(
                <>
                <div key={index}  style={{height:"180px",width:"160px" ,display:"flex"}}>
                <img src={data.image} alt='any' style={{height:"170px",width:"150px"}}/>
                
                  </div>
                </>
            )
        })}
      </div>
        </div>
        </Section>
    )
}

export default Main
  const Section = styled.section`
  .container {
    color: black;
    width: 100%;
    .container__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #EEF4FF;
            color: black;
            svg {
                font-size: 0.6rem;
            }
        }
      }
    }
 
  }
  `