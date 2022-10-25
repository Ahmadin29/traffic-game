import { Image, ImageBackground, View } from "react-native";
import Text from "../components/Text";
import Colors from "../constants/colors";
import layouts from "../constants/layouts";
import levels from "../data/levels";
import IonIcon from '@expo/vector-icons/Ionicons'
import AudioButton from "../components/AudioButton";
import { useNavigation } from "@react-navigation/native";

export default function Stages() {

    const navigation = useNavigation();

    const renderLevels = ()=>{
        return levels.map(v=>{
            return(
                <AudioButton
                    onPress={()=>{
                        navigation.navigate(v.goto as never)
                    }}
                >
                    <View style={{
                        width:(layouts.window.width / 4) - 17.5,
                        backgroundColor:Colors.white,
                        borderRadius:20,
                        alignItems:"center"
                    }} >
                        <Image
                            source={{uri:"https://www.friv.com/z/thumbs/basketchamps360x100Min.png"}}
                            style={{
                                width:"100%",
                                height:100,
                                borderTopRightRadius:20,
                                borderTopLeftRadius:20,
                            }}
                        />
                        <View style={{
                            padding:15,
                        }} >
                            <Text style={{textAlign:"center"}}>{v.name}</Text>
                            <Text style={{textAlign:"center"}} size={12} color="textSecondary" >{v.description}</Text>
                        </View>
                        {/* <View style={{
                            flexDirection:"row",
                            marginBottom:-12,
                            backgroundColor:Colors.text,
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:20,
                        }} >
                            <IonIcon name="md-star" size={16} color={Colors.white} />
                            <IonIcon name="md-star" size={16} color={Colors.white} />
                            <IonIcon name="md-star" size={16} color={Colors.white} />
                        </View> */}
                    </View>
                </AudioButton>
            )
        })
    }

    return(
        <ImageBackground
            source={require('../assets/images/background_stages.png')}
            style={{
                width:"100%",
                height:"100%",
            }}
        >
            <View style={{
                padding:15,
                alignItems:"center",
                justifyContent:"space-between",
                height:"100%"
            }} >
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    width:"100%"
                }} >
                    <AudioButton
                        onPress={()=>{
                            navigation.goBack();
                        }}
                    >
                        <Image
                            source={require('../assets/images/back.png')}
                            style={{
                                width:40,
                                height:40,
                            }}
                        />
                    </AudioButton>
                    <Text size={24} color="white" >Level Game</Text>
                    <View></View>
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    width:"100%",
                }} >
                    {renderLevels()}
                </View>
                <View></View>
            </View>
        </ImageBackground>
    )
}