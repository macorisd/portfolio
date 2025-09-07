import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';

const API_BASE_URL = 'http://localhost:8000';
const CACHE_KEY = 'papers';

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setPapers(cachedData);
      setLoading(false);
      return;
    }

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
        
        // Cache the data
        setCachedData(CACHE_KEY, data);
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
