import { Grid, Img, AnimatedGradientText } from './_SplashScreen';

/**
 * Component for showing loading screen to user while the website is loading data.
 *
 * @component
 */
const SplashScreen = () => {
  return (
    <Grid>
      <Img src='/images/logo.png' alt='splash' />
      <AnimatedGradientText>CARGANDO</AnimatedGradientText>
    </Grid>
  );
};

export default SplashScreen;