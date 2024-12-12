import { Avatar, Box, Grid, Typography as MuiTypography, Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const doctors = [
  { name: 'Dr. John Doe', specialization: 'Cardiologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fd875d03f828e5eed1b10ef356a1d7146.png&w=1920&q=100' },
  { name: 'Dr. Jane Smith', specialization: 'Neurologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F512611f1e6932474dcd4c243a14bd8ea.png&w=1920&q=100' },
  { name: 'Dr. Emily Johnson', specialization: 'Dermatologist', experience: '6 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F6a1348b8aa2b0f6103484b9814cfc261.png&w=1920&q=100' },
  { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F173c37d41f5ff42474952aff3f47a064.png&w=1920&q=100' },
  { name: 'Dr. Lisa White', specialization: 'Pediatrician', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F1fb2730fb9eecf959e0b2b9ae25d0178.png&w=1920&q=100' },
  { name: 'Dr. David Wilson', specialization: 'Gastroenterologist', experience: '15 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fdeeda97b96cd31cc57673b9394f5f46b.png&w=1920&q=100' },
  { name: 'Dr. Mary Clark', specialization: 'Ophthalmologist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fb270a135c27b85cd039fa0bccfc34c03.png&w=1920&q=100' },
  { name: 'Dr. Robert Lee', specialization: 'Endocrinologist', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Feb5c1e5c0f60e3222c6eb66c393fd226.png&w=1920&q=100' },
  { name: 'Dr. Patricia Harris', specialization: 'Rheumatologist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F3b75f6991136239ebdf625e416fa864b.png&w=1920&q=100' },
  { name: 'Dr. James Lewis', specialization: 'Oncologist', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe1b1b9c637b389aa7ea294493b80551b.png&w=1920&q=100' },
  { name: 'Dr. Barbara Walker', specialization: 'Hematologist', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbf001a7ba2a0d1b0e678f07b72f7bb00.png&w=1920&q=100' },
  { name: 'Dr. Charles Hall', specialization: 'Urologist', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fbaba8c48260506093a50984daa957606.png&w=1920&q=100' },
  { name: 'Dr. Susan Allen', specialization: 'Pulmonologist', experience: '12 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F2ea6e9098d3cab4b15ea3552613d1feb.png&w=1920&q=100' },
  { name: 'Dr. Daniel Young', specialization: 'Nephrologist', experience: '8 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F4fdcc51306383bf8328373450b9065c0.png&w=1920&q=100' },
  { name: 'Dr. Karen King', specialization: 'Surgeon', experience: '16 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe4dd7b90bcbf8fb4aa2004e4c0bcf014.png&w=1920&q=100' },
  { name: 'Dr. Steven Wright', specialization: 'Psychiatrist', experience: '7 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F461e710cebba8724da2cd04aed03cc38.png&w=1920&q=100' },
  { name: 'Dr. Nancy Scott', specialization: 'Internist', experience: '14 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F23f26720f0c3e475f1fa9bb4e1be85f0.png&w=1920&q=100' },
  { name: 'Dr. George Green', specialization: 'Geriatrician', experience: '11 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F50d3848f93cacb0cb833d3fd5b7c442d.png&w=1920&q=100' },
  { name: 'Dr. Linda Adams', specialization: 'Family Medicine', experience: '10 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F56e036ee999423ee70f9e0ca44e2c5ba.png&w=1920&q=100' },
  { name: 'Dr. Richard Baker', specialization: 'Pathologist', experience: '9 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fc1b5c8e608db12b3a2b71b71cfc4aa6d.png&w=1920&q=100' },
  { name: 'Dr. Jessica Martinez', specialization: 'Emergency Medicine', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F4283341a5718dd89d9f752a4a579b11d.png&w=1920&q=100' }
  ,{ name: 'Dr. Jessica Shreya', specialization: 'Emergency Medicine', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F7c120e30d37417453986c0d677e04ecc.png&w=1920&q=100' }
  ,{ name: 'Dr. Jessica Supreetha', specialization: 'Emergency Medicine', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2Fe9a6a75eb4e6957e8d3b82278c9df0fe.png&w=1920&q=100' }
  ,{ name: 'Dr. Jessica viswanathan', specialization: 'Emergency Medicine', experience: '13 years', photo: 'https://my.docus.ai/_next/image?url=https%3A%2F%2Fdocus-live-crm-storage-us.s3.amazonaws.com%2Fnetwork_doctors%2Fprofile_pictures%2F461e710cebba8724da2cd04aed03cc38.png&w=1920&q=100' }
];


const Secondopinion = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      {/* <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            src="http://localhost:3000/static/media/Preview.3d4b4c0142b8ccf9156e.png"
            alt="Docus Logo"
            className="logo"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', pr: 2 }}>
            <Button color="primary" variant="contained" onClick={() => navigate('/Home1')}>
              Go Back To Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar> */}
      <Box sx={{ textAlign: 'center', marginBottom: 4, mt: 4 }}>
        <MuiTypography 
          variant="h3" 
          component="h1" 
          sx={{ color: 'white', fontWeight: 'bold' }}
        >
          Get an Online Second Opinion From Top Doctors!
        </MuiTypography>
      </Box>
      {/* Doctor Grid */}
      <Box p={2}>
        <Grid container spacing={2}>
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Paper 
                elevation={5} 
                sx={{ 
                  padding: 3, 
                  textAlign: 'center', 
                  backgroundColor:'white', 
                  color: 'black',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                    backgroundColor: 'blue',
                  },
                }}
              >
                <Avatar 
                  alt={doctor.name} 
                  src={doctor.photo} 
                  sx={{ width: 120, height: 120, margin: '0 auto', border: '2px solid #fff' }} 
                />
                <MuiTypography variant="h6" component="h2" sx={{ mt: 2 }}>
                  {doctor.name}
                </MuiTypography>
                <MuiTypography variant="body2" sx={{ color: 'black' }}>
                  {doctor.specialization}
                </MuiTypography>
                <MuiTypography variant="body2" sx={{ color: 'black' }}>
                  {doctor.experience}
                </MuiTypography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Secondopinion;
