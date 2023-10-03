type Project = {
  _id: string,
  name: string,
  features: string,
  image: string,
  technologies: string[],
  description: string,
  links: {
    github?: string,
    install?: string,
    live?: string,
  },
  order: number,
  disabled: boolean
}

type CreateProject = {
  _id?: string,
  name: string,
  features: string,
  image: File | null,
  technologies: string[],
  description: string,
  links: {
    github?: string,
    install?: string,
    live?: string,
  },
  order: number,
  disabled: boolean
}

export type { Project, CreateProject }