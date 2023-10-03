import { Request, Response } from "express"
import bcrypt from 'bcrypt'
const jwt = require("jsonwebtoken");
import User, { IUser } from "../models/User"

export const loginUser = async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;
  try {

    if (!email || !password) {
      throw Error("All filed must be filled")
    }
    const user = await User.findOne({ email })
    if (!user) {
      throw Error("Incorrect email or password!")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error("Incorrect email or password!")
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "3d"
    });

    return res.status(200).json({
      data: {
        user: { ...user._doc },
        token
      }
    });

  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
    return res.status(400).json({ error })
  }
}
export const createUser = async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;
  console.log("req.body:: ", req.body);

  try {
    if (!email || !password) {
      throw Error("All filed must be filled")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const isExists = await User.findOne({ email })
    if (isExists) {
      throw Error("Email already exists!")
    }
    const user = await User.create({
      email,
      password: hash
    })
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "3d"
    });
    return res.status(200).json({
      data: {
        user: { ...user._doc },
        token
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
    return res.status(400).json({ error })
  }
}