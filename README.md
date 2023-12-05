# Node.js Cloudinary Image Uploader

## Introduction
This project demonstrates how to automate image uploads and apply smart cropping using Cloudinary in a Node.js application. It's a perfect example for developers looking to integrate image management features into their web applications.

## Features
- Image upload to Cloudinary
- Smart cropping of images
- Environment variable management for secure credentials
- Async/Await for optimal asynchronous operations

## Prerequisites
- Node.js installed
- Cloudinary account
- `.env` file with Cloudinary credentials

## Installation
1. Clone the repository
   ```
   git clone https://github.com/adanzweig/nodejs-cloudinary.git
   ```
2. Install dependencies
   ```
   cd nodejs-cloudinary
   npm install
   ```
3. Set up `.env` file with your Cloudinary credentials:
   ```
   CLOUD_NAME=your_cloud_name
   API_KEY=your_api_key
   API_SECRET=your_api_secret
   ```

## Usage
Run the script with Node.js
```
node index.js
```

## How It Works
- `uploadImage(filePath)`: Uploads an image to Cloudinary.
- `smartCropImage(fileId)`: Applies smart cropping to the uploaded image.
