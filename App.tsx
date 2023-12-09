import * as React from 'react';
import {AuthProvider} from './src/contexts/AuthContext';
import Routes from './src/routes';

export type RootStackParamList = {
  SignIn: undefined;
  Welcome: undefined;
};

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
