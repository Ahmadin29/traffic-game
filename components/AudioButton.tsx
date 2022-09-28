import { useState } from "react";
import { Audio } from 'expo-av';
import { GestureResponderEvent, TouchableOpacity } from "react-native";

interface ButtonProps {
    onPress         : (e:GestureResponderEvent)=>void,
    children        : any,
}

export default function AudioButton(props:ButtonProps) {

    const [click,setClick] = useState<any>();

    const onClick = async()=>{

        const ClickSound = await Audio.Sound.createAsync(require('../assets/musics/click.wav'));
        setClick(ClickSound.sound)
    
        await ClickSound.sound.playAsync();
      }

    return(
        <TouchableOpacity
            {...props}
            onPress={(e)=>{
                onClick()
                props.onPress(e)
            }}
        />
    )
}