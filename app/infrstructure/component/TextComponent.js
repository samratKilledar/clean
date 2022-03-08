import React, { Component } from 'react';
import {Text} from "react-native";

const TextComponent =(props)=>{
    return(
        <Text style={{textAlign:"center", color:props.color}}>{props.value}</Text>
    )
}
export default TextComponent;