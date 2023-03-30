import { styled } from '@mui/material/styles';
import { Grid as MGrid } from '@mui/material';
import { keyframes } from "@emotion/react";

export const Grid = styled(MGrid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Img = styled('img')(({ theme }) => ({
  margin: theme.spacing(3),
  maxWidth: '280px'
}));

const shine = keyframes`
  0% {
    background-position: 200% center;
  }
`;

export const AnimatedGradientText = styled('h1')(() => ({
  textAlign: 'center',  
  background: 'linear-gradient(to right, #ff9900 20%, #ffb13d 40%, #ffca7a 60%, #ffb13d 80%, #ffca7a 100%)',
  backgroundSize: '200% auto',  
  color: '#000',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',  
  animation: `${shine} 1s linear infinite`
}));
