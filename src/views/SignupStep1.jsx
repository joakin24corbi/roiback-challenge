import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import BounceLoader from "react-spinners/BounceLoader";
import { Link } from 'react-router-dom';
import { Div } from './_SignupStep1';
import { getProfiles } from 'api/profiles.api';
import { uri_home } from 'router/Routes';

/**
 * Step 1 component of the signup page.
 * Retrieves the profiles from the back and lists them for the user to select the appropriate one.
 * @param {Function} handleProfileChange function to modify the variable that contains the profile selected by the user, to be able to send it to the next step
 * @component
 */
const SignupStep1 = ({ handleProfileChange }) => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const doGetProfiles = async () => {
      try {
        const response = await getProfiles();
        setProfiles(response.data);
      } finally {
        setLoading(false);
      }
    };

    doGetProfiles();
  }, [])

  return (
    <Container maxWidth="md">
      <Div>
        <Typography
          variant='h5'
          sx={{ margin: '80px 0px 40px' }}
        >
          Sign Up
        </Typography>
        <Typography>
          What kind of user are you?
        </Typography>
        {loading
          ? <Box sx={{ marginTop: '40px' }}>
              <BounceLoader />
            </Box>
          : profiles.map((profile) => (
              <Button
                key={profile.id}
                onClick={() => handleProfileChange(profile.id)}
                variant='outlined'
                fullWidth
                sx={{ margin: '20px 0px 0px' }}
              >
                {profile.text}
              </Button>
            ))
        }
        <Link
          to={uri_home}
          style={{ margin: '240px 0px 0px' }}
        >
          Are you registered?
        </Link>
      </Div>
    </Container>
  )
}

export default SignupStep1;