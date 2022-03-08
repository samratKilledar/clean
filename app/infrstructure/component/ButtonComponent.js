import React, { Component } from 'react';
import { Dimensions, View, StyleSheet,Text } from 'react-native';
import PropTypes from 'prop-types';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ButtonComponent =(props)=>{
    ButtonComponent.propTypes = {
        text: PropTypes.string.isRequired,
        onStartShouldSetResponder: PropTypes.func.isRequired,
      };
      const {
        text, onPronStartShouldSetResponderess
      } = props;
    return(
        props.type=="enable"?
            <View style={styles.btnView} onStartShouldSetResponder={props.onStartShouldSetResponder}>
                <Text style={styles.text}>{props.text}</Text>
            </View>:
             <View style={styles.btnViewDisable} onStartShouldSetResponder={props.onStartShouldSetResponder}>
              <Text style={styles.text}>{props.text}</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    btnView:{
        borderColor:"#707070",
      //  borderWidth:1,
        borderRadius:24,
        padding:10,
        width:windowWidth/1.3,
        alignItems:"center",
        backgroundColor:"#28AFB5"
    },
    btnViewDisable:{
      borderColor:"#707070",
      //  borderWidth:1,
        borderRadius:24,
        padding:10,
        width:windowWidth/1.3,
        alignItems:"center",
        backgroundColor:"#A1DCDF"
    },
    text:{
        color:"#FFFFFF",
        fontFamily:"Droid Sans",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:16,
        textTransform:"uppercase",
        fontWeight:"700"
    }
  });
export default ButtonComponent;