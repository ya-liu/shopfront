import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Order {
  name: string;
  email: string;
  address: string;
  item: string;
  quantity: number;
}

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

run().catch(err => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017/test');
  console.log('connected to mongoose')

  const doc = new OrderModel({
    name: 'HP',
    email: 'hp@hp.com',
    address: '1 Central Road, HK, 201302',
    item: 'Ethiopia Ada',
    quantity: 2
  })
  await doc.save();

  console.log(doc.email);
}