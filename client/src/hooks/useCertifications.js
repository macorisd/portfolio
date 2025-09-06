import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export const useCertifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
