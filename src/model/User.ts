import mongoose, { Schema, Document, Model } from "mongoose";

// Define an interface that represents a document in MongoDB.
interface IUser extends Document {
  fullname: string;
  username: string;
  password: string;
  email: string;
  update_at: Date;
}

// Create the schema corresponding to the document interface.
const UserSchema: Schema<IUser> = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model based on the schema and interface.
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;