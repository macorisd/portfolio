import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export const useAwards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/awards`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setAwards(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching awards data:', err);
        setError(err.message);
        // Fallback to empty array if API fails
        setAwards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  return { awards, loading, error };
};

export default useAwards;
