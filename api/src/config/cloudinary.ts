import dotenv from 'dotenv';
dotenv.config();
import cloudinary from 'cloudinary';
const cloudinaryV2 = cloudinary.v2

// Configuration 
cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET
});



export default cloudinaryV2;
