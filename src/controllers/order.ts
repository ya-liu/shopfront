import { Response, Request } from 'express';
import { Order, OrderDocument } from '../models/Order';

export const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders: OrderDocument[] = await Order.find();
    res.status(200).json(orders)
  } catch (error) {
    console.error(error);
    res.end();
  }
}

export const getOneOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.query;
    const order: OrderDocument[] = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.end();
  }
}

export const addOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as OrderDocument;

    const order: OrderDocument = new Order({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      address1: body.address1,
      address2: body.address2,
      city: body.city,
      state: body.state,
      zip: body.zip,
      country: body.country,
      orderContent: body.orderContent,
    })
    const newOrder: OrderDocument = await order.save();
    const allOrders: OrderDocument[] = await Order.find();
    res.status(201).json({ message: 'New Order In', order: newOrder, orders: allOrders })
  } catch (error) {
    console.error(error);
    res.end('Failed to submit order');
  }
}

export const updateOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    await Order.findByIdAndUpdate(id, body);
    const updatedOrder: OrderDocument | null = await Order.findById(id);
    res.status(200).json({
      message: 'Order updated',
      updatedOrder
    });
  } catch (error) {
    console.error(error);
    res.end();
  };
}

export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedOrder: OrderDocument | null = await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Order deleted',
      deleteOrder: deletedOrder
    });
  } catch (error) {
    console.error(error);
    res.end();
  }
}
