import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Components/Assets/Preview.png";

const TestResults = () => {
  const navigate = useNavigate();

  const handleNewTest = () => {
    navigate('/add-test'); // Replace '/generalinfo' with the correct path to your Generalinfo page
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#f4f4f4', height: '100vh' }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ 
            display: 'block',
            margin: '20px auto',
            width: '330px',
            height: '60px'
          }} 
        />
        <Box sx={{ padding: '16px', backgroundColor: '#f4f4f4', height: 'calc(100vh - 70px)' }}>
          <Box
            sx={{
              backgroundColor: '#f4f4f4',
              borderRadius: '8px',
              padding: '32px',
              textAlign: 'center',
            }}
          >
            <img
              src="https://my.docus.ai/_next/static/media/empty-test-result.48b11553.svg"
              alt="No Tests"
              style={{ width: '100px', marginBottom: '16px' }}
            />
            <Typography variant="h6" gutterBottom back>
              You haven’t added any tests yet
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Add a new test to start gaining valuable insights into your health.
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              sx={{ marginTop: '16px' }}
              onClick={handleNewTest}
            >
              + Add New Test Result
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TestResults;
