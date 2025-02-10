import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
export default function Stats() {
    const [shortCode, setShortCode] = useState("");
    const [stats, setStats] = useState(null);
  
    const fetchStats = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${shortCode}/stats`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
        console.log(data);
      } else {
        alert("Short URL not found.");
      }
    };

    // Convert countryStats to chart format
    const countryData = stats ? Object.entries(stats.countryStats).map(([country, count]) => ({ country, count })) : [];
    const hourlyData = stats ? Object.entries(stats.hourlyStats).map(([hour, count]) => ({ hour, count })) : [];
    const dailyData = stats ? Object.entries(stats.dailyStats).map(([day, count]) => ({ day, count })) : [];
  
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

                    {/* Country Analytics */}
                    <h4 className="mt-4 text-md font-semibold">Visits by Country</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={countryData} dataKey="count" nameKey="country" fill="#4F46E5">
                                {countryData.map((_, index) => (
                                    <Cell key={index} fill={["#4F46E5", "#EC4899", "#10B981", "#F59E0B"][index % 4]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Hourly Access Trends */}
                    <h4 className="mt-4 text-md font-semibold">Access by Hour</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={hourlyData}>
                            <XAxis dataKey="hour" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#4F46E5" />
                        </BarChart>
                    </ResponsiveContainer>

                    {/* Daily Access Trends */}
                    <h4 className="mt-4 text-md font-semibold">Access by Day</h4>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={dailyData}>
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#10B981" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            )}
      </div>
    );
  }