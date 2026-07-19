from app.llm import llm
from app.vectordb import similarity_search


def ask_question(question: str):
    docs = similarity_search(question)

    if not docs:
        return "No relevant documents found."

    context = "\n\n".join(doc.page_content for doc in docs)

    if llm is None:
        return (
            "Documents were searched successfully.\n\n"
            "LLM is disabled because no API key is configured.\n\n"
            "Relevant Context:\n\n"
            + context
        )

    prompt = f"""
You are an AI assistant.

Answer ONLY using the provided context.

If the answer isn't present, reply:
'I couldn't find that information in the uploaded documents.'

Context:
{context}

Question:
{question}

Answer:
"""

    response = llm.invoke(prompt)

    return response.content