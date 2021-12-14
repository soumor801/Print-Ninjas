import Dialog from '@mui/material/Dialog'
import SignUp from './SignUp'

const ModalDialog = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} />
    
    </div>
  )
};

export default ModalDialog;