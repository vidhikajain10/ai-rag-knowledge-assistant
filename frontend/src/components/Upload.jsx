import { useState } from "react";
import api from "../services/api";

export default function Upload() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    await api.post("/upload", formData);

    alert("Uploaded Successfully");
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={upload}>Upload</button>
    </div>
  );
}