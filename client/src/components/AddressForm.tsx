import { useState } from 'react';
import SharedAddressForm from './SharedAddressForm';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type AddressProps = {
  handleShippingForm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AddressForm({ handleShippingForm }: AddressProps) {
  const [checked, setChecked] = useState(true);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(!checked);
    handleShippingForm(e);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <SharedAddressForm handleShippingForm={handleShippingForm} />
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value={checked} onChange={handleCheckbox} />}
            label="Same as billing address"
          />
        </Grid>
      </Grid>
    </>
  );
}