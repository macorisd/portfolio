import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export const useWorkExperience = () => {
  const [workExperience, setWorkExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkExperience = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/work-experience`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setWorkExperience(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching work experience data:', err);
        setError(err.message);
        // Fallback to empty array if API fails
        setWorkExperience([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkExperience();
  }, []);

  return { workExperience, loading, error };
};

export default useWorkExperience;
