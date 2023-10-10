// App.tsx
import React, {useEffect} from 'react';
import Navigation from './src/Navigation'; // Import your navigation component
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return <Navigation />;
}

export default App;
