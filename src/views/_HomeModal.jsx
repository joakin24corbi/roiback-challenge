import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export const ModalBody = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minHeight: 250,
  background: theme.palette.background.paper,
  borderRadius: 12,
  boxShadow: 24,
  
  "&:focus-visible": {
    outline: 'none'
  },

  [theme.breakpoints.down("sm")]: {
    width: '90vw'
  },
}));

export const ModalTop = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.light,
  borderRadius: '12px 12px 0px 0px',
  position: 'relative',
  minHeight: '100px',
  display: 'flex',
  justifyContent: 'center'
}));

export const ModalTopTextWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ModalCloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'absolute',
  top: '3px',
  right: '3px'
}));

export const IconWrapper = styled('span')(({ theme }) => ({
  background: theme.palette.grey[300],
  borderRadius: '50%',
  position: 'absolute',
  height: '60px',
  width: '60px',
  bottom: '-30px',
  left: 'calc(50% - 30px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const ModalBottom = styled(Box)(({ theme }) => ({
  padding: 60,

  [theme.breakpoints.down("sm")]: {
    padding: '45px 30px 30px 30px',
  },
}));
