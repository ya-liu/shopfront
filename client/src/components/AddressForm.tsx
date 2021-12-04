import SharedAddressForm from './SharedAddressForm';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type AddressProps = {
  handleShippingForm: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AddressForm({ handleShippingForm }: AddressProps) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <SharedAddressForm handleShippingForm={handleShippingForm} />
      </Grid>
    </>
  );
}