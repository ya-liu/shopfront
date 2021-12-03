import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type AddressProps = {
  handleShippingForm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const validationSchema = yup.object({
  firstName: yup.string().defined(),
  lastName: yup.string().defined(),
  email: yup.string().email().required().email('Email is invalid'),
  address1: yup.string().defined(),
  address2: yup.string().nullable().defined(),
  city: yup.string().defined(),
  state: yup.string().defined(),
  zip: yup.string().defined(),
  country: yup.string().defined(),
  saveAddress: yup.string().defined(),
})

export default function AddressForm({ handleShippingForm }: AddressProps) {
  const [checked, setChecked] = useState(true);
  const { register, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            // name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            {...register('firstName')}
            error={errors.firstName ? true : false}
            onChange={handleShippingForm}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.firstName?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            type="email"
            // name="email"
            label="Email"
            fullWidth
            {...register('email')}
            variant="standard"
            error={errors.email ? true : false}
            onChange={handleShippingForm}
          />
          <Typography variant="inherit" color="textSecondary">
            {errors.email?.message}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleShippingForm}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value={checked} onChange={handleCheckbox} />}
            label="Same as billing address"
          />
          {/* <FormControlLabel
            control={
              <Controller
                name="saveAddress"
                control={control}
                defaultValue={String(checked)}
                render={({ field: { onChange } }) => (
                  <Checkbox onChange={handleCheckbox} />
                )}
              />
            }
            label={
              <Typography>
                Same as billing address
              </Typography>
            }
          /> */}
        </Grid>
      </Grid>
    </>
  );
}