import { useState, useEffect } from 'react';
import { APIRepository } from '../types';

const useRepositories = () => {
  const [repositories, setRepositories] = useState<APIRepository>();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.50.144:5001/api/repositories');
    const json: APIRepository = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;
