import { Dialog } from '@mui/material';
import { PopupTransition } from 'components/@extended/Transitions';
import AddForm from './AddForm';

const Add = ({openForm, onOpenAddForm, customer}) => {
  return (
    <Dialog
      maxWidth="sm"
      TransitionComponent={PopupTransition}
      keepMounted
      fullWidth
      onClose={onOpenAddForm}
      open={openForm}
      sx={{ '& .MuiDialog-paper': { p: 0 }, transition: 'transform 225ms' }}
      aria-describedby="alert-dialog-slide-description"
    >
      <AddForm  customer={customer} onCancel={onOpenAddForm}/>
    </Dialog>
  );
};

export default Add;
