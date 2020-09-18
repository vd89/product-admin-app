import { Schema, model } from 'mongoose';

const categorySchema = new Schema(
  {
    name: { type: String, trim: true, required: true, unique: true },
  },
  { timestamps: true }
);

export default model('Category', categorySchema);
