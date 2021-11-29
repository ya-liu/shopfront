import mongoose from 'mongoose';

// 1. Create an interface / type representing a document in MongoDB.
export type OrderDocument = mongoose.Document & {
  name: string;
  email: string;
  address: string;
  item: string;
  quantity: number;
}


// 2. Create a Schema corresponding to the document interface.
const orderSchema = new mongoose.Schema<OrderDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true }
});

// 3. Create a Model.
const OrderModel = mongoose.model<OrderDocument>('Order', orderSchema);

// 4. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/shopfront');

const db = mongoose.connection;

db.on('error', () => {
  console.log('Error when connecting to MongoDB');
})

db.on('open', () => {
  console.log('Connected to MongoDB');
})

export const save = (order:OrderDocument) => {
  const doc = new OrderModel({
    name: order.name,
    email: order.email,
    address: order.address,
    item: order.item,
    quantity: order.quantity
  })

  return doc.save();
}

export const findAll = () => {
  return OrderModel.find({}).exec();
}

