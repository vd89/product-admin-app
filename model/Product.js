import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    status: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: 'category', required: true },
    images: [
      {
        type: String,
      },
    ],
    variant: [
      {
        name: { type: String, trim: true, required: true },
        price: { type: Number, trim: true, required: true },
        img: [{ type: String }],
      },
    ],
  },
  { timestamps: true }
);

class Product {}
productSchema.loadClass(Product);
export default model('product', productSchema);
