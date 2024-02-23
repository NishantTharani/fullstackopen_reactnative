import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  namespace: string;

  constructor(namespace: string = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken(): Promise<string> {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`,
    );
    return accessToken ? accessToken : '';
  }

  async setAccessToken(accessToken: string) {
    // Add the access token to the storage
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, accessToken);
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
  }
}

export default AuthStorage;
