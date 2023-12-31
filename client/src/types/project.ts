type Project = {
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
}

export type { Project }