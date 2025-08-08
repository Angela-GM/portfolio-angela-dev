from transformers import pipeline

# 1️⃣ Cargar pipeline de QA en español (puedes cambiar por otro modelo que prefieras)
qa_pipeline = pipeline("question-answering", model="mrm8488/bert-base-spanish-wwm-cased-finetuned-spa-squad2-es")

# 2️⃣ Cargar tu CV desde un archivo txt para mayor comodidad
with open("mi_cv.txt", "r", encoding="utf-8") as file:
    cv_context = file.read()

print("🤖 Chatbot de CV listo. Escribe 'salir' para terminar.\n")

# 3️⃣ Loop de conversación con el recruiter
def conversar_con_recruiter():
    while True:
        pregunta = input("\nPregunta del recruiter: ")
        if pregunta.lower() == 'salir':
            print("\n✅ Chat finalizado. ¡Buena suerte!")
            break

        try:
            respuesta = qa_pipeline({
                'context': cv_context,
                'question': pregunta
            })

            print(f"\nRespuesta para el recruiter: {respuesta['answer']}")
        except Exception as e:
            print(f"⚠️ Error al generar la respuesta: {str(e)}")

if __name__ == "__main__":
    conversar_con_recruiter()
