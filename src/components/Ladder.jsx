import React from 'react';
import "./style.css";
import { FaRegUserCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Stairs from './Stairs';



const Ladder = () => {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#" style={{fontSize:'25px'}}><GoGoal/> Learntos</a>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#"> <FaRegUserCircle/></a>
           
          </nav>
        </div>
      </header>
<div>



</div>
      <main>
        <section className="banner-container">
          <div className="container">
            <div className="left-section">

              
              <h1 className="animated-heading"> L 7</h1>
              <p>

              Are you ready to transform your dreams into reality? At L7, we believe that setting clear, actionable goals is the first step towards achieving more in life. Whether you’re aiming for personal growth, career advancement, or simply a more fulfilling life, we’re here to guide you every step of the way.
              </p>
          <button className='goal'>SET A GOAL</button>
            </div>
            
          </div>
        </section>
  
        <footer>
          Design and Developed by <span> TEAM L7 </span>
        </footer>
        <div id="root"></div>
      </main>
    </div>
  );
}

export default Ladder;
