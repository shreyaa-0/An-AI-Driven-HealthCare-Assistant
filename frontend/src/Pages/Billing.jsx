import CheckCircle from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import { AppBar, Box, Button, Card, CardContent, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Components/Assets/Preview.png';
import './Billing.css';

const annualPlans = [
  {
    title: 'Free',
    price: '$0/year',
    features: [
      '3 messages/week with Personal AI Doctor',
      '1 AI-generated personal health report',
      'Chat Attachments',
      '1 lab test analyzed by AI',
      'Multilingual conversations',
      'Chat history',
      'Health risk analysis',
    ],
    current: true,
  },
  {
    title: 'Lite',
    price: '$49.99/year',
    priceNote: 'Billed annually',
    features: [
      '50 messages/month with Personal AI Doctor',
      '3 AI-generated personal health reports/month',
      'Chat Attachments',
      '3 lab tests/month analyzed by AI',
      'Multilingual conversations',
      'Chat history',
      'Health risk analysis',
    ],
  },
  {
    title: 'Pro',
    price: '$99.99/year',
    priceNote: 'Billed annually',
    features: [
      '500 messages/month with Personal AI Doctor',
      '15 AI-generated personal health reports/month',
      'Chat Attachments',
      '15 lab tests/month analyzed by AI',
      'Multilingual conversations',
      'Chat history',
      'Health risk analysis',
    ],
  },
];

const Billing = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#f4f4f4', boxShadow: 'none', padding: '0.5rem' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: '60px', marginRight: 'auto' }} 
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh', paddingTop: '64px' }}>
        <Container maxWidth="lg">
          <Box mt={5} mb={5}>
            <Typography variant="h4" align="center" gutterBottom><br />
              Plans & Pricing
            </Typography>
            <Box display="flex" justifyContent="center" mb={3}>
              <Button variant="contained" sx={{ marginRight: 2 }}>
                Yearly
              </Button>
              <Button
      variant="outlined"
      onClick={() => navigate("/Billing2")}
    >
      Monthly
    </Button>
            </Box>
            <Grid container spacing={4} justifyContent="center">
              {annualPlans.map((plan, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    variant={plan.current ? 'outlined' : 'elevation'}
                    sx={{
                      backgroundColor: plan.title === 'Lite' ? '#e0f7fa' : 'inherit',
                      position: 'relative',
                    }}
                  >
                    <CardContent>
                      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                        <Typography variant="h6" color="textSecondary">
                          {plan.title}
                        </Typography>
                        {plan.current && (
                          <Box
                            sx={{
                              backgroundColor: '#e0e0e0',
                              borderRadius: 1,
                              paddingX: 1,
                              marginLeft: 1,
                            }}
                          >
                            Current Plan
                          </Box>
                        )}
                        {plan.title === 'Lite' && (
                          <Box
                            sx={{
                              marginLeft: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <StarIcon style={{ color: 'green' }} />
                          </Box>
                        )}
                      </Box>
                      <Typography variant="h5" align="center">
                        {plan.price}
                      </Typography>
                      {plan.priceNote && (
                        <Typography variant="body2" color="textSecondary" align="center">
                          {plan.priceNote}
                        </Typography>
                      )}
                      <Box mt={2}>
                        <List>
                          {plan.features.map((feature, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <CheckCircle style={{ color: 'green' }} />
                              </ListItemIcon>
                              <ListItemText primary={feature} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                      <Box display="flex" justifyContent="center" mt={3}>
                        {plan.current ? (
                          <Button variant="contained" disabled>
                            Current Plan
                          </Button>
                        ) : (
                          <Button variant="contained" onClick={() => navigate('/payment')}>
                            Choose Plan
                          </Button>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Billing;
