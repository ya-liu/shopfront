import { stripeKey } from '../../../config';

const stripe = require('stripe')(stripeKey);

export const main = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    payment_method_types: ['card'],
    receipt_email: 'jenny.rosen@example.com',
  });

  console.log(paymentIntent);
}
