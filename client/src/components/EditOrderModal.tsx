import { useState, Fragment } from 'react';
import { AddressFormInputs, MongoOrder, ItemDetail } from '../interfaces';
import SharedAddressForm from './SharedAddressForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

  const [newContent, setNewContent] = useState<ItemDetail[]>(order.orderContent);

  const handleShippingForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  };

  const handleContentEdit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string): void => {
    const { value } = e.target;
    const copy = newContent.slice();
    copy.forEach((entry) => {
      if (entry._id === id) {
        entry.quantity = Number(value);
      }
    })
    setNewContent(copy);
  };


  const handleSubmit = (): void => {
    console.log(shippingInfo);
    console.log(newContent);
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
            <Typography id="modal-modal-description">
              Please fill out all content in the form.
            </Typography>
          </Grid>
          <SharedAddressForm handleShippingForm={handleShippingForm} />
          <Grid container direction="column">
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Order Info
            </Typography>
            {order.orderContent.map((content) => (
              <Grid container justifyContent="space-between">
                <Fragment key={content._id}>
                  <Grid item>
                    <Typography>{content.item}</Typography>
                    <Typography variant="body2" color="text.secondary">Quantity: {content.quantity}</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      size="small"
                      label="Update Quantity"
                      helperText="Enter 0 to remove item from the order"
                      name="quantity"
                      onChange={(e) => handleContentEdit(e, content._id)}
                    />
                  </Grid>
                </Fragment>
              </Grid>
            ))}
          </Grid>
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