import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
export default function Stats() {
    const [shortCode, setShortCode] = useState("");
    const [stats, setStats] = useState(null);
  
    const fetchStats = async () => {
      const response = await fetch(`http://localhost:3001/api/shorten/${shortCode}/stats`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
        console.log(data);
      } else {
        alert("Short URL not found.");
      }
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
         {stats && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Total Visits: {stats.accessCount}</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={stats.accessLogs.map((log, index) => ({ index, timestamp: log.timestamp }))}>
                            <XAxis dataKey="index" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="index" fill="#4F46E5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )
          }
      </div>
    );
  }