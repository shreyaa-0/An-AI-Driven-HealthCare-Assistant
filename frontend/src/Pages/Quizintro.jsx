import React, { useState } from "react";
import logo from '../Components/Assets/Preview.png';
import './Quizintro.css';

const Quizintro = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleContinue = () => {
    if (isChecked) {
      // Redirect to the next page
      // Replace '/next-page' with your actual route
      window.location.href = '/primary-goal';
    } else {
      alert("Please confirm that you are at least 18 years old or the legal guardian of the user.");
    }
  };

  return (
    <>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <main className="main-content">
        <div className="title">
          <h1>First things first &#128075;</h1>
          <h2 className="greet">
            How should we greet you?
          </h2>
          <p>If privacy is a concern, feel free to use just a nickname</p>
          <input type="text" placeholder="Preferred nickname or name" className="input-field"/>
        </div>
      </main>
      <footer className="footer">
        <div className="confirmation">
          <input 
            type="checkbox" 
            id="age-confirmation" 
            checked={isChecked} 
            onChange={handleCheckboxChange} 
            className="confirmation-checkbox"
          />
          <label htmlFor="age-confirmation" className="confirmation-label">
            I confirm that I am at least 18 years old or I am the legal guardian of the user.
          </label>
        </div>
        <button className="continue-btn" onClick={handleContinue}>Continue</button>
      </footer>
    </>
  );
};

export default Quizintro;
