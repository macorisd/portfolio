import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';

const API_BASE_URL = 'http://localhost:8000';
const CACHE_KEY = 'awards';

export const useAwards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setAwards(cachedData);
      setLoading(false);
      return;
    }

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
        
        // Cache the data
        setCachedData(CACHE_KEY, data);
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
