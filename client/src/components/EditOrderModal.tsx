import { useState } from 'react';
import { AddressFormInputs, MongoOrder } from '../interfaces';
import SharedAddressForm from './SharedAddressForm';
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

  const [shippingInfo, setShippingInfo] = useState<AddressFormInputs>({
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleShippingForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  };

  const handleSubmit = (): void => {
    console.log(shippingInfo);
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit Order</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-edit-order"
        aria-describedby="modal-edit-order-form"
      >
        <Grid container sx={style} rowSpacing={2}>
          <Grid item>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update your order here
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography id="modal-modal-description" sx={{ mb: 2 }}>
              Please fill out all content in the form.
            </Typography>
          </Grid>
          <SharedAddressForm handleShippingForm={handleShippingForm} />
          <Grid container justifyContent="flex-end" spacing={2} sx={{ mt: 1 }}>
            <Grid item>
              <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClose}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  )
}