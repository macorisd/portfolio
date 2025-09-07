import { useState, useEffect } from 'react';

/**
 * Hook para mostrar el texto de loading con delay
 * @param {boolean} isLoading - Si está cargando actualmente
 * @param {number} delay - Delay en milisegundos antes de mostrar el texto (default: 1000ms)
 * @returns {boolean} - Si debe mostrar el texto de loading
 */
export function useDelayedLoading(isLoading, delay = 1000) {
  const [showLoadingText, setShowLoadingText] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isLoading) {
      // Inicialmente no mostrar el texto
      setShowLoadingText(false);
      
      // Después del delay, mostrar el texto
      timeoutId = setTimeout(() => {
        setShowLoadingText(true);
      }, delay);
    } else {
      // Si ya no está cargando, ocultar inmediatamente
      setShowLoadingText(false);
      clearTimeout(timeoutId);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, delay]);

  return showLoadingText;
}
