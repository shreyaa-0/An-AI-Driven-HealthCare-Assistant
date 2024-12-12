import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Generalinfo.css'; // Ensure this CSS file has the right styles or create a new one

const questions = [
    {
        question: "Age",
        type: "number"
    },
    {
        question: "Weight",
        type: "number"
    },
    {
        question: "Height",
        type: "text" // Adjusted to accept text input in the format 'ft' and 'in'
    },
    {
        question: "Primary racial or ethnic group",
        options: ["White", "Black or African American", "Hispanic or Latino", "Asian", "Native American or Alaska Native", "Native Hawaiian or Other Pacific Islander", "Other"]
    },
    {
        question: "Sex assigned at birth",
        options: ["Male", "Female", "Other"]
    },
    {
        question: "Regularity of menstrual cycle",
        options: ["Regular", "Irregular", "Paused due to breastfeeding", "Paused due to pregnancy", "Menopause"]
    }
];

const Generalinfo = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [textInputs, setTextInputs] = useState({});

    const handleOptionChange = (questionIndex, option) => {
        setSelectedOptions(prev => ({ ...prev, [questionIndex]: option }));
    };

    const handleTextChange = (questionIndex, text) => {
        setTextInputs(prev => ({ ...prev, [questionIndex]: text }));
    };

    const handleNumericChange = (questionIndex, value) => {
        setTextInputs(prev => ({ ...prev, [questionIndex]: value }));
    };

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setIsSubmitted(true);
            }
            setIsAnimating(false);
        }, 600);
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const renderInput = () => {
        const { type } = questions[currentQuestion];
        const value = textInputs[currentQuestion] || '';

        if (type === "number") {
            return (
                <div className="numeric-input">
                    <button
                        type="button"
                        onClick={() => handleNumericChange(currentQuestion, Math.max(0, (parseInt(value) || 0) - 1))}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        placeholder={`Enter your ${questions[currentQuestion].question.toLowerCase()}`}
                        value={value}
                        onChange={(e) => handleNumericChange(currentQuestion, e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => handleNumericChange(currentQuestion, (parseInt(value) || 0) + 1)}
                    >
                        +
                    </button>
                </div>
            );
        }

        return (
            <input
                type={type}
                placeholder={`Enter your ${questions[currentQuestion].question.toLowerCase()}`}
                value={value}
                onChange={(e) => handleTextChange(currentQuestion, e.target.value)}
            />
        );
    };

    const cardStyle = {
        width: '90%', // Adjust the width here
        maxWidth: '1000px' // Ensure it doesn't exceed this width
    };

    return (
        <div className="body">
            <div className="container">
                
                <header className="header">
                    
                    <h1>General Information</h1>
                    <p>We value your health and well-being. Please take a few minutes to complete this survey.</p>
                </header>

                {isSubmitted ? (
                    <div className="message">
                        🎉 Well done! Your responses have been submitted.
                        <br/>
                        <Link to="/medical-history">
                            <button className="next-btn">Next</button>
                        </Link>
                    </div>
                ) : (
                    <div className={`card ${isAnimating ? 'turn-page' : ''}`} style={cardStyle}>
                        <h3>{questions[currentQuestion].question}</h3>
                        <p>{questions[currentQuestion].description}</p>
                        <div className="options">
                            {questions[currentQuestion].options ? (
                                questions[currentQuestion].options.map((option, index) => (
                                    <div key={index}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`q${currentQuestion}`}
                                                value={option}
                                                checked={selectedOptions[currentQuestion] === option}
                                                onChange={() => handleOptionChange(currentQuestion, option)}
                                            />
                                            {option}
                                        </label>
                                    </div>
                                ))
                            ) : (
                                renderInput()
                            )}
                        </div>
                        <div className="button-group">
                            <button className="prev-btn" onClick={handlePrevious} disabled={currentQuestion === 0}>
                                Previous
                            </button>
                            <button className="next-btn" onClick={handleNext}>
                                {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="profile-link">
            </div>
        </div>
    );
};

export default Generalinfo;
