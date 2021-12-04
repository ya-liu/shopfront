import { useState, useEffect } from 'react';
import axios from 'axios';
import { MongoOrder } from '../interfaces';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type OrderQuery = string;

export default function MyOrder() {
  const [orderQuery, setOrderQuery] = useState<OrderQuery>('');
  const [finalQuery, setFinalQuery] = useState<OrderQuery>('');
  const [orders, setOrders] = useState<MongoOrder[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOrderQuery(e.target.value);
  }

  const onSubmit = (): void => {
    // e.preventDefault();
    setFinalQuery(orderQuery);
    searchForOrder(orderQuery);
  }

  const searchForOrder = (email: string): void => {
    axios.get(`api/order/?email=${email}`)
      .then((res) => setOrders(res.data))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    console.log(finalQuery);
    console.log(orders);
  }, [finalQuery, orders])

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        Manage My Orders
      </Typography>
      <Grid container>
        <Grid item sm={10}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Enter your email"
            onChange={onChange}
          />
        </Grid>
        <Grid item sm={2}>
          <Button
            type="submit"
            size="large"
            onClick={onSubmit}
          >
            Go!
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {orders.length > 0 ?
         (<Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{orders[0].firstName.concat(' ', orders[0].lastName)}</Typography>
          <Typography gutterBottom>{orders[0].address1}</Typography>
        </Grid>)
        : (
          <></>
        )}
      </Grid>
    </Container>
  );
}
