from pathlib import Path

from dotenv import load_dotenv
from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")


class Settings(BaseSettings):
    OPENAI_API_KEY: str = ""
    GOOGLE_API_KEY: str = ""

    UPLOAD_DIR: Path = BASE_DIR / "uploads"
    CHROMA_DIR: Path = BASE_DIR / "chroma_db"

    CHUNK_SIZE: int = 800
    CHUNK_OVERLAP: int = 100

    class Config:
        env_file = BASE_DIR / ".env"


settings = Settings()

settings.UPLOAD_DIR.mkdir(exist_ok=True)
settings.CHROMA_DIR.mkdir(exist_ok=True)