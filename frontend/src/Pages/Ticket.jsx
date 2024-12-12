import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from '../Components/Assets/Preview.png';

const Ticket = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <>
      <img 
        src={logo} 
        alt="Logo" 
        style={{
          display: 'block',
          margin: '20px auto',
          width: '330px',
          height: '50px',
        }}
      />

      <Container
        sx={{
          padding: 4,
          backgroundColor: theme => theme.palette.background.default,
          maxWidth: '400px', // Increased width
          height: '600px', // Increased height
          margin: '0 auto', // Center the container
          marginTop: '50px', // Move container down by 50px
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            padding: 3, 
            textAlign: 'center', 
            width: '100%', 
            height: '100%', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              marginBottom: 4,
              textAlign: 'center', // Center text
            }}
          >
            Create New Ticket
          </Typography>

          <Grid container spacing={3} direction="column" sx={{ flex: 1 }}>
            <Grid item>
              <TextField
                select
                label="Select Ticket Type"
                fullWidth
                sx={{ margin: 2 }}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option value="">Select Ticket Type</option>
                <option value="issue">Issue</option>
                <option value="suggestion">Suggestion</option>
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                label="Description"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                sx={{ margin: 2 }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                component="label"
                color="primary"
                sx={{
                  margin: 2,
                  backgroundColor: 'teal',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkcyan',
                  },
                }}
              >
                Upload File (optional)
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </Button>
              {file && (
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
                  Selected File: {file.name}
                </Typography>
              )}
              <Typography variant="body2" color="textSecondary">
                You can attach a file up to 15 MB
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: 'teal',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkcyan',
                  },
                }}
              >
                Submit Ticket
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Ticket;
