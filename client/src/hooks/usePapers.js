import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/papers`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPapers(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching papers data:', err);
        setError(err.message);
        // Fallback to empty array if API fails
        setPapers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  return { papers, loading, error };
};

export default usePapers;
