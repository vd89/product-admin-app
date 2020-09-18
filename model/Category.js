import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    description: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
  },
  { timestamps: true }
);

export default model('Category', categorySchema);
