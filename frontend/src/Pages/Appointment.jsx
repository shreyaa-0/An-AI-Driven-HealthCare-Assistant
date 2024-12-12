import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../Components/Assets/Preview.png";
import "./Appointment.css"; // Import the CSS file

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentType: "",
    date: "",
    time: "",
    videoCall: false,
    additionalInfo: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
      <Box className="appointment-container">
        <Typography variant="h4" className="appointment-header">
          Book an Appointment
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="appointment-form"
        >
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            type="tel"
            fullWidth
            required
          />
          <TextField
            select
            label="Appointment Type"
            name="appointmentType"
            value={formData.appointmentType}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          >
            <MenuItem value="general">General Consultation</MenuItem>
            <MenuItem value="specialist">Specialist Consultation</MenuItem>
            <MenuItem value="followup">Follow-Up</MenuItem>
          </TextField>
          <TextField
            label="Appointment Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Appointment Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            type="time"
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.videoCall}
                onChange={handleChange}
                name="videoCall"
                color="primary"
              />
            }
            label="Request Video Call Consultation"
          />
          <TextField
            label="Additional Information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Appointment;
