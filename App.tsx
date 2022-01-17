import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AsyncStorage } from 'react-native';
import  SignUpScreen  from './screens/SignUpScreen'

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SignUpScreen/>
        {/* <Navigation /> */}
        <StatusBar hidden={false}/>
      </SafeAreaProvider>
    );
  }
}
