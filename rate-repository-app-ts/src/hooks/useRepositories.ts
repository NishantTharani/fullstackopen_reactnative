import { APIRepository } from '../types';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { loading, data } = useQuery<{
    repositories: APIRepository;
  }>(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading };
};

export default useRepositories;
