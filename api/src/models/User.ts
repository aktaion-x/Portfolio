import mongoose, { Model } from "mongoose";

const Schema = mongoose.Schema;

export interface IUser {
  _id: string;
  email: string;
  password: string;

}

export interface IUserDocument extends IUser {
  _doc: any
}

const UserSchema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


export default mongoose.model<IUserDocument>("User", UserSchema);
