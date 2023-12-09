import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useAuth} from '../contexts/AuthContext';

const WelcomeScreen = () => {
  const auth = useAuth();

  if (!auth.user) {
    auth.logout();
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome, {auth.user.username}!</Text>
        <Text style={styles.descriptionText}>
          You have successfully logged in. Enjoy our app's features and have a
          great experience.
        </Text>
        <TouchableOpacity testID="logout-button-id" style={styles.logoutButton} onPress={auth.logout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  },
  logo: {
    width: '60%',
    height: undefined,
    aspectRatio: 2.5,
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    elevation: 3,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
