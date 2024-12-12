import {
  Avatar,
  Box,
  ButtonBase,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from "../Components/Assets/Preview.png";
import './HealthProfile.css'; // Import the CSS file

const HealthProfile = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Use navigate for routing
  };

  return (
    <div>
      <img src={logo} alt="Logo" />

      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Your Health Profile
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="body1" gutterBottom>
            Complete your health profile to get valuable insights into your health.
          </Typography>
          <Box display="flex" alignItems="center" ml={2} flexGrow={1}>
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={72} style={{ width: '100%' }} />
            </Box>
            <Typography variant="body2" color="textSecondary">
              72% completed
            </Typography>
          </Box>
        </Box>

        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h6" gutterBottom>
            General Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <TextField
                    label="Age"
                    value=""
                    fullWidth
                    InputProps={{ readOnly: true }}
                    style={{ height: '70px' }} // Increased height
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Height"
                    value=""
                    fullWidth
                    InputProps={{ readOnly: true }}
                    style={{ height: '70px' }} // Increased height
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Weight"
                    value=""
                    fullWidth
                    InputProps={{ readOnly: true }}
                    style={{ height: '70px' }} // Increased height
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2} alignItems="flex-start">
                <Grid item>
                  <Avatar
                    src="https://my.docus.ai/_next/static/media/personModel2.0ac9b414.svg"
                    variant="square"
                    style={{ width: '100px', height: '250px', margin: 0, border: 'none' }}
                  />
                </Grid>
                <Grid item xs>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        label="Ethnicity"
                        value=""
                        fullWidth
                        InputProps={{ readOnly: true }}
                        style={{ height: '70px' }} // Increased height
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Sex assigned at birth"
                        value=""
                        fullWidth
                        InputProps={{ readOnly: true }}
                        style={{ height: '70px' }} // Increased height
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Box display="flex" flexDirection="column" gap={2}>
          <ButtonBase
            onClick={() => handleNavigation('/main-health-info')}
            style={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '16px', textAlign: 'left', width: '100%' }}
          >
            <Box position="relative" mr={2}>
              <CircularProgress variant="determinate" value={100} size={60} thickness={5} style={{ color: '#4caf50' }} />
              <Typography
                variant="body2"
                component="div"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#4caf50',
                }}
              >
                100%
              </Typography>
            </Box>
            <Typography variant="body1" component="span">
              Main Health Information
            </Typography>
          </ButtonBase>

          <ButtonBase
            onClick={() => handleNavigation('/supplement-checkup')}
            style={{ display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '16px', textAlign: 'left', width: '100%' }}
          >
            <Box position="relative" mr={2}>
              <CircularProgress variant="determinate" value={60} size={60} thickness={5} style={{ color: '#ffa500' }} />
              <Typography
                variant="body2"
                component="div"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#ffa500',
                }}
              >
                60%
              </Typography>
            </Box>
            <Typography variant="body1" component="span">
              Supplement Checkup
            </Typography>
          </ButtonBase>

          <ButtonBase
            onClick={() => handleNavigation('/lab-test-interpretation')}
            style={{ display: 'flex', alignItems: 'left', border: '1px solid #e0e0e0', borderRadius: '4px', padding: '16px', textAlign: 'left', width: '100%' }}
          >
            <Box position="relative" mr={2}>
              <CircularProgress variant="determinate" value={0} size={60} thickness={5} style={{ color: '#f44336' }} />
              <Typography
                variant="body2"
                component="div"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#f44336',
                }}
              >
                0%
              </Typography>
            </Box>
            <Typography variant="body1" component="span">
              Lab Test Interpretation
            </Typography>
          </ButtonBase>
        </Box>
      </Container>
    </div>
  );
};

export default HealthProfile;
