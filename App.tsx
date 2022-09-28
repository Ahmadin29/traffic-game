import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AudioButton from './components/AudioButton';
import * as ScreenOrientation from 'expo-screen-orientation';
import useCachedResources from './hooks/useCachedResources';
import Navigators from './navigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [backgroundMusic,setBackgroundMusic] = useState<any>();

  useEffect(()=>{
    initialize()
  },[])

  const initialize = async ()=>{

    // Initialize music
    const { sound } = await Audio.Sound.createAsync(require('./assets/musics/background_play.mp3'),{
      isLooping:true,
      volume:0.7
    });

    await sound.playAsync();

    //set orientation to horizontal
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  const loadingResources = useCachedResources();
  
  return (
    <SafeAreaProvider>
      <StatusBar translucent={true} hidden />
      <Navigators/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
