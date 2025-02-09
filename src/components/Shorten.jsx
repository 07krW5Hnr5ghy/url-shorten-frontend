export default function Shorten() {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState(null);
  
    const handleShorten = async () => {
      const response = await fetch("http://localhost:3001/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setShortenedUrl(data);
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Shorten a URL</h2>
        <input 
          type="text" 
          placeholder="Enter URL" 
          className="border p-2 w-full mb-2" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
        />
        <button onClick={handleShorten} className="bg-blue-500 text-white p-2 rounded">
          Shorten
        </button>
        {shortenedUrl && <p className="mt-4">Short URL: {shortenedUrl.shortCode}</p>}
      </div>
    );
}
  