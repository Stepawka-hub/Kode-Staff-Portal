export const checkCacheTime = (
  timestamp: number = 0,
  cacheTime: number
) => {
  const now = Date.now();
  return now - timestamp <= cacheTime;
};
