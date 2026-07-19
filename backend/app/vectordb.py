from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

from app.config import settings

# Local embedding model (No API key required)
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

vector_db = Chroma(
    persist_directory=str(settings.CHROMA_DIR),
    embedding_function=embeddings,
)


def add_documents(documents):
    """
    Store document chunks in ChromaDB.
    """
    vector_db.add_documents(documents)


def similarity_search(query: str, k: int = 4):
    """
    Search for similar chunks.
    """
    return vector_db.similarity_search(query, k=k)


def delete_database():
    """
    Delete all stored vectors.
    """
    vector_db.delete_collection()