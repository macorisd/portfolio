// Simple in-memory cache for API data
const cache = new Map();

export const getCachedData = (key) => {
  return cache.get(key) || null;
};

export const setCachedData = (key, data) => {
  cache.set(key, data);
};

export const hasCachedData = (key) => {
  return cache.has(key);
};

export const clearCache = () => {
  cache.clear();
};

export default {
  getCachedData,
  setCachedData,
  hasCachedData,
  clearCache
};
