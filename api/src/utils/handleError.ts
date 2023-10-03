import { Response } from "express";

export const handleProjectError = (res: Response, error: unknown) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ error: "Syntax error!" })
  }
  if (error instanceof Error) {
    return res.status(400).json({ error: error.message })
  }
  return res.status(400).json({ error })
}