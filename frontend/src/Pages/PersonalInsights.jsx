import DoneAllIcon from "@mui/icons-material/DoneAll";
import ImageIcon from "@mui/icons-material/Image";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PersonIcon from "@mui/icons-material/Person";
import {
    Box,
    Container,
    Step,
    StepLabel,
    Stepper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Components/Assets/Preview.png';
import "./PersonalInsights.css"; // Import the CSS file


const steps = [
  { label: "General Information", icon: <PersonIcon />, path: "/general-info" },
  { label: "Medical History", icon: <MedicalServicesIcon />, path: "/medical-history" },
  { label: "Life Patterns & Habits", icon: <ImageIcon />, path: "/life-habits" },
  { label: "All done!", icon: <DoneAllIcon />, path: "/done" },
];

const StepIconComponent = ({ icon }) => (
  <Box className="stepIconComponent">{icon}</Box>
);

const PersonalInsights = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleStepClick = (path) => {
    navigate(path);
  };

  return (
    <>   
            <img src={logo} alt="Logo" className="logo" />

    <body>   
    <Container className="container">
      <Box className="box">
        <Stepper
          activeStep={0}
          orientation="vertical" // Ensures steps are displayed one below the other
          className="stepper"
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              onClick={() => handleStepClick(step.path)}
              className="step"
            >
              <StepLabel
                StepIconComponent={() => <StepIconComponent icon={step.icon} />}
                className="stepLabelContainer"
              >
                <Typography variant="body2" className="stepLabel">
                  {step.label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
    </body>
    </>
  );
};

export default PersonalInsights;
