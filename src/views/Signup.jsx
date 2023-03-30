import { useState } from 'react';
import { Stepper } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import SignupStep1 from './SignupStep1';
import SignupStep2 from './SignupStep2';
import { useTheme } from '@mui/material/styles';

function getSteps() {
  return [
    'Profile',
    'Fields'
  ];
}

/**
 * Component for register anonymous.
 * Only can access not logged users.
 * Consists of two components, one for each step of the form.
 *
 * @component
 */
const Signup = () => {
  const theme = useTheme();
  const steps = getSteps();
  
  const [activeStep, setActiveStep] = useState(0);
  const [profile, setProfile] = useState();

  const handleBack = () => {
    activeStep > 0 && setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const handleNext = () => {
    activeStep < steps.length - 1 && setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleProfileChange = (profile) => {
    setProfile(profile);
    handleNext();
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      />
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
        >
          <SignupStep1
            handleProfileChange={handleProfileChange}
          />
          <SignupStep2
            profile={profile}
            prevStep={handleBack}
          />
        </SwipeableViews>
    </div>
  )
}

export default Signup;