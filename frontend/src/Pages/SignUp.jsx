// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from "../Components/Assets/Preview.png";
// import './SignUp.css';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const navigate = useNavigate();

//   const handleSignUp = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     if (email && password && username) {
//       try {
//         const response = await axios.post('http://localhost:8080/api/register', {
//           email,
//           password,
//           username
//         });
//         if (response.status === 201) {
//           navigate('/sign-in'); // Redirect to sign-in page upon successful registration
//         }
//       } catch (error) {
//         console.error('Error during sign-up:', error);
//         alert('Error during sign-up. Please try again.');
//       }
//     } else {
//       alert('Please enter all required fields');
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" className="main-container">
//       <Box className="signup-box">
//         <a href="/">
//           <img src={logo} alt="Logo" className="signup-logo" />
//         </a>
//         <Typography component="h1" variant="h5" className="signup-header">
//           Create Your Account
//         </Typography>
//         <form onSubmit={handleSignUp}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="submit-button"
//           >
//             Sign Up
//           </Button>
//         </form>
//         <Box className="social-login">
//           <Button fullWidth variant="contained" className="google-button" startIcon={<GoogleIcon />}>
//             Sign Up with Google
//           </Button>
//           <Button fullWidth variant="contained" className="facebook-button" startIcon={<FacebookIcon />}>
//             Sign Up with Facebook
//           </Button>
//           <Button fullWidth variant="contained" className="twitter-button" startIcon={<TwitterIcon />}>
//             Sign Up with Twitter
//           </Button>
//         </Box>
//         <Typography variant="body2" color="textSecondary" align="center" className="signup-footer">
//           Already have an account?{' '}
//           <Link href="/sign-in" variant="body2">
//             Sign in
//           </Link>
//         </Typography>
//         <Typography variant="body2" color="textSecondary" align="center" className="signup-terms">
//           By signing up you agree to the{' '}
//           <Link href="/terms" variant="body2">
//             Terms of Use
//           </Link>
//           ,{' '}
//           <Link href="/privacy" variant="body2">
//             Privacy Policy
//           </Link>
//           , and{' '}
//           <Link href="/cookie" variant="body2">
//             Cookie Policy
//           </Link>
//           .
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;






import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Components/Assets/Preview.png";
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (email && password && username) {
      try {
        const response = await axios.post('http://localhost:8080/api/register', {
          email,
          password,
          username
        });

        if (response.status === 201) {
          navigate('/'); // Redirect to the home page upon successful registration
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        setErrorMessage('Error during sign-up. Please try again.');
      }
    } else {
      setErrorMessage('Please enter all required fields');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="main-container">
      <Box className="signup-box">
        <a href="/">
          <img src={logo} alt="Logo" className="signup-logo" />
        </a>
        <Typography component="h1" variant="h5" className="signup-header">
          Create Your Account
        </Typography>
        <form onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Sign Up
          </Button>
        </form>
        {errorMessage && (
          <Typography color="error" align="center" className="error-message">
            {errorMessage}
          </Typography>
        )}
        <Box className="social-login">
          <Button fullWidth variant="contained" className="google-button" startIcon={<GoogleIcon />}>
            Sign Up with Google
          </Button>
          <Button fullWidth variant="contained" className="facebook-button" startIcon={<FacebookIcon />}>
            Sign Up with Facebook
          </Button>
          <Button fullWidth variant="contained" className="twitter-button" startIcon={<TwitterIcon />}>
            Sign Up with Twitter
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" className="signup-footer">
          Already have an account?{' '}
          <Link href="/sign-in" variant="body2">
            Sign in
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" className="signup-terms">
          By signing up you agree to the{' '}
          <Link href="/terms" variant="body2">
            Terms of Use
          </Link>
          ,{' '}
          <Link href="/privacy" variant="body2">
            Privacy Policy
          </Link>
          , and{' '}
          <Link href="/cookie" variant="body2">
            Cookie Policy
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
