import { connect, connection, model, Schema } from 'mongoose';
import Order from '../types';

// 1. Create an interface representing a document in MongoDB.
// Saved in types.ts

// 2. Create a Schema corresponding to the document interface.
const orderSchema = new Schema<Order>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true }
});

// 3. Create a Model.
const OrderModel = model<Order>('Order', orderSchema);

// 4. Connect to MongoDB
connect('mongodb://localhost:27017/shopfront');

const db = connection;

db.on('error', () => {
  console.log('Error when connecting to MongoDB');
})

db.on('open', () => {
  console.log('Connected to MongoDB');
})

let save = (order:Order) => {
  const doc = new OrderModel({
    name: order.name,
    email: order.email,
    address: order.address,
    item: order.item,
    quantity: order.quantity
  })

  return doc.save();
}

let findAll = () => {
  return OrderModel.find({}).exec();
}

export default {save, findAll};
