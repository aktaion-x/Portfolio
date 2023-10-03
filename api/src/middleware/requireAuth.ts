import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ success: false, message: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    // @ts-expect-error - Passing
    const { _id } = jwt.verify(token, process.env.SECRET_KEY!);

    req.user = await User.findOne({ _id }).select("_id");
    console.log("User ID is:", _id);
    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({ error: error.message });
    }
  }
};

export default requireAuth;
