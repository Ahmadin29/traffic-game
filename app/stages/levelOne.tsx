import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, TextInput, TouchableOpacity, View } from "react-native";
import IonIcon from "@expo/vector-icons/Ionicons";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import AudioButton from "../../components/AudioButton";
import Controller from "../../components/Controller";
import Text from "../../components/Text";
import Colors from "../../constants/colors";
import layouts from "../../constants/layouts";
import stage_1 from "../../data/stage_1";
import Voice from '@react-native-voice/voice';

export default function LevelOne() {

    const randomWidth = useSharedValue(0);
    const [stage,setStage] = useState(1);
    const [showQuestion,setShowQuestion] = useState(false);
    const [answer,setAnswer] = useState("");
    const [isStarted,setIsStarted] = useState(false);
    const [isFinished,setFinished] = useState(false);

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
    
    useEffect(()=>{

        async function checkVoiceAvailability() {
          const data =  await Voice.isAvailable();
          console.log(data);
        }
    
        checkVoiceAvailability()
    
        function onSpeechStart(e:any) {
          console.log(e);
        }
    
        const onSpeechResults = (e:any) => {
          setIsStarted(false)
          setAnswer(e.value[0])
        };
    
        const onSpeechError = (e:any) => {
          setIsStarted(false)
          Alert.alert('Oopss','There is an error with error code '+e?.error?.message)
          console.log(e);
        };
    
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechResults = onSpeechResults;
    
        return function cleanup() {
          Voice.destroy().then(Voice.removeAllListeners);
        };
    },[])

    const onSpeechStart = async()=>{
        try {
            setIsStarted(true)
            await Voice.start('id-id');
        } catch (e) {
            console.error(e);
        }
    }
    
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
                                    justifyContent:"center",
                                    alignItems:"flex-end"
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
                                        right:100,
                                        zIndex:2
                                    }}>
                                        <Image
                                            source={v.image}
                                            style={{
                                                width:"100%",
                                                height:"100%"
                                            }}
                                        />
                                    </View>

                                    <View style={{
                                        width:20,
                                        height:200,
                                        backgroundColor:Colors.text,
                                        position:"absolute",
                                        borderRadius:200,
                                        right:140,
                                        bottom:-30
                                    }} >
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
                {
                    showQuestion &&
                    <TouchableOpacity style={{
                        padding:20,
                        backgroundColor:Colors.success
                    }} onPress={()=>{
    
                        console.log(stage_1[stage-1]?.answer);
                        
                        if (stage_1[stage-1]?.answer.includes(answer)) {
                            setStage(stage + 1)
                            setShowQuestion(false)
                            randomWidth.value = randomWidth.value + 20;

                            Alert.alert('Benar!','Jawaban kamu tepat sekali')
                            setAnswer("");
                        }else{
                            Alert.alert('Salah!','Hmmm, sepertinya jawaban kamu kurang tepat')
                        }
    
                        console.log(stage_1[stage-1]?.answer,answer);
    
                        if (stage + 1 > 3) {
                            return
                        }
    
                    }} >
                        <Text>Jawab</Text>
                    </TouchableOpacity>
                }
                {
                    !showQuestion &&
                    <Controller
                        onPressIn={(e)=>{
                            interval = setInterval(()=>{
                                if (randomWidth.value + 20 == (Math.floor(layouts.window.width / 20) * 20) * stage) {
                                    clearInterval(interval);

                                    if (stage - 1 < stage_1.length) {
                                        setShowQuestion(true)
                                    }else{
                                        setFinished(true)
                                    }
                                    return
                                }
                                
                                randomWidth.value = randomWidth.value + 20;
                                
                            },100)
                        }}
                        onPressOut={()=>{
                            clearInterval(interval)
                        }}
                    />
                }
            </View>
            {
                showQuestion &&
                <View style={{
                    width:layouts.window.width - 200,
                    minHeight:100,
                    backgroundColor:"white",
                    position:"absolute",
                    bottom:20,
                    left:20,
                    borderWidth:5,
                    borderColor:Colors.grey1,
                    borderRadius:10,
                    justifyContent:"center",
                    padding:20,
                }} >
                    <Text size={20} style={{
                        marginBottom:10,
                    }} >Pertanyaan</Text>
                    <Text color="textSecondary" >{stage_1[stage - 1]?.question}</Text>

                    <View style={{
                        borderWidth:1,
                        width:"100%",
                        marginTop:20,
                        flexDirection:"row",
                        borderRadius:10,
                    }} >
                        <TextInput
                            style={{
                                padding:5,
                                paddingHorizontal:10,
                                backgroundColor:Colors.grey1,
                                borderRadius:10,
                                flex:1,
                            }}
                            value={answer}
                            onChangeText={(text)=>{
                                setAnswer(text)
                            }}
                            placeholder="Jawaban Kamu"
                        />
                        <TouchableOpacity style={{
                            flexDirection:"row",
                            alignItems:"center",
                            padding:10,
                        }} onPress={()=>{
                            onSpeechStart()
                        }} >
                            <IonIcon color={isStarted ? Colors.danger : Colors.text} size={20} name="md-mic" />
                            <Text color={isStarted ? "danger": "text"}>Jawab Dengan Suara</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            {
                isFinished &&
                <View style={{
                    width:layouts.window.width - 30,
                    minHeight:layouts.window.height - 30,
                    backgroundColor:"white",
                    position:"absolute",
                    bottom:20,
                    left:20,
                    borderWidth:5,
                    borderColor:Colors.grey1,
                    borderRadius:10,
                    justifyContent:"center",
                    alignItems:"center",
                    padding:20,
                }} >
                    <Text size={40} >Yeaayy</Text>
                    <Text style={{textAlign:"center"}} color="textSecondary">Kamu berhasil melewati{'\n'}semua pertanyaan</Text>
                    <TouchableOpacity style={{
                        padding:10,
                        backgroundColor:Colors.primary,
                        marginTop:50,
                        paddingHorizontal:20,
                    }} onPress={()=>{
                        navigation.goBack();
                    }} >
                        <Text size={20} >Level Berikutnya</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}