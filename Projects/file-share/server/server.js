const express = require("express");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS for frontend to communicate with backend
app.use(cors());

// Storage configuration for file uploads
const uploadDirectory = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory); // Create the directory if it doesn't exist
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// In-memory store for file metadata (for simplicity)
const fileMetadata = {};

// Enable JSON parsing for POST requests
app.use(express.json());

// Route: Upload a file
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const fileCode = uuidv4(); // Generate a unique code for the file
  fileMetadata[fileCode] = {
    path: req.file.path,
    name: req.file.originalname,
  };

  res.status(200).json({ code: fileCode }); // Return the unique code
});

// Route: Download a file
app.get("/download/:code", (req, res) => {
  const { code } = req.params;

  const fileInfo = fileMetadata[code];
  if (!fileInfo) {
    return res.status(404).json({ message: "File not found or code is invalid." });
  }

  res.download(fileInfo.path, fileInfo.name, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).json({ message: "Error downloading file." });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
