import QuestionForm from "./components/QuestionForm";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-12">
      <div className="max-w-4xl w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">GILPER</h1>
        <p className="text-center text-gray-400 mb-8">Ask a question, and get an answer based on the provided context.</p>
        <QuestionForm />
      </div>
    </div>
  );
};

export default Home;
