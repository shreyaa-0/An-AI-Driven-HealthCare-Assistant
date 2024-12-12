import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Primarygoal.css';

const Primarygoal = () => {
  const navigate = useNavigate();
  const [showAssistanceInput, setShowAssistanceInput] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [nickname, setNickname] = useState('');
  const [otherDetails, setOtherDetails] = useState('');

  const handleBoxClick = (path) => {
    navigate(path);
  };

  const toggleAssistanceInput = () => {
    setShowAssistanceInput((prev) => !prev);
  };

  const toggleOtherInput = () => {
    setShowOtherInput((prev) => !prev);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleOtherDetailsChange = (e) => {
    setOtherDetails(e.target.value);
  };

  const handleAssistanceSubmit = () => {
    navigate('/personal-insights'); // or any other logic you want to perform
  };

  const handleContinueClick = () => {
    navigate('/personal-insights');
  };

  return (
    <>
      
      <div className="title">
        <h2>What's Your Primary Goal with Smart Health</h2>
      </div>

      <Box
        sx={{
          mt: 2,
          p: 1,
          border: '1px solid grey',
          borderRadius: '8px',
          width: '500px',
          margin: '10px auto',
          '& p': { color: 'black' },
          cursor: 'pointer'
        }}
        onClick={() => handleBoxClick('/personal-insights')}
      >
        <Typography variant="h6">
          Personal Health Insights
        </Typography>
        <p>To understand & manage my own health conditions</p>
      </Box>

      <Box
        sx={{
          mt: 2,
          p: 1,
          border: '1px solid grey',
          borderRadius: '8px',
          width: '500px',
          margin: '10px auto',
          '& p': { color: 'black' },
          cursor: 'pointer'
        }}
        onClick={toggleAssistanceInput}
      >
        <Typography variant="h6">
          Someone else's Health Assistance
        </Typography>
        <p>To help manage a family member's health conditions.</p>

        {showAssistanceInput && (
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleAssistanceSubmit();
            }}
            sx={{ mt: 1 }}
          >
            <TextField
              label="Nickname for the person as you assist"
              variant="outlined"
              fullWidth
              value={nickname}
              onChange={handleNicknameChange}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 1 }}>
              Submit
            </Button>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          mt: 2,
          p: 1,
          border: '1px solid grey',
          borderRadius: '8px',
          width: '500px',
          margin: '10px auto',
          '& p': { color: 'black' },
          cursor: 'pointer'
        }}
        onClick={() => handleBoxClick('/personal-insights')}
      >
        <Typography variant="h6">
          Professional Use
        </Typography>
        <p>eg. Medical research, education & clinical practice</p>
      </Box>

      <Box
        sx={{
          mt: 2,
          p: 1,
          border: '1px solid grey',
          borderRadius: '8px',
          width: '500px',
          margin: '10px auto',
          '& p': { color: 'black' },
          cursor: 'pointer'
        }}
        onClick={toggleOtherInput}
      >
        <Typography variant="h6">
          Other
        </Typography>
        <p>To understand & manage my own health conditions</p>

        {showOtherInput && (
          <TextField
            placeholder="Please Specify"
            variant="outlined"
            fullWidth
            value={otherDetails}
            onChange={handleOtherDetailsChange}
            sx={{ mt: 1 }}
          />
        )}
      </Box>

      <footer>
        
        <Button
          onClick={handleContinueClick}
          sx={{
            mt: 2,
            fontSize: '18px',
            backgroundColor: 'teal',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkcyan'
            }
          }}
        >
          Continue
        </Button>
      </footer>
    </>
  );
};

export default Primarygoal;
