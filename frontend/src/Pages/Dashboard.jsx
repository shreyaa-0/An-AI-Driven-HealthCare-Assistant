import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  IconButton,
  LinearProgress,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Components/Assets/Preview.png";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    handleMenuClose();
  };

  const handleUpgrade = () => {
    navigate("/billing");
  };
  const handleConsultDoctors = () => {
    navigate("/consult-doctors");
  };
  const handleLabTest = () => {
    navigate("/test-result");
  };
  const handleAppointment = () => {
    navigate("/appointment");
  };

  return (
    <Box
    sx={{
      minHeight: "100vh",
      width: "100%",
      background: `url('https://img.lovepik.com/background/20211022/large/lovepik-simple-geometric-background-image_401860967.jpg') no-repeat center center fixed`,
      backgroundSize: 'cover',
    }}
  >
      {/* Header */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          bgcolor: "#f4f4f4",
          paddingY: 2,
          paddingX: 4,
          zIndex: 1000,
        }}
      >
        <Container maxWidth="lg" sx={{ padding: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Left Section */}
            <img src={logo} alt="Logo" style={{ height: "60px", paddingRight: "690px" }} />

            {/* Right Section */}
            <Box display="flex" alignItems="center">
              <Button
                variant="contained"
                sx={{
                  marginRight: 2,
                  bgcolor: "teal",
                  '&:hover': {
                    bgcolor: "#2F4F4F",
                  },
                }}
                onClick={handleUpgrade}
              >
                Upgrade
              </Button>

              <IconButton color="primary" sx={{ marginRight: 2, color: "#004d40" }}>
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="primary" onClick={handleMenuOpen} sx={{ color: "#004d40" }}>
                <AccountCircleIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleNavigation("/help-support")}>
                  Help & Support
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/billing")}>
                  Billing
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/account-settings")}>
                  Account Settings
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/sign-in")}>
                  Signout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ paddingY: 1 }}>
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12}>
          <Card sx={{ bgcolor: "white",height: "100px",color: "black" }}>
  <CardActionArea onClick={() => navigate("/profile")}>
    <CardContent>
      <Box display="flex" alignItems="center" height="100%" >
        <Box>
          <Typography variant="h5" sx={{ color: "black" }}><br />
            Your Health Profile
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </CardActionArea>
</Card>

          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#d0f0c0" }}>
              <CardActionArea
                component="a"
                href="https://you.com/"
                target="_blank"
                rel="noopener"
              >
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://my.docus.ai/_next/static/media/personal-ai-doctor.4cac7154.svg"
                      alt="AI Doctor"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">
                        Your Personal AI Doctor-Chat
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#f8d7da" }}>
              <CardActionArea onClick={() => navigate("/health-risks")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://my.docus.ai/_next/static/media/health-risks-icon.07b2a12d.svg"
                      alt="Health Risks"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6" color="error">
                        Health Risks
                      </Typography>
                      <Typography variant="body2" color="error">
                        5 risks detected
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#d0f0c0" }}>
              <CardActionArea onClick={() => navigate("/supplements")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://my.docus.ai/_next/static/media/supplements-icon.800a265c.svg"
                      alt="Supplements"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Supplements</Typography>
                      <LinearProgress
                        variant="determinate"
                        value={60}
                        sx={{ width: "100%", mt: 1 }}
                      />
                      <Typography variant="body2" sx={{ color: "black" }}>
                        60% completed
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#FFE4E1" }}>
              <CardActionArea onClick={handleAppointment}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn.papershift.com/20221130212527/time-off-eligibility-for-medical-appointments-for-employees-in-UK-explained-by-Papershift-910x500.jpeg"
                      alt="Appointments"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Appointments</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Book your Appointment
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#fff5e6" }}>
              <CardActionArea onClick={() => navigate("/health-monitoring")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Health Monitoring"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Health Monitoring</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Track your health metrics
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#e6e6fa" }}>
              <CardActionArea onClick={() => navigate("/health-tips")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Personal Tips"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Personal Health Tips</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Get personalized tips
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#e0ffff" }}>
              <CardActionArea onClick={() => navigate("/medical-records")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Medical Records"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Medical Records</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Manage your medical history
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#fffacd" }}>
              <CardActionArea onClick={() => navigate("/emergency-assistance")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Emergency Assistance"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Emergency Assistance</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Get immediate help
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#d3d3d3" }}>
              <CardActionArea onClick={() => navigate("/mental-health")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Mental Health"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Mental Health Reports</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        View mental health insights
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#f5f5f5" }}>
              <CardActionArea onClick={() => navigate("/lifestyle-tracking")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Lifestyle Tracking"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Lifestyle Tracking</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Track your daily habits
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#faebd7" }}>
              <CardActionArea onClick={() => navigate("/hospitals")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Hospitals"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Nearby Hospitals</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Find hospitals near you
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: "#ffebcd" }}>
              <CardActionArea onClick={() => navigate("/supplement-delivery")}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <img
                      src="https://cdn1.iconfinder.com/data/icons/medicine-pt-4-1/100/026_-_health_care_healthcare_plus_cross_hospital-512.png"
                      alt="Supplement Delivery"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "16px",
                      }}
                    />
                    <Box>
                      <Typography variant="h6">Supplement Delivery</Typography>
                      <Typography variant="body2" sx={{ color: "black" }}>
                        Get supplements delivered
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
