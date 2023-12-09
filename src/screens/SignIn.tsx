import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {signIn} from '../services/SignIn';
import {useAuth} from '../contexts/AuthContext';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const auth = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Please enter your username and password.');
      return;
    }
    setError('');
    setIsLoading(true);

    try {
      await signIn(username, password);
      auth.login(username);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.form}>
          <TextInput
            testID="username-field-id" 
            style={[styles.input, isUsernameFocused && styles.inputFocused]}
            placeholder="Username"
            placeholderTextColor="#AAAAAA"
            autoCapitalize="none"
            onChangeText={setUsername}
            value={username}
            onFocus={() => setIsUsernameFocused(true)}
            onBlur={() => setIsUsernameFocused(false)}
          />
          <TextInput
            testID="password-field-id" 
            style={[styles.input, isPasswordFocused && styles.inputFocused]}
            placeholder="Password"
            placeholderTextColor="#AAAAAA"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <TouchableOpacity
            testID="signing-button-id" 
            style={[
              styles.button,
              !(username && password) && styles.buttonDisabled,
            ]}
            onPress={handleLogin}
            disabled={!(username && password)}>
            {isLoading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Text>
            )}
          </TouchableOpacity>
          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
  logo: {
    width: '60%',
    height: undefined,
    aspectRatio: 2.5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  form: {
    marginHorizontal: 40,
  },
  input: {
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333333',
    fontSize: 16,
  },
  inputFocused: {
    borderColor: '#4CAF50',
  },
  button: {
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#A5D6A7',
  },
  errorContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  errorText: {
    color: '#E57373',
  },
});

export default SignInScreen;
