import { useState, useEffect } from 'react';

export function Loader<T>(
  loadFunction?: () => T | Promise<T>,
  delay: number = 500,
): { data: T | null; loading: boolean; error: Error | null } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const result = loadFunction? await Promise.resolve(loadFunction()): null;
        if (isMounted && result) {
          setData(result);
          setError(null);
        } 
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setData(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, [loadFunction, delay]);

  return { data, loading, error };
}
