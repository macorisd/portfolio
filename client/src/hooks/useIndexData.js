import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';
import { API_BASE_URL } from '../config/api';

const CACHE_KEY = 'indexData';

export const useIndexData = () => {
  const [indexData, setIndexData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setIndexData(cachedData);
      setLoading(false);
      return;
    }

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
        
        // Cache the data
        setCachedData(CACHE_KEY, data);
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
