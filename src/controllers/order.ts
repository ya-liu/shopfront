import { Order, OrderDocument } from '../models/Order';

export const save = (order: OrderDocument) => {
  const doc = new Order({
    name: order.name,
    email: order.email,
    address: order.address,
    item: order.item,
    quantity: order.quantity
  })

  return doc.save();
}

export const findAll = () => {
  return Order.find({}).exec();
}
