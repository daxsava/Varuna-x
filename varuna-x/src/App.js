// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

// Inline SVG icons
const StormIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16.32A7.5 7.5 0 0 1 12 8a8.5 8.5 0 0 1 8 5.17"/>
    <path d="M20 8A4 4 0 0 0 16 4h-2.18a3 3 0 0 0-5.46-1.12A4 4 0 0 0 2 8"/>
    <path d="m11 20-3-5h4l-3-5h4l-3-5"/>
  </svg>
);
const TideIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 13a4 4 0 0 1 4-4 4 4 0 0 1 4 4a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 1 4-4"/>
    <path d="M2 20a4 4 0 0 1 4-4 4 4 0 0 1 4 4a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 1 4-4"/>
  </svg>
);
const PollutionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

// Reusable Card and PageContainer
const Card = ({ children }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm">
    {children}
  </div>
);
const PageContainer = ({ children }) => (
  <main className="p-4 grid grid-cols-2 gap-4">
    {children}
  </main>
);

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/metrics')
      .then(res => res.json())
      .then(json => {
        if(json.success) setMetrics(json.data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const renderIcon = (title) => {
    if (title === 'Tide Levels') return <TideIcon />;
    if (title === 'Algal Blooms') return <PollutionIcon />;
    if (title === 'Water Quality') return <PollutionIcon />;
    return <StormIcon />;
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <PageContainer>
        {metrics.map((m, i) => (
          <Card key={i}>
            <div className="flex items-center mb-2" style={{ color: m.color }}>
              {renderIcon(m.title)}
              <span className="ml-2 font-semibold">{m.title}</span>
            </div>
            <div className="text-xl font-bold">{m.value}</div>
            <div className="text-sm text-gray-500">{m.trend}</div>
          </Card>
        ))}
      </PageContainer>
    </div>
  );
}

export default App;
