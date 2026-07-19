from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.config import settings


text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=settings.CHUNK_SIZE,
    chunk_overlap=settings.CHUNK_OVERLAP,
    separators=["\n\n", "\n", " ", ""],
)


def split_documents(documents):
    return text_splitter.split_documents(documents)