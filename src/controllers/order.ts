import { Response, Request } from 'express';
import { Order, OrderDocument } from '../models/Order';

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: OrderDocument[] = await Order.find();
    res.status(200).json(orders)
  } catch (error) {
    console.error(error);
  }
}

export const addOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<OrderDocument, 'name' | 'email' | 'address' | 'item' | 'quantity'>

    const order: OrderDocument = new Order({
      name: body.name,
      email: body.email,
      address: body.address,
      item: body.item,
      quantity: body.quantity
    })
    const newOrder: OrderDocument = await order.save();
    const allOrders: OrderDocument[] = await Order.find();
    res
      .status(201)
      .json({ message: 'New Order In', order: newOrder, orders: allOrders })
  } catch (error) {
    console.error(error);
  }
}

export const updateOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req
    await Order.findByIdAndUpdate(id, body);
    const updatedOrder: OrderDocument = await Order.findById(id);
    res.status(200).json({
      message: 'Order updated',
      updatedOrder: updatedOrder
    });
  } catch (error) {
    console.error(error);
  };
}