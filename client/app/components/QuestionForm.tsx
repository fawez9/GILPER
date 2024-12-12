"use client";
import { useState } from "react";

const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, context }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="question" className="block text-lg font-medium text-gray-300">
          Question
        </label>
        <input type="text" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter your question" className="mt-2 w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div>
        <label htmlFor="context" className="block text-lg font-medium text-gray-300">
          Context
        </label>
        <textarea id="context" value={context} onChange={(e) => setContext(e.target.value)} placeholder="Provide the context" className="mt-2 w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Submit
        </button>
      </div>

      {answer && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 border-l-4 border-green-500 rounded-md text-center">
          <strong>Answer: </strong>
          {answer}
        </div>
      )}
    </form>
  );
};

export default QuestionForm;
