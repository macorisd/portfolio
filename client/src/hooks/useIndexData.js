import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export const useIndexData = () => {
  const [indexData, setIndexData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndexData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/index-data`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setIndexData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching index data:', err);
        setError(err.message);
        // Fallback to null if API fails
        setIndexData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchIndexData();
  }, []);

  return { indexData, loading, error };
};

export default useIndexData;
