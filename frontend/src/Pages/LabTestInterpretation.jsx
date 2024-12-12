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
import './LabTestInterpretation.css'; // Import the CSS file


const LabTestInterpretation = () => {
    const navigate = useNavigate();

    const handleGotolabtest = () => {
        navigate('/test-result'); // Replace '/generalinfo' with the correct path to your Generalinfo page
      };
  return (
    <div>
      

      <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom style={{ color: "black" }}>
  Lab Test Interpretation
</Typography>

        <Typography variant="body1" gutterBottom>
          Complete your main health information to personalize your AI Doctor, to explore your health risks and get personal checkup plan.
        </Typography>

        <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
          <List component="nav">
            <ListItem>
              <ListItemText primary="Blood" secondary="0" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Urine" secondary="0" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Pap Smear" secondary="0" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Semen Analysis" secondary="0" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Stool Test" secondary="0" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Swab Test" secondary="0" />
            </ListItem>
          </List>
        </Paper>

        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={handleGotolabtest}>
            Go to Lab Tests
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default LabTestInterpretation;