import { useState } from "react";
export default function Delete() {
    const [shortCode, setShortCode] = useState("");
  
    const handleDelete = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${shortCode}`, {
        method: "DELETE",
      });
      if (response.status === 204) {
        alert("URL Deleted Successfully");
        setShortCode("");
      } else {
        alert("Error: URL Not Found");
      }
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Delete a Shortened URL</h2>
        <input 
          type="text" 
          placeholder="Enter Short Code" 
          className="border p-2 w-full mb-2" 
          value={shortCode} 
          onChange={(e) => setShortCode(e.target.value)} 
        />
        <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">
          Delete
        </button>
      </div>
    );
}