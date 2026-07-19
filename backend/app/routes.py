from pathlib import Path

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.config import settings
from app.loader import load_document
from app.rag import ask_question
from app.schemas import ChatRequest, ChatResponse, UploadResponse
from app.splitter import split_documents
from app.vectordb import add_documents

router = APIRouter()


@router.post("/upload", response_model=UploadResponse)
async def upload_file(file: UploadFile = File(...)):
    """
    Upload a document and store its embeddings.
    """

    try:
        file_path = settings.UPLOAD_DIR / file.filename

        with open(file_path, "wb") as f:
            f.write(await file.read())

        documents = load_document(str(file_path))
        chunks = split_documents(documents)
        add_documents(chunks)

        return UploadResponse(
            filename=file.filename,
            message="Document uploaded successfully."
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Ask questions about uploaded documents.
    """

    try:
        answer = ask_question(request.question)

        return ChatResponse(
            answer=answer
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))