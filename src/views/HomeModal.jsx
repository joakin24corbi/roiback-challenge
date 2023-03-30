import { useEffect, useState } from 'react';
import { Typography, Modal as MuiModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PrimaryButton from 'components/PrimaryButton';
import { ModalBody, ModalTop, ModalTopTextWrapper, ModalCloseButton, IconWrapper, ModalBottom } from './_HomeModal';

/**
 * Component to show welcome modal when user signs up
 * @param {Boolean} fromSignup boolean indicating if the user came from the registration page
 * @component
 */
const HomeModal = ({ fromSignup }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(fromSignup);
  }, [fromSignup])

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBody>
        <ModalTop>
          <ModalCloseButton
            onClick={handleClose}
          >
            <CloseIcon />
          </ModalCloseButton>
          <IconWrapper>
            <TaskAltIcon color='primary' fontSize='large' />
          </IconWrapper>
          <ModalTopTextWrapper>
            <Typography variant="h6" color='white'>
              Thank you!
            </Typography>
          </ModalTopTextWrapper>
        </ModalTop>
        <ModalBottom>
          <Typography id="modal-modal-description" color='gray'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, risus felis ac ultrices cum tristique nascetur eget, pellentesque fermentum est orci eleifend interdum.
          </Typography>
          <PrimaryButton
            onClick={handleClose}
            style={{ marginTop: '40px' }}
          >
            Continue
          </PrimaryButton>
        </ModalBottom>
      </ModalBody>
    </MuiModal>
  )
}

export default HomeModal;