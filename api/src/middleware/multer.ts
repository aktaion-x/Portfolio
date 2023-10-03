import multer from "multer"

const storage = multer.diskStorage({
  filename: function (req: Express.Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
export default upload;
