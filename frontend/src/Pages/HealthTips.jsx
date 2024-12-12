import { Box, Button, List, ListItem, ListItemText, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './HealthTips.css';

const HealthTips = () => {
  const [tips, setTips] = useState([
    'Stay hydrated by drinking at least 8 glasses of water daily.',
    'Exercise regularly to maintain a healthy body and mind.',
    'Eat a balanced diet rich in fruits, vegetables, and lean proteins.',
    'Get at least 7-8 hours of quality sleep each night.',
    'Practice mindfulness or meditation to reduce stress.',
    'Avoid smoking and limit alcohol consumption.',
    'Wash your hands regularly to prevent the spread of germs.',
    'Take regular breaks from screen time to protect your eyes.',
    'Maintain a healthy weight by staying active and eating well.',
    'Visit your doctor for regular check-ups and screenings.',
    'Include a variety of foods in your diet to ensure proper nutrition.',
    'Practice good posture to avoid back and neck pain.',
    'Spend time outdoors to get fresh air and sunlight.',
    'Stay connected with family and friends to support your mental health.',
    'Stay informed about health topics, but avoid excessive worry.',
    'Limit your intake of processed foods and sugars.',
    'Incorporate strength training exercises into your routine.',
    'Stay up-to-date with vaccinations and health advisories.',
    'Reduce your intake of salt to help manage blood pressure.',
    'Practice safe sun exposure by using sunscreen.',
    'Incorporate healthy fats, like those from avocados and nuts, into your diet.',
    'Stay active throughout the day by taking short walks or stretching.',
    'Ensure you’re getting enough vitamin D, either from sunlight or supplements.',
    'Keep your living environment clean and organized to reduce stress.',
    'Listen to your body and rest when you’re feeling tired or unwell.',
    'Practice portion control to avoid overeating.',
    'Incorporate fiber-rich foods like whole grains, fruits, and vegetables into your meals.',
    'Use relaxation techniques such as deep breathing to manage anxiety.',
    'Engage in hobbies or activities that bring you joy and fulfillment.',
    'Limit your consumption of caffeinated beverages to avoid disrupting sleep.',
    'Stay hydrated, especially after physical activity or in hot weather.'
  ]);
  const [newTip, setNewTip] = useState('');

  const handleAddTip = () => {
    if (newTip.trim() !== '') {
      setTips([...tips, newTip]);
      setNewTip('');
    }
  };

  return (
    <Box className="container">
      <Typography variant="h4" className="title">
        Personal Health Tips
      </Typography>
      <Paper className="styled-list" elevation={3}>
        <List>
          {tips.map((tip, index) => (
            <ListItem key={index} className="styled-list-item">
              <ListItemText primary={tip} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <TextField
        variant="outlined"
        fullWidth
        label="Add a new health tip"
        value={newTip}
        onChange={(e) => setNewTip(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        className="add-button"
        onClick={handleAddTip}
      >
        Add Tip
      </Button>
    </Box>
  );
};

export default HealthTips;
