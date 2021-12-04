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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      onSubmit();
    };
  }

  const searchForOrder = (email: string): void => {
    axios.get(`api/order/?email=${email}`)
      .then((res) => setOrders(res.data))
      .catch((error) => console.error(error))
  }

  const deleteOrder = (orderId: string): void => {
    axios.delete(`api/orders/${orderId}`)
      .then((res) => console.log(res.data.message))
      .then(() => searchForOrder(orderQuery))
      .catch((error) => console.error(error))
  }

  const makeReadableAddress = (...args: string[]): string => {
    return args.join(', ');
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        Manage My Orders
      </Typography>
      <br />
      <Grid container>
        <Grid item sm={10}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Enter your email"
            onChange={onChange}
            onKeyPress={handleKeyPress}
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
        orders.map((order: MongoOrder) => (
          <Fragment key={order._id}>
            <Grid container rowSpacing={1} columnSpacing={2} sx={{ borderBottom: 0.5, borderColor: 'text.primary' }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Shipping Info
                </Typography>
                <Typography gutterBottom>{order.firstName.concat(' ', order.lastName)}</Typography>
                <Typography gutterBottom>{order.address2 ? makeReadableAddress(order.address1, order.address2, order.city, order.state, order.zip, order.country) : makeReadableAddress(order.address1, order.city, order.state, order.zip, order.country)}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Order Info
                </Typography>
                {order.orderContent.map((content) => (
                  <Fragment key={content._id}>
                    <Typography gutterBottom>{content.item}</Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary">Quantity: {content.quantity}</Typography>
                  </Fragment>
                ))}
              </Grid>
              <Grid item xs={6}>
                <Button>Edit Order</Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={() => deleteOrder(order._id)}>Delete Order</Button>
              </Grid>
            </Grid>
          </Fragment>
        ))
        : (
          <></>
        )}
    </Container>
  );
}
