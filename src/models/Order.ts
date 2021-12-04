import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface OrderDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  orderContent: ItemDetail[];
}

interface ItemDetail {
  item: string;
  quantity: number;
}

// 2. Create a Schema corresponding to the document interface.
const orderSchema = new mongoose.Schema<OrderDocument>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    orderContent: [{
      item: { type: String, required: true },
      quantity: { type: Number, required: true },
    }]
  },
  { timestamps: true },
);

// 3. Create a Model.
export const Order = mongoose.model<OrderDocument>('Order', orderSchema);
