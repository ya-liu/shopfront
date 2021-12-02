import { useForm, SubmitHandler } from "react-hook-form";
import { CartInfo } from '../interfaces';

type CheckoutProps = {
  cart: CartInfo[];
}

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  address: string,
}

const Checkout = ({ cart }: CheckoutProps) => {
  const { register, handleSubmit, watch } = useForm<Inputs>();

  // formState: { errors }
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch('firstName'));

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" {...register('firstName')} />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" {...register('lastName')} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', { required: true })} />

        <label htmlFor="address">Address:</label>
        <input id="address" {...register('address')} />
        <input type="submit" />
      </form>
      <div>
        {cart[0].quantity}
      </div>
    </div>
  )
}

export default Checkout;
