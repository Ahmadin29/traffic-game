import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import AudioButton from "../../components/AudioButton";
import Controller from "../../components/Controller";
import Text from "../../components/Text";
import Colors from "../../constants/colors";
import layouts from "../../constants/layouts";
import stage_1 from "../../data/stage_1";

export default function LevelOne() {

    const randomWidth = useSharedValue(0);
    const [stage,setStage] = useState(1);
    const [challenges,setChallenges] = useState<any>([]);

    let interval:any;

    const navigation = useNavigation();

    const style = useAnimatedStyle(() => {
        return {
          right: withSpring(randomWidth.value, {
            damping: 20,
            stiffness: 90,
          }),
        };
    });

    const challenge = new Array();
    
    return(
        <View style={{
            flex:1,
            backgroundColor:"white"
        }} >
            <View style={{
                height:"100%",
            }} >
                <Animated.View style={[{
                    height:"100%",
                    flexDirection:"row",
                },style]}>
                    <View style={{
                        position:"relative",
                        width:"100%",
                        height:"100%",
                        alignItems:"center",
                        justifyContent:"center"
                    }} >
                        <Image
                            source={require('../../assets/images/background_stages_long.png')}
                            style={{
                                width:"100%",
                                height:"100%"
                            }}
                        />
                    </View>
                    {
                        stage_1.map((v:any,i:number)=>{
                            return (
                                <View style={{
                                    position:"relative",
                                    width:"100%",
                                    height:"100%",
                                    alignItems:"center",
                                    justifyContent:"center"
                                }} >
                                    <Image
                                        source={require('../../assets/images/background_stages_long.png')}
                                        style={{
                                            width:"100%",
                                            height:"100%"
                                        }}
                                    />
                                    <View style={{
                                        backgroundColor:Colors.text,
                                        width:100,
                                        height:100,
                                        position:"absolute",
                                        borderRadius:200,
                                    }}>
                                        <Text>asd</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <View style={{
                        position:"relative",
                        width:"100%",
                        height:"100%",
                        alignItems:"center",
                        justifyContent:"center"
                    }} >
                        <Image
                            source={require('../../assets/images/background_stages_long.png')}
                            style={{
                                width:"100%",
                                height:"100%"
                            }}
                        />
                    </View>
                </Animated.View>
            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                width:"100%",
                padding:15,
                position:"absolute"
            }} >
                <AudioButton
                    onPress={()=>{
                        navigation.goBack();
                    }}
                >
                    <Image
                        source={require('../../assets/images/back.png')}
                        style={{
                            width:40,
                            height:40,
                        }}
                    />
                </AudioButton>
                <Text size={24} color="white" >Level Game</Text>
            </View>
            <View style={{
                position:"absolute",
                bottom:30,
                left:-100,
            }} >
                <Image
                    source={require('../../assets/images/car.png')}
                    style={{
                        height:100,
                    }}
                    resizeMode="contain"
                />
            </View>
            <View style={{
                position:"absolute",
                bottom:50,
                right:50,
            }} >
                <TouchableOpacity style={{
                    padding:20,
                    backgroundColor:"red"
                }} onPress={()=>{
                    if (interval) {
                        setStage(stage + 1);
                    }

                    if (stage + 1 > 3) {
                        return
                    }

                    randomWidth.value = randomWidth.value + 20;
                }} >
                    <Text>Passed</Text>
                </TouchableOpacity>
                <Controller
                    onPressIn={(e)=>{
                        interval = setInterval(()=>{
                            if (randomWidth.value + 20 == (Math.floor(layouts.window.width / 20) * 20) * stage) {
                                clearInterval(interval);
                                return
                            }
                            
                            randomWidth.value = randomWidth.value + 20;
                            
                        },100)
                    }}
                    onPressOut={()=>{
                        clearInterval(interval)
                    }}
                />
            </View>
        </View>
    )
}