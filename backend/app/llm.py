from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_openai import ChatOpenAI

from app.config import settings


def get_llm():
    if settings.GOOGLE_API_KEY:
        print("Using Gemini")
        return ChatGoogleGenerativeAI(
            model="gemini-2.0-flash",
            google_api_key=settings.GOOGLE_API_KEY,
            temperature=0,
        )

    if settings.OPENAI_API_KEY:
        print("Using OpenAI")
        return ChatOpenAI(
            model="gpt-4o-mini",
            api_key=settings.OPENAI_API_KEY,
            temperature=0,
        )

    return None


llm = get_llm()