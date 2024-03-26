import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Created By Jasmal</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/login" className="btn btn-secondary px-6 py-3 rounded-md text-lg font-semibold text-white shadow-md bg-blue-400 hover:bg-blue-500 hover:text-white transition duration-300">Login</Link>
          <Link to="/register" className="btn btn-primary px-6 py-3 rounded-md text-lg font-semibold text-white shadow-md bg-green-400 hover:bg-green-500 hover:text-white transition duration-300">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
