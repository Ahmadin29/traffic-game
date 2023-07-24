import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AudioButton from '../components/AudioButton';
import IonIcon from '@expo/vector-icons/Ionicons'
import Colors from '../constants/colors';

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
                    source={require('../assets/images/umm.png')}
                    style={{
                        position:"absolute",
                        left:20,
                        top:20,
                        width:50,
                        height:50,
                    }}
                />
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
                <View
                    style={{
                        position:"absolute",
                        right:20,
                        top:20,
                        width:50,
                        height:50,
                    }}
                >
                    <AudioButton
                        onPress={()=>{
                            navigation.navigate('About' as never);
                        }}
                    >
                        <IonIcon name='information-circle' size={40} color={Colors.text} />
                    </AudioButton>
                </View>
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
