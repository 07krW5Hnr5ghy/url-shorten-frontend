export default function Update() {
    const [shortCode, setShortCode] = useState("");
    const [newUrl, setNewUrl] = useState("");
  
    const handleUpdate = async () => {
      await fetch(`http://localhost:3001/api/shorten/${shortCode}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: newUrl }),
      });
      alert("URL Updated Successfully");
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Update a Shortened URL</h2>
        <input 
          type="text" 
          placeholder="Enter Short Code" 
          className="border p-2 w-full mb-2" 
          value={shortCode} 
          onChange={(e) => setShortCode(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Enter New URL" 
          className="border p-2 w-full mb-2" 
          value={newUrl} 
          onChange={(e) => setNewUrl(e.target.value)} 
        />
        <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded">
          Update
        </button>
      </div>
    );
}
  