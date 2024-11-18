import React, { useState } from "react";

const App = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [uploadResponse, setUploadResponse] = useState("");
  const [downloadCode, setDownloadCode] = useState("");
  const [downloadMessage, setDownloadMessage] = useState("");

  const handleFileUpload = async () => {
    if (!uploadFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadFile);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setUploadResponse(result.url || result.code);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload the file.");
    }
  };

  const handleFileDownload = async () => {
    try {
      const response = await fetch(`http://localhost:5000/download/${downloadCode}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "downloaded_file";
        a.click();
        setDownloadMessage("File downloaded successfully.");
      } else {
        setDownloadMessage("Invalid code or file not found.");
      }
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadMessage("Failed to download the file.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
        📤 File Sharing Application
      </h1>

      {/* File Upload Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upload a File</h2>
        <div className="flex flex-col gap-4">
          <input
            type="file"
            onChange={(e) => setUploadFile(e.target.files[0])}
            className="file-input border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleFileUpload}
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Upload
          </button>
          {uploadResponse && (
            <div className="mt-4 bg-green-100 text-green-800 p-4 rounded">
              <p>File uploaded successfully! Share this:</p>
              <p className="font-mono text-sm break-words">{uploadResponse}</p>
            </div>
          )}
        </div>
      </div>

      {/* File Download Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Download a File</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={downloadCode}
            onChange={(e) => setDownloadCode(e.target.value)}
            placeholder="Enter the code"
            className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleFileDownload}
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Download
          </button>
          {downloadMessage && (
            <div className="mt-4 bg-red-100 text-red-800 p-4 rounded">
              {downloadMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
