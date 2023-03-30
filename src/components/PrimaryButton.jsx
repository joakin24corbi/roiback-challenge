import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
  height: '60px',
  borderRadius: 8
}));

/**
 * Component to print a button with styles
 * @param {String} type if it contains information, it will be assigned to the button type, if it does not, the default button type will be established
 * @param {Function} onClick if it contains information, it will be assigned to the onClick button function
 * @param {String} children is the child of the component, which should be the text of the button
 * @param {Object} props the rest of the properties assigned to the component, such as styles
 * @component
 */
const PrimaryButton = ({ type, onClick, children, ...props }) => {
  return (
    <Button
      type={type ?? 'button'}
      variant='contained'
      fullWidth
      onClick={onClick ?? null}
      {...props}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton;
