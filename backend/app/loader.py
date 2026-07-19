from pathlib import Path

from langchain_community.document_loaders import (
    PyPDFLoader,
    Docx2txtLoader,
    TextLoader,
)


def load_document(file_path: str):
    """
    Load a PDF, DOCX, or TXT file and return LangChain Documents.
    """

    path = Path(file_path)

    suffix = path.suffix.lower()

    if suffix == ".pdf":
        loader = PyPDFLoader(str(path))

    elif suffix == ".docx":
        loader = Docx2txtLoader(str(path))

    elif suffix == ".txt":
        loader = TextLoader(str(path), encoding="utf-8")

    else:
        raise ValueError(f"Unsupported file type: {suffix}")

    return loader.load()