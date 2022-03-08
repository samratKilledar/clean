import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


const SubHeaderTextMsg =(props)=>{
    return(
            <Text style={[styles.text,{ fontSize:props.fontSize == undefined ? 14 :props.fontSize, 
                fontWeight:props.fontWeight == undefined ?"bold": props.fontWeight,
                color:props.color == undefined?"#4A4A4A":props.color,
                //paddingTop:props.paddingText==undefined?"":props.paddingText
        }]}>{props.text}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily:"Droid Sans",
        fontStyle:"normal",
        textAlign:"center",
        fontStyle:"normal"
    }
  });
export default SubHeaderTextMsg;