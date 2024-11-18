import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [fileCode, setFileCode] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setFileCode(response.data.code);
      setDownloadLink(`http://localhost:5000/download/${response.data.code}`);
    } catch (err) {
      console.error(err);
      alert("File upload failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-orange-500">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">File Upload & Sharing</h1>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button onClick={uploadFile} className="w-full bg-blue-500 text-white py-2 rounded-lg mt-2">Upload File</button>
        
        {fileCode && (
          <div className="mt-4">
            <p className="text-gray-700">File uploaded successfully! Share this code or link:</p>
            <p className="text-blue-500 font-bold">{fileCode}</p>
            <a href={downloadLink} className="text-blue-500 font-semibold">Download the file</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
