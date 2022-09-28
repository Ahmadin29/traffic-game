import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AudioButton from '../components/AudioButton';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/background_home.png')}
                style={{
                width:"100%",
                height:"100%",
                alignItems:"center"
                }}
            >
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{
                        marginTop:50
                    }}
                />
                <AudioButton
                    onPress={()=>{
                        navigation.navigate('Stages' as never);
                    }}
                >
                    <Image
                        source={require('../assets/images/play.png')}
                        style={{
                        width:70,
                        height:70,
                        marginTop:50
                        }}
                    />
                </AudioButton>
            </ImageBackground>
        </View>
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
