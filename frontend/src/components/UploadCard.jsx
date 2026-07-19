import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText } from "lucide-react";
import api from "../services/api";

export default function UploadCard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const upload = async () => {
    if (!file) {
      alert("Please select a document.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      await api.post("/upload", formData);

      alert("Document uploaded successfully!");
    } catch (err) {
      alert("Upload failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="upload-section">
      <div className="upload-card">

        <div
          {...getRootProps()}
          className={`drop-zone ${isDragActive ? "active" : ""}`}
        >
          <input {...getInputProps()} />

          <UploadCloud size={60} color="#2563EB" />

          <h2>Upload Your Documents</h2>

          <p>
            Drag & Drop your PDF, DOCX or TXT files here
          </p>

          <span>or click to browse</span>

          {file && (
            <div className="selected-file">
              <FileText size={18} />
              {file.name}
            </div>
          )}
        </div>

        <button
          onClick={upload}
          disabled={loading}
          className="upload-btn"
        >
          {loading ? "Uploading..." : "Upload Document"}
        </button>

      </div>
    </section>
  );
}