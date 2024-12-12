import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MedicalHistory.css';

const questions = [
    {
        question: "Medical history",
        options: ["No", "Yes"]
    },
    {
        question: "Chronic and Past Health Conditions",
        options: ["No", "Yes"]
    },
    {
        question: "Chronic and Past Health Conditions",
        options: ["Diabetes", "Hypertension", "Cardiovascular diseases", "Thyroid disorders"]
    },
    {
        question: "Family health history",
        options: ["No", "Yes"]
    },
    {
        question: "Family health history",
        options: ["Heart Diseases", "Diabetes", "Cancer", "Osteoporosis"]
    },
    {
        question: "Known allergies",
        options: ["No", "Yes"]
    },
    {
        question: "Medical History",
        options: ["No", "Yes"]
    },
    {
        question: "Medical History",
        options: ["No", "Yes"]
    },
    {
        question: "Medication History (last 6 months)",
        options: ["No", "Yes"]
    }
];

const MedicalHistory = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [additionalInput, setAdditionalInput] = useState({});

    const handleOptionChange = (questionIndex, option) => {
        setSelectedOptions(prev => ({ ...prev, [questionIndex]: option }));
    };

    const handleTextChange = (questionIndex, text) => {
        setAdditionalInput(prev => ({ ...prev, [questionIndex]: text }));
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

    // Inline styles for card width
    const cardStyle = {
        width: '90%', // Adjust the width here
        maxWidth: '1000px' // Ensure it doesn't exceed this width
    };

    return (
        <div className="body">
            <div className="container">
                <header className="header">
                   
                    <h1>Medical History</h1>
                    <p>We value your health and well-being. Please take a few minutes to complete this survey.</p>
                </header>

                {isSubmitted ? (
                    <div className="message">
                        🎉 Well done! Your responses have been submitted.
                        <br/>
                        <Link to="/life-habits">
                            <button className="next-btn">Next</button>
                        </Link>
                    </div>
                ) : (
                    <div className={`card ${isAnimating ? 'turn-page' : ''}`} style={cardStyle}>
                        <h3>{questions[currentQuestion].question}</h3>
                        <p>{questions[currentQuestion].description}</p>
                        <div className="options">
                            {questions[currentQuestion].options.map((option, index) => (
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
                            ))}
                            {selectedOptions[currentQuestion] === "Yes" && (
                                <input
                                    type="text"
                                    placeholder="Please specify"
                                    value={additionalInput[currentQuestion] || ''}
                                    onChange={(e) => handleTextChange(currentQuestion, e.target.value)}
                                />
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

export default MedicalHistory;
