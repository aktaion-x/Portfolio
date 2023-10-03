import Project, { IProjectRequest } from "../models/Project"
import { Request, Response } from "express"
import cloudinary from "../config/cloudinary"
import { isAdmin, validateProject } from "../utils/validateProject"
import { handleProjectError } from "../utils/handleError"

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find({ disabled: false }).sort({ order: 1 })
    return res.status(200).json({ data: projects })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
    return res.status(400).json({ error })
  }
}

export const getAdminProjects = async (req: Request, res: Response) => {
  const userId = req.user._id;
  try {
    isAdmin(userId);
    const projects = await Project.find().sort({ order: 1 })
    return res.status(200).json({ data: projects })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
    return res.status(400).json({ error })
  }
}


export const createProject = async (req: Request, res: Response) => {
  const data: IProjectRequest = req.body;
  const userId = req.user._id;
  const image = req.file;
  try {

    data.technologies = JSON.parse(data.technologies);
    data.links = JSON.parse(data.links);

    validateProject(data)
    isAdmin(userId);

    if (!image) {
      throw Error("Image is required")
    }

    const result = await cloudinary.uploader.upload(image.path, {
      folder: `projects/`,
      width: 500
    });

    console.log(data.links)

    const project = await Project.create({
      name: data.name,
      description: data.description,
      features: data.features,
      links: data.links,
      order: data.order,
      technologies: data.technologies,
      image: result.secure_url,
    })
    return res.status(200).json({ data: project })
  } catch (error) {
    return handleProjectError(res, error)
  }
}


export const updateProject = async (req: Request, res: Response) => {
  const data: IProjectRequest = req.body;
  const userId = req.user._id;
  const image = req.file;
  try {
    data.technologies = JSON.parse(data.technologies);
    data.links = JSON.parse(data.links);

    validateProject(data)
    isAdmin(userId);

    const updatedDoc: IProjectRequest = {
      name: data.name,
      description: data.description,
      features: data.features,
      links: data.links,
      order: data.order,
      technologies: data.technologies,
    }
    if (image) {
      var result = await cloudinary.uploader.upload(image.path, {
        folder: `projects/`,
        width: 500
      });
      updatedDoc.image = result.secure_url
    }
    const project = await Project.findOneAndUpdate({ _id: data.id }, updatedDoc, { new: true })
    if (!project) {
      throw Error("Project doesn't exists")
    }
    return res.status(200).json({ data: project })
  } catch (error) {
    return handleProjectError(res, error)
  }
}


export const disableProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user._id;
  try {
    isAdmin(userId);
    if (!id) {
      throw Error("Please provide the project ID!")
    }
    const doc = await Project.findById(id)
    if (!doc) {
      throw Error("Project doesn't exists")
    }
    const project = await Project.findOneAndUpdate({ _id: id }, { disabled: !doc.disabled })
    return res.status(200).json({ data: project })
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }
    return res.status(400).json({ error })
  }
}