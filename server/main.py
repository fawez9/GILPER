from flask import Flask, request, jsonify
from bot import question_answerer

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    print(f"Headers: {request.headers}")
    print(f"Body: {request.data}")  # Prints the raw body
    data = request.get_json()
    question = data.get("question", "")
    context = data.get("context", "")
    response = question_answerer(question=question, context=context)
    return jsonify(response)


if __name__ == "__main__":
    app.run(port=5000)
