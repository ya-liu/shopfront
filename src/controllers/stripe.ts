import dotenv from 'dotenv';
dotenv.config();

const stripe = require('stripe')(process.env.stripeKey);

export const stripeSample = async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
    payment_method_types: ['card'],
    receipt_email: 'jenny.rosen@example.com',
  });

  return paymentIntent;
}
