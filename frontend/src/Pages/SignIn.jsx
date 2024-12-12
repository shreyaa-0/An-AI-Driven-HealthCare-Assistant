// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
// import { default as React, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from "../Components/Assets/Preview.png";
// import './SignIn.css';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const navigate = useNavigate();

//   const handleSignin = async (e) => {
//     e.preventDefault();

//     const signinData = {
//       username,
//       email,
//       password,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signinData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Sign-in successful:', data);
//         // Handle successful sign-in, such as redirecting to another page
//       } else {
//         console.error('Sign-in failed:', response.statusText);
//         // Handle sign-in error, such as displaying an error message
//       }
//     } catch (error) {
//       console.error('Error during sign-in:', error);
//       // Handle network or other errors
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" className="main-container">
//       <Box className="signin-box">
//         <a href="/">
//           <img src={logo} alt="Logo" className="signin-logo" />
//         </a>
//         <Typography component="h1" variant="h5" className="signin-header">
//           Welcome back!
//         </Typography>
//         <Box className="signin-form">
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Email Address"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Box>
//         <Box className="signin-links">
//           <Link href="/forgot-password" variant="body2" className="forgot-password">
//             Forgot password?
//           </Link>
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={handleSignin} // Updated to match the function name
//             className="signin-button"
//           >
//             Sign In
//           </Button>
//         </Box>
//         <Typography variant="body2" color="textSecondary" align="center" className="signin-footer">
//           Don’t have an account?{' '}
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={() => navigate('/sign-up')} // Navigate to SignUp page
//             className="signup-button"
//           >
//             Sign Up
//           </Button>
//         </Typography>
//         <Typography variant="body2" color="textSecondary" align="center" className="signin-or">
//           OR
//         </Typography>
//         <Box className="social-login">
//           <Button fullWidth variant="outlined" className="google-button" startIcon={<GoogleIcon />}>
//             Continue with Google
//           </Button>
//           <Button fullWidth variant="outlined" className="facebook-button" startIcon={<FacebookIcon />}>
//             Continue with Facebook
//           </Button>
//           <Button fullWidth variant="outlined" className="twitter-button" startIcon={<TwitterIcon />}>
//             Continue with X (Twitter)
//           </Button>
//         </Box>
//         <Typography variant="body2" color="textSecondary" align="center" className="signin-terms">
//           By signing in you agree to the{' '}
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

// export default SignIn;





import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { default as React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../Components/Assets/Preview.png";
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    const signinData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signinData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Sign-in successful:', data);
        navigate('/'); // Redirect to the home page upon successful sign-in
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setErrorMessage('Error during sign-in. Please try again.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="main-container">
      <Box className="signin-box">
        <a href="/">
          <img src={logo} alt="Logo" className="signin-logo" />
        </a>
        <Typography component="h1" variant="h5" className="signin-header">
          Welcome back!
        </Typography>
        <Box className="signin-form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box className="signin-links">
          <Link href="/forgot-password" variant="body2" className="forgot-password">
            Forgot password?
          </Link>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignin}
            className="signin-button"
          >
            Sign In
          </Button>
        </Box>
        {errorMessage && (
          <Typography color="error" align="center" className="error-message">
            {errorMessage}
          </Typography>
        )}
        <Typography variant="body2" color="textSecondary" align="center" className="signin-footer">
          Don’t have an account?{' '}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate('/sign-up')}
            className="signup-button"
          >
            Sign Up
          </Button>
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" className="signin-or">
          OR
        </Typography>
        <Box className="social-login">
          <Button fullWidth variant="outlined" className="google-button" startIcon={<GoogleIcon />}>
            Continue with Google
          </Button>
          <Button fullWidth variant="outlined" className="facebook-button" startIcon={<FacebookIcon />}>
            Continue with Facebook
          </Button>
          <Button fullWidth variant="outlined" className="twitter-button" startIcon={<TwitterIcon />}>
            Continue with X (Twitter)
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" align="center" className="signin-terms">
          By signing in you agree to the{' '}
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

export default SignIn;
