import { useState } from 'react';
import axios from 'axios';
import { CartInfo, AddressFormInputs, PaymentFormInputs } from '../interfaces';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';

const steps = ['Shipping information', 'Payment', 'Review your order'];

function getStepContent(step: number, cart: CartInfo[], total: number, shippingInfo: AddressFormInputs, paymentInfo: PaymentFormInputs, handleShippingForm: (e: React.ChangeEvent<HTMLInputElement>) => void, handlePaymentForm: (e: React.ChangeEvent<HTMLInputElement>) => void) {
  switch (step) {
    case 0:
      return <AddressForm handleShippingForm={handleShippingForm} />;
    case 1:
      return <PaymentForm handlePaymentForm={handlePaymentForm} />;
    case 2:
      return <Review cart={cart} total={total} shippingInfo={shippingInfo} paymentInfo={paymentInfo} />;
    default:
      throw new Error('Unknown step');
  }
}

type CheckoutProps = {
  cart: CartInfo[];
  total: number;
}

export default function Checkout({ cart, total }: CheckoutProps) {
  const [activeStep, setActiveStep] = useState(0);
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
    saveAddress: '',
  });

  const [paymentInfo, setPaymentInfo] = useState<PaymentFormInputs>({
    cardName: '',
    cardNumber: '',
    expDate: '',
  })

  // useEffect(() => {
  //   console.log(shippingInfo);
  //   console.log(paymentInfo)
  // }, [shippingInfo, paymentInfo])

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleShippingForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value
    });
  }

  const handlePaymentForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [id]: value
    });
  }

  const handleNewOrder = (): void => {
    const { firstName, lastName, email, address1, address2, city, state, zip, country } = shippingInfo;
    const cartForDB = cart.map((entry) => {
      return {
        item: entry.item.title,
        quantity: entry.quantity
      }
    });

    const body = {
      firstName,
      lastName,
      email,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      orderContent: cartForDB
    };
    // console.log(body);
    axios.post(`/api/orders`, body)
      .then((res) => {
        if (res.data === 'Failed to submit order') {
          alert(`Please enter all relevant fields in the form!`)
        }
      })
      .then(() => handleNext())
      .catch((error) => console.error(error))
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #{Math.floor(Math.random() * 10000 + 10000)}. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep, cart, total, shippingInfo, paymentInfo, handleShippingForm, handlePaymentForm)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ?
                    (<Button
                      variant="contained"
                      onClick={handleNewOrder}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Place Order
                    </Button>)
                    :
                    (<Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>)}
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </>
  );
}
