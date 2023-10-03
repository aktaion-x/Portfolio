import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IProject {
  id?: string,
  name: string,
  features: string,
  image?: string,
  description: string,
  order: number,
  disabled?: boolean
  technologies: string[],
  links: {
    github?: string,
    install?: string,
    live?: string,
  },
}

export interface IProjectDocument extends IProject {
  _doc: any
}

export interface IProjectRequest {
  id?: string,
  name: string,
  features: string,
  image?: File | string,
  description: string,
  order: number,
  disabled?: boolean
  technologies: string,
  links: string,
}

const ProjectSchema = new Schema<IProjectDocument>(
  {
    name: {
      type: String,
      required: true
    },
    features: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    technologies: [{
      type: String
    }],
    description: {
      type: String,
      required: true
    },
    links: {
      github: {
        type: String,
        default: ''
      },
      install: {
        type: String,
        default: ''
      },
      live: {
        type: String,
        default: ''
      },
    },
    order: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model<IProjectDocument>("Project", ProjectSchema);
