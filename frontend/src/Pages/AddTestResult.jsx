import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Autocomplete, createFilterOptions } from "@mui/material";

import logo from "../Components/Assets/Preview.png";
import "./AddTestResult.css"; // Import the CSS file

const AddTestResult = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <img src={logo}></img>

      <Box className="container">
        <Box className="header" sx={{ bgcolor: "#f4f4f4" }}>
          <Typography variant="h6" component="span">
            New Lab Test
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" className="note">
          Note: Only text-based results are accepted. No imaging (e.g., CT,
          X-ray, MRI).
        </Typography>
        <Box component="form" onSubmit={handleSubmit} className="formContainer">
          <TextField
            fullWidth
            select
            label="Choose the test result type"
            variant="outlined"
            margin="normal"
            required
          >
            <MenuItem value="blood">Blood Test</MenuItem>
            <MenuItem value="urine">Urine Test</MenuItem>
            <MenuItem value="cholesterol">Cholesterol Test</MenuItem>
            <MenuItem value="cholesterol">Semen Analysis</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Select test date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            margin="normal"
            required
          />
          <Button
            variant="outlined"
            component="label"
            fullWidth
            className="submitButton"
          >
            Attach Test Result
            <input
              type="file"
              accept="application/pdf, image/png, image/jpeg"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          {selectedFile && (
            <Typography variant="body2" color="textSecondary">
              {selectedFile.name}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary">
            PDF, PNG or JPEG, max 15MB, max 3 pages
          </Typography>
          <TextField
            fullWidth
            label="Additional Information (optional)"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            className="submitButton"
          >
            Submit & Start Analysis
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddTestResult;
