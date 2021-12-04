import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type OrderQuery = string;

export default function MyOrder() {
  const [orderQuery, setOrderQuery] = useState<OrderQuery>('');
  const [finalQuery, setFinalQuery] = useState<OrderQuery>('');
  const [orders, setOrders] = useState([]);

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
    </Container>
  );
}
