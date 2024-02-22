import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Text } from './Text';
import { Link } from 'react-router-native';

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
        <Pressable>
          <Link to="/signin">
            <Text fontWeight="bold" style={styles.appBarText}>
              Sign in
            </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
