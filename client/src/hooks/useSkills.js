import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';

const API_BASE_URL = 'http://localhost:8000';
const CACHE_KEY = 'skills';

export const useSkills = () => {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setSkills(cachedData);
      setLoading(false);
      return;
    }

    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/skills`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSkills(data);
        setError(null);
        
        // Cache the data
        setCachedData(CACHE_KEY, data);
      } catch (err) {
        console.error('Error fetching skills data:', err);
        setError(err.message);
        // Fallback to null if API fails
        setSkills(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};

export default useSkills;
