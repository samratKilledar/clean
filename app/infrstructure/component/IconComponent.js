import React, { Component } from 'react';
import { Image, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const IconComponent =(props)=>{
    return(
        <TouchableOpacity activeOpacity = { .5 }  onPress={props.onClick}>
        <Image
            style={styles.image}
            source={props.path}
            width={props.width == undefined? 50 : props.width}
            height={props.height == undefined? 50 : props.height}
        />
        </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    image:{
       
    }
  });
export default IconComponent;