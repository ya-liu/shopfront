import * as React from 'react';
import { CartInfo, AddressFormInputs, PaymentFormInputs } from '../interfaces';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

type ReviewProps = {
  cart: CartInfo[];
  total: number;
  shippingInfo: AddressFormInputs;
  paymentInfo: PaymentFormInputs
}

export default function Review({ cart, total, shippingInfo, paymentInfo }: ReviewProps) {
  const { address1, address2, city, state, zip, country } = shippingInfo;
  let address;
  !shippingInfo.address2 ? address = [address1, city, state, zip, country] : address = [address1, address2, city, state, zip, country];

  const { cardName, cardNumber, expDate } = paymentInfo;
  const displayNumber = cardNumber.slice(-4);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((entry) => (
          <ListItem key={entry.item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={entry.item.title} secondary={`Quantity: ${entry.quantity}`} />
            <Typography variant="body2">{`$${entry.item.variants[0].price}`}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {`$${total}`}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{shippingInfo.firstName.concat(' ', shippingInfo.lastName)}</Typography>
          <Typography gutterBottom>{address.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Holder Name</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Last 4 digits:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{displayNumber}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
