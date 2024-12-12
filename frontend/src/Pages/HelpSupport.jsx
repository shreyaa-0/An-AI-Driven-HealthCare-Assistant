import { Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Components/Assets/Preview.png';
import './HelpSupport.css'; // Import the CSS file


const HelpSupport = () => {
    const navigate = useNavigate();

    const handleOpenTicket = () => {
        navigate('/ticket');
    };

    return (
        <>  
                <img src={logo} alt="Logo" className="logo" />

        <Container sx={{ padding: 4, backgroundColor: theme => theme.palette.background.default }} maxWidth="md">
            <Typography variant="h4" sx={{ marginBottom: 4 }}>
                Help & Support
            </Typography>
            
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', margin: 2 }}>
                <Typography variant="h6">Support Tickets</Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    No Tickets Yet
                </Typography>
                <Typography variant="body1" paragraph>
                    Have questions or suggestions? Our support team is here to help. Reach out with any concerns or ideas!
                </Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleOpenTicket}>
                    Open New Ticket
                </Button>
            </Paper>
        </Container>
        </>
    );
};

export default HelpSupport;
