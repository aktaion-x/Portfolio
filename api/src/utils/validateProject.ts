import mongoose from "mongoose";
import { IProjectRequest } from "../models/Project";

export const validateProject = (project: IProjectRequest) => {
  const { name, technologies, description, features, links, order } = project;
  if (!name || technologies.length === 0 || !description || !features || Object.keys(links).length === 0 || !order) {
    throw Error("All filed must be filled")
  }
}

export const isAdmin = (userId: string) => {
  const senderId = userId.toString();
  const adminId = new mongoose.Types.ObjectId(process.env.ADMIN_ID!).toString()
  if (senderId !== adminId) {
    throw Error("Unauthorized access!")
  }
}