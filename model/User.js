import { genSaltSync, hashSync } from 'bcrypt';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true },
    mobileNumber: { type: String, trim: true },
    avatar: { type: String },
  },
  { timestamps: true }
);

class User {
  async setPassword(password) {
    const salt = genSaltSync(12);
    this.password = hashSync(password, salt);
    await this.save();
  }
}
userSchema.loadClass(User);

export default model('user', userSchema);
