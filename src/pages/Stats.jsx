import { useState } from "react";
export default function Stats() {
    const [shortCode, setShortCode] = useState("");
    const [stats, setStats] = useState(null);
  
    const fetchStats = async () => {
      const response = await fetch(`http://localhost:3001/api/shorten/${shortCode}/stats`);
      const data = await response.json();
      setStats(data);
    };
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Check URL Stats</h2>
        <input 
          type="text" 
          placeholder="Enter Short Code" 
          className="border p-2 w-full mb-2" 
          value={shortCode} 
          onChange={(e) => setShortCode(e.target.value)} 
        />
        <button onClick={fetchStats} className="bg-blue-500 text-white p-2 rounded">
          Check Stats
        </button>
        {stats && <p className="mt-4">Access Count: {stats.accessCount}</p>}
      </div>
    );
  }