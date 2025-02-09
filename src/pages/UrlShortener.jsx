import { useState, useEffect } from "react";

export default function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/shorten")
      .then((res) => res.json())
      .then((data) => setShortUrls(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    if (response.ok) {
      const newUrl = await response.json();
      setShortUrls([...shortUrls, newUrl]);
      setUrl("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-4">URL Shortener</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Shorten URL
        </button>
      </form>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Shortened URLs</h2>
        <ul className="mt-2 space-y-2">
          {shortUrls.map((url) => (
            <li key={url.shortCode} className="border p-2 rounded bg-gray-100">
              <a
                href={`http://localhost:3001/api/shorten/${url.shortCode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {url.shortCode}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
