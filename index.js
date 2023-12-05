// Load environment variables from a .env file
require('dotenv').config();

// Import the Cloudinary library
const cloudinary = require('cloudinary');

// Configure the Cloudinary library with your account details
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Cloudinary cloud name from environment variable
    api_key: process.env.API_KEY,       // Cloudinary API key from environment variable
    api_secret: process.env.API_SECRET  // Cloudinary API secret from environment variable
});

// Function to upload an image to Cloudinary
async function uploadImage(filePath){
    try{
        // Upload the image at the given file path and await the response
        const fileUploaded = await cloudinary.uploader.upload(filePath);
        return fileUploaded; // Return the uploaded file's details
    }catch(error){
        // Log any errors that occur during the upload
        console.error('error', error);
    }
}

// Function to apply a 'smart crop' to an image on Cloudinary
async function smartCropImage(fileId){
    try{
        // Apply transformation to the image specified by fileId
        const smartCropped = await cloudinary.image(fileId, {
            transformation:[{
                aspect_ratio: "0.5", // Set the aspect ratio to 0.5
                gravity: "auto",     // Automatically determine the gravity
                width: 500,          // Set the width to 500 pixels
                crop: "fill"         // Crop the image to fill the frame
            },
            {quality: 'auto'},      // Automatically adjust the quality
            {fetch_format: "auto"}  // Automatically choose the format
            ]
        });
        return smartCropped; // Return the transformed image
    }catch(error){
        // Log any errors that occur during the smart cropping
        console.error('error', error);
    }
}

// Immediately Invoked Function Expression (IIFE) to execute the upload and crop operations
(async()=>{
    const result = await uploadImage("./hiking_dog_mountain.jpeg"); // Upload the image
    const cropped = await smartCropImage(result.public_id); // Crop the uploaded image
    console.log(cropped); // Log the result of the crop operation
})();
