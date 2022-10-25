import { GestureResponderEvent, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import Text from "../Text";

interface ButtonProps {
    onPressIn               : (e:GestureResponderEvent)=>void,
    onPressOut              : (e:GestureResponderEvent)=>void,
    children?               : any,
}

export default function Controller(props:ButtonProps) {
    return(
        <TouchableOpacity
            {...props}
            onPressIn={(e)=>{
                props.onPressIn(e)
            }}
            onPressOut={(e)=>{
                props.onPressOut(e)
            }}
            style={{
                padding:20,
                backgroundColor:Colors.primary,
            }}
        >
            <Text>Gas</Text>
        </TouchableOpacity>
    )
}