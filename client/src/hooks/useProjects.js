import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/projects`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        // Ordenar por el campo "order" de forma descendente (más alto primero)
        const sortedProjects = data.sort((a, b) => b.order - a.order);
        setProjects(sortedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects data:', err);
        setError(err.message);
        // Fallback to empty array if API fails
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;
