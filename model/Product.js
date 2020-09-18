import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    status: { type: Boolean, default: false },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    variant: [
      {
        variantName: { type: String, trim: true, required: true },
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
