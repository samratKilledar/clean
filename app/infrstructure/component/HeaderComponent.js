import React, { Component } from 'react';
import { Text, Dimensions, View, StyleSheet } from 'react-native';
import IconComponent from "./IconComponent";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HeaderComponent = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.iconStyle} >
                <IconComponent width={20} height={20} path={props.backArrowImgPath} onClick={props.onClick}></IconComponent>
            </View>
            <View style={styles.headerView} >
                <Text style={styles.headerText}>{props.text}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#6F205A",
        height: "100%",
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1
    },
    iconStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerView:{
        flex:5,
        paddingLeft:windowWidth/4,
    },
    headerText: {
        color:"#FFFFFF",
        fontFamily:"Droid Sans",
        fontStyle:"normal",
        fontWeight:"bold",
        fontSize:18,
        textTransform:"uppercase",
      
    }
});
export default HeaderComponent;