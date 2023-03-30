import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import HomeModal from './HomeModal';
import { useEffect } from 'react';
import { logout } from 'utils/Logout';

/**
 * Component for showing offers to the user.
 * Only can access the registered user
 *
 * @component
 */
const Home = () => {
  const dispath = useDispatch();
  let location = useLocation();
  const navigate = useNavigate();

  const [fromSignup, setFromSignup] = useState(false);

  const clearState = () => {
    navigate(location.pathname, { replace: true, state: null });
    location.state = null;
    // TODO not working fine
  }
  
  useEffect(() => {
    // Check if the user came from the registration page to display the modal. If it comes from there we clean the state so that the modal is not displayed when refreshing
    location.state &&
    location.state.user
      ? setFromSignup(true) && clearState()
      : setFromSignup(false);
      
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="md">
      <Button
        onClick={() => logout(dispath, navigate)}
      >
        Logout
      </Button>
      <Typography variant="h3">
        HOME
      </Typography>
      <HomeModal fromSignup={fromSignup} />
    </Container>
  )
}

export default Home;