import { useForm, SubmitHandler } from "react-hook-form";
import { CartInfo } from '../interfaces';

type CheckoutRHFProps = {
  cart: CartInfo[];
}

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  address: string,
}

const CheckoutRHF = ({ cart }: CheckoutRHFProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (contactInfo) => {
    console.log(contactInfo);
    cart.forEach((entry) => {
      console.log(entry.item.title);
      console.log(entry.quantity);
    })
  }

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" {...register('firstName')} />

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" {...register('lastName')} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register('email', { required: 'An email is required to submit an order!' })} />
        {errors.email && <p>{errors.email.message}</p>}

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

export default CheckoutRHF;
