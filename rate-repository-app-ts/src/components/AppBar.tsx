import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Text } from './Text';
import { Link } from 'react-router-native';
import useMe from '../hooks/useMe';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 16,
    paddingLeft: 16,
    backgroundColor: '#24292e',
    flexDirection: 'row',
  },
  appBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to="/">
            <Text fontWeight="bold" style={styles.appBarText}>
              Repositories
            </Text>
          </Link>
        </Pressable>
        {me && (
          <Pressable onPress={signOut}>
            <Text fontWeight="bold" style={styles.appBarText}>
              Sign Out
            </Text>
          </Pressable>
        )}
        {!me && (
          <Pressable>
            <Link to="/signin">
              <Text fontWeight="bold" style={styles.appBarText}>
                Sign in
              </Text>
            </Link>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
