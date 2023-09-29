const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const sharp = require('sharp');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'SpearoSpotter',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

// const resizeAndSave = async (file) => {
//     const resizedBuffer = await sharp(file.buffer)
//         .resize(800, 600)
//         .toBuffer();

//     return resizedBuffer;
// };

module.exports = {
    cloudinary,
    storage
    // resizeAndSave
}