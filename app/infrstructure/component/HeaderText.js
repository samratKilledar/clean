import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


const HeaderText =(props)=>{
    return(
            <Text style={styles.text}>{props.text}</Text>
    )
}
const styles = StyleSheet.create({
    text:{
        color:"#2C2C2C",
        fontFamily:"Droid Sans",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:18,
        textTransform:"capitalize",
        fontWeight:"700",
        textAlign:"center"
    }
  });
export default HeaderText;