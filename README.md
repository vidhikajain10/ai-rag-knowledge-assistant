# 🤖 AI RAG Knowledge Assistant

An AI-powered Retrieval-Augmented Generation (RAG) application built with **FastAPI**, **React**, **LangChain**, **ChromaDB**, and **Hugging Face Embeddings**. Upload documents and ask questions based on their content using semantic search.

---

## 📌 Features

- 📄 Upload PDF, DOCX, and TXT files
- 🔍 Semantic document search
- 🧠 Local Hugging Face embeddings
- 💾 ChromaDB vector database
- 🤖 Gemini/OpenAI support for answer generation
- ⚡ FastAPI backend
- 🎨 React frontend
- 📖 Swagger API documentation

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- FastAPI
- LangChain
- ChromaDB
- Hugging Face Embeddings
- Gemini / OpenAI
- Python

---

## 📂 Project Structure

```
ai-rag-knowledge-assistant/
│
├── backend/
│   ├── app/
│   │   ├── config.py
│   │   ├── loader.py
│   │   ├── splitter.py
│   │   ├── vectordb.py
│   │   ├── llm.py
│   │   ├── rag.py
│   │   ├── routes.py
│   │   ├── schemas.py
│   │   └── main.py
│   │
│   ├── uploads/
│   ├── chroma_db/
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the repository

```bash
git clone https://github.com/vidhikajain10/ai-rag-knowledge-assistant.git

cd ai-rag-knowledge-assistant
```

---

## 2. Backend Setup

```bash
cd backend

python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

## 3. Create Environment File

Create

```
backend/.env
```

Example

```env
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
OPENAI_API_KEY=
```

---

## 4. Start Backend

```bash
uvicorn app.main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## 5. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🚀 API Endpoints

## Upload Document

```
POST /upload
```

Supported files

- PDF
- DOCX
- TXT

---

## Chat

```
POST /chat
```

Example

```json
{
  "question": "What is this document about?"
}
```

---

# 🔄 Workflow

```
Upload Document
        │
        ▼
Document Loader
        │
        ▼
Text Splitter
        │
        ▼
Hugging Face Embeddings
        │
        ▼
ChromaDB
        │
        ▼
Semantic Search
        │
        ▼
Gemini / OpenAI
        │
        ▼
Answer
```

---

# 📸 Screenshots

Add screenshots here

- Home Page
- Upload Page
- Chat Interface
- Swagger API

---

# 🔮 Future Improvements

- User Authentication
- Chat History
- Multi-document search
- Streaming responses
- Docker Deployment
- PostgreSQL support
- Local LLM (Ollama)
- Source citations
- Dark/Light theme

---

# 👨‍💻 Author

**Vidhika Jain**

Integrated M.Tech (Artificial Intelligence)

VIT Bhopal University

GitHub

https://github.com/vidhikajain10

---

# ⭐ If you found this project useful

Please consider giving it a ⭐ on GitHub.
