from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import router

app = FastAPI(
    title="AI RAG Knowledge Assistant",
    version="1.0.0",
    description="Minimal RAG application using FastAPI, LangChain, ChromaDB, and Gemini/OpenAI.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)


@app.get("/")
def root():
    return {
        "message": "AI RAG Knowledge Assistant API is running 🚀"
    }