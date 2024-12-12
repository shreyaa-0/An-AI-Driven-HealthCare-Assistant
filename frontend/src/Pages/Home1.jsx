import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import gdpr from "../Components/Assets/GDPR.png";
import hippa from "../Components/Assets/HIPAA.png";
import video from "../Components/Assets/SMARTHEALTH.mp4";
import cnbc from "../Components/Assets/cnbc.png";
import entrepreneur from "../Components/Assets/entrepreneur.png";
import forbes from "../Components/Assets/forbes.png";
import logo from "../Components/Assets/home_ai_doctor.webp";
import logo1 from "../Components/Assets/home_lab_tests.webp";
import logo3 from "../Components/Assets/symptom.webp";
import logo2 from "../Components/Assets/top_doctors.webp";
import usatoday from "../Components/Assets/usa-today.png";
import Navbar from "../Components/Navbar/Navbar"; // Adjust the path if necessary
import "./Home1.css";

const Home1 = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/sign-in"); // Replace with the path you want to navigate to
  };
 
  return (
    <div><Navbar /> 
    {/* <div className="background-video-wrapper">
  <video autoPlay loop muted playsInline>
    <source src={video} type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div> */}
      {/* Navbar included here */}
      <div className="header-container">
        <div className="text-video-wrapper">
          <div className="text-section">
            <div className="text-overlay">
              <div className="main-text">
                Your Health Assistant
                <br />
                Powered by AI 🤖
                <br />
                <span className="highlight-aqua">For a better you</span>
              </div>
              <h5 className="sub-text">
                Ensure your well-being and manage your health <br />
                effectively. Gain insights from our AI Doctor and consult
                <br />
                with leading healthcare professionals in your region
                <br />
              </h5>
              <div className="explore-button-container">
                <button onClick={handleExplore}>Explore for Free</button>
              </div>
            </div>
          </div>
          <div className="video-section">
            <video autoPlay loop muted playsInline>
              <source src={video} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="notice-section">
        <h3>
          Please Note! Your data is confidential and secured by HIPAA and GDPR
          standards.
        </h3>
        <div className="certifications">
          <img src={hippa} alt="HIPAA" />
          <img src={gdpr} alt="GDPR" />
        </div>
      </div>

      <div className="table-section">
        <h1>Make Smart Health Choices!</h1><br /><br />
        <h5>
          We supply everything required to thoroughly comprehend your health and
          make well-informed decisions about your well-being.
        </h5>
      </div>

      <div className="cards-section">
        <Card className="card-style1 card-tall">
          <CardContent>
            <img src={logo} alt="Card Logo" className="card-logo" />
            <Typography gutterBottom variant="h5" component="div">
              AI Personal Health Consultant
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Customize your personal AI Doctor. Simply complete your health
              profile, ask your health questions, and receive personalized,
              data-driven advice.
              <ul>
                <li>Get tailored insights</li>
                <li>Discover your health risks</li>
                <li>Get personal checkup plans</li>
                <li>Generate health reports</li>
              </ul>
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <Button
              className="card-button"
              size="small"
              onClick={() => window.open("https://you.com/", "_blank")}
            >
              CHAT WITH AI DOCTOR
            </Button>
          </CardActions>
        </Card>
        <Card className="card-style2 card-short">
          <CardContent>
            <img src={logo1} alt="Card Logo" className="card-logo" />
            <Typography gutterBottom variant="h5" component="div">
              Lab Test Interpretation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload your lab results to receive in-depth biomarker
              interpretations and detailed lab test reports.
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <Button
              className="card-button3"
              size="small"
              onClick={() => navigate("/lab-test-interpretation")}
            >
              GO TO LAB TESTS
            </Button>
          </CardActions>
        </Card>
        <Card className="card-style3 card-short">
          <CardContent>
            <img src={logo3} alt="Card Logo" className="card-logo" />
            <Typography gutterBottom variant="h5" component="div">
              AI Symptom Checker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Describe your symptoms, answer targeted questions, and instantly
              identify potential health issues.
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <Button
              className="card-button"
              size="small"
              onClick={() => navigate("/symptoms-guide")}
            >
              GO TO SYMPTOM CHECKER
            </Button>
          </CardActions>
        </Card>
        <Card className="card-style4 card-tall">
          <CardContent>
            <img src={logo2} alt="Card Logo" className="card-logo" />
            <Typography gutterBottom variant="h5" component="div">
              Top Doctors Access
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connect with over 350 top doctors from across India and your local
              neighborhood. Gain valuable second opinions and validation of
              AI-driven health insights from experienced professionals.
            </Typography>
          </CardContent>
          <CardActions className="card-action">
            <Button
              className="card-button2"
              size="small"
              onClick={() => navigate("/second-opinion")}
            >
              GET SECOND OPINION
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="new-images-section">
        <img src={forbes} alt="Forbes" className="images" />
        <img src={usatoday} alt="US Today" className="images" />
        <img src={entrepreneur} alt="Entrepreneur" className="images" />
        <img src={cnbc} alt="CNBC" className="images" />
      </div>

      <div className="benefits">
        <h1>Benefits of Personal AI Health Assistant</h1><br /><br />
        <h5>
          We have all you need to better understand your health and make
          informed and accurate decisions about your well-being.
        </h5>
      </div>

      <div className="paper-container">
        <Paper className="paper paper1" elevation={20}>
          <Typography variant="h6" component="div">
            <LocalHospitalIcon />
            <br />
            Proactive Preventive Care
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Utilize predictive analytics and expert advice to identify and
            manage health risks early, ensuring your long-term wellness.
          </Typography>
        </Paper>
        <Paper className="paper paper2" elevation={20}>
          <Typography variant="h6" component="div">
            <AccessibilityNewIcon />
            <br />
            Tailored Health Solutions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Get health support tailored to your needs with personalized plans
            and strategies, available 24/7 to seamlessly fit your lifestyle.
          </Typography>
        </Paper>
        <Paper className="paper paper3" elevation={20}>
          <Typography variant="h6" component="div">
            <TextSnippetIcon />
            <br />
            In-Depth Health Insights
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gain a deeper understanding of your health with clear, actionable
            insights, helping you make informed decisions effortlessly.
          </Typography>
        </Paper>
      </div>

      <div className="free">
        <button onClick={() => navigate("/sign-in")}>
          Try SmartHealth For Free
        </button>
      </div>
      
    </div>
  );
};

export default Home1;
