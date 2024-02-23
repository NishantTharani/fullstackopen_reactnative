import { MeResponse } from '../types';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useMe = () => {
  const { loading, data } = useQuery<{
    me: MeResponse;
  }>(ME, {
    fetchPolicy: 'cache-and-network',
  });

  return { me: data?.me, loading };
};

export default useMe;
