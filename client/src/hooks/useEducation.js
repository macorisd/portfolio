import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';

const API_BASE_URL = 'http://localhost:8000';
const CACHE_KEY = 'education';

export const useEducation = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setEducation(cachedData);
      setLoading(false);
      return;
    }

    const fetchEducation = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/education`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setEducation(data);
        setError(null);
        
        // Cache the data
        setCachedData(CACHE_KEY, data);
      } catch (err) {
        console.error('Error fetching education data:', err);
        setError(err.message);
        // Fallback to empty array if API fails
        setEducation([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return { education, loading, error };
};

export default useEducation;
