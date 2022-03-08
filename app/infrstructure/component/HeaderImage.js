import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HeaderImage =(props)=>{
    return(
            <Image
                style={styles.image}
                source={require('../../../assets/images/img/mskImg/Group.png')}
            />
    )
}
const styles = StyleSheet.create({
    image:{
        width:windowWidth,
    }
  });
export default HeaderImage;