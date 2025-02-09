import { Link } from "react-router-dom";
export default function Home() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the URL Shortener</h1>
        <p className="text-gray-700 mb-4">Easily shorten your long URLs and track their statistics.</p>
        <div className="flex justify-center gap-4">
          <Link to="/shorten" className="bg-blue-500 text-white px-4 py-2 rounded">Shorten a URL</Link>
          <Link to="/stats" className="bg-green-500 text-white px-4 py-2 rounded">Check Stats</Link>
        </div>
      </div>
    );
}