import { useForm, Controller } from 'react-hook-form';
import { TextInput, View, Button, StyleSheet } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Text } from './Text';
import useSignIn from '../hooks/useSignIn';
import { AuthenticateInput } from '../types';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const styles = StyleSheet.create({
  signinFormContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#fff',
  },
  signinFormItem: {
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    padding: 10,
  },
  signinButton: {
    marginVertical: 10,
    color: '#fff',
    backgroundColor: 'primary',
  },
});

interface SignInFormValues {
  username: string;
  password: string;
}

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const { signIn, result } = useSignIn();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const { username, password } = data;
    const authenticateInput: AuthenticateInput = {
      credentials: {
        username,
        password,
      },
    };

    try {
      const { data } = await signIn(authenticateInput);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <View style={styles.signinFormContainer}>
      <Controller
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { isDirty } }) => (
          <>
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Username"
              style={styles.signinFormItem}
            />
            <Text>{errors.username?.message}</Text>
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, value }, fieldState: { isDirty } }) => (
          <>
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              style={styles.signinFormItem}
              secureTextEntry
            />
            <Text>{errors.password?.message}</Text>
          </>
        )}
      />
      <Button title="Sign in" onPress={onSubmit} />
    </View>
  );
};

export default SignIn;
