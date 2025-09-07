import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';
import { API_BASE_URL } from '../config/api';

const CACHE_KEY = 'certifications';

export const useCertifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setCertifications(cachedData);
      setLoading(false);
      return;
    }

    const fetchCertifications = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/certifications`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCertifications(data);
        setError(null);
        
        // Cache the data
        setCachedData(CACHE_KEY, data);
      } catch (err) {
        console.error('Error fetching certifications data:', err);
        setError(err.message);
        // Fallback to empty array if API fails
        setCertifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return { certifications, loading, error };
};

export default useCertifications;
