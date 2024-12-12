import {
    Box,
    Button,
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MainHealthInformation.css'; // Ensure this CSS file has the right styles or create a new one


const MainHealthInformation = () => {
    const navigate = useNavigate();

    const handleHealthUpdate = () => {
        navigate('/personal-insights'); // Replace '/generalinfo' with the correct path to your Generalinfo page
      };
  return (
    <div>
      

      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Main Health Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          Complete your main health information to personalize your AI Doctor, to explore your health risks and get personal checkup plan.
        </Typography>

        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h6" gutterBottom>
            Medical History
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText primary="Chronic and Past Health Conditions" secondary="Cardiovascular diseases." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Family health history" secondary="Diabetes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Known allergies" secondary="no data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Surgical History" secondary="no data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Menstrual cycle" secondary="no data" />
            </ListItem>
          </List>
          <Divider />

          <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
            Medications
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText primary="Current medications" secondary="no data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Medication History (last 6 months)" secondary="no data" />
            </ListItem>
          </List>
          <Divider />

          <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
            Life Patterns & Habits
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText primary="Daily smoking intensity" secondary="Electronic cigarettes/vaping" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Weekly alcohol intake" secondary="47 standard drinks" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dietary habits" secondary="Balanced meals" />
            </ListItem>
          </List>
        </Paper>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={handleHealthUpdate}>
            Update Health Information
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default MainHealthInformation;