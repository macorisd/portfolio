import { useState, useEffect } from 'react';
import { getCachedData, setCachedData, hasCachedData } from '../lib/cache';

const API_BASE_URL = 'http://localhost:8000';
const CACHE_KEY = 'projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if data is already cached
    if (hasCachedData(CACHE_KEY)) {
      const cachedData = getCachedData(CACHE_KEY);
      setProjects(cachedData);
      setLoading(false);
      return;
    }

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
        
        // Cache the data
        setCachedData(CACHE_KEY, sortedProjects);
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
