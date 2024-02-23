import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

import { AuthenticateInput, AuthenticateResponse } from '../types';

const useSignIn = () => {
  const [authenticate, result] = useMutation<
    AuthenticateResponse,
    AuthenticateInput
  >(AUTHENTICATE);

  const signIn = async (authenticateInput: AuthenticateInput) => {
    const result = await authenticate({
      variables: authenticateInput,
    });

    return result;
  };

  return { signIn, result };
};

export default useSignIn;
