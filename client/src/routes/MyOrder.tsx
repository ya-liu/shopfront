import { useState, Fragment } from 'react';
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
  const [orders, setOrders] = useState<MongoOrder[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setOrderQuery(e.target.value);
  }

  const onSubmit = (): void => {
    searchForOrder(orderQuery);
  }

  const searchForOrder = (email: string): void => {
    axios.get(`api/order/?email=${email}`)
      .then((res) => setOrders(res.data))
      .catch((error) => console.error(error))
  }

  const makeReadableAddress = (...args: string[]): string => {
    return args.join(', ');
  }

  // useEffect(() => {
  //   console.log(finalQuery);
  //   console.log(orders);
  // }, [finalQuery, orders])

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
      {orders.length > 0 ?
        (<Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping Info
            </Typography>
            {orders.map((order) => (
              <Fragment key={order._id}>
                <Typography gutterBottom>{order.firstName.concat(' ', order.lastName)}</Typography>
                <Typography gutterBottom>{order.address2 ? makeReadableAddress(order.address1, order.address2, order.city, order.state, order.zip, order.state) : makeReadableAddress(order.address1, order.city, order.state, order.zip, order.state)}</Typography>
              </Fragment>
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Order Info
            </Typography>
            {orders.map((order) => (
              <Fragment key={order._id}>
                {order.orderContent.map((content) => (
                  <Fragment key={content.item}>
                    <Typography gutterBottom>{content.item}</Typography>
                    <Typography gutterBottom>Quantity: {content.quantity}</Typography>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Grid>
        </Grid>)
        : (
          <></>
        )}
    </Container>
  );
}
