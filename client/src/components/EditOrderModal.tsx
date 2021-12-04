import { useState } from 'react';
import { MongoOrder } from '../interfaces';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 375,
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '1px solid #282c34',
  boxShadow: 24,
  p: 4,
};

type EditOrderModalProps = {
  order: MongoOrder;
}

export default function EditOrderModal({ order }: EditOrderModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit Order</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-edit-order"
        aria-describedby="modal-edit-order-form"
      >
        <Grid container sx={style}>
          <Grid item>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
          </Grid>
          <Grid>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </div>
  )
}