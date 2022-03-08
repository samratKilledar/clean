

import React, { Component } from 'react';
import { View, Text,TextInput } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderImage from '../../infrstructure/component/HeaderImage';
import HeaderText from '../../infrstructure/component/HeaderText';
import ButtonComponent from '../../infrstructure/component/ButtonComponent'
import styles from '../styleSheet/LanguageScreenStylesheet';

const UserTypeScreen  = (props) => {
  UserTypeScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  const {
    navigation,
  } = props;
  const newRegister=()=>{
    navigation.navigate('NewUser')
  }
  return (
    <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
             <HeaderImage/>
        </View>
       
        <View style={[{flex:3,alignItems:"center",justifyContent:"center"}]}>
             <HeaderText text="Welcome to PH Human!"/>
        </View>

       
        <View style={[styles.nextButton,{justifyContent:'center', alignContent:"center",flex:1.2}]}>
                    <ButtonComponent type="enable" text="New Users"  onStartShouldSetResponder={newRegister} />
                    
        </View>
        <View style={[styles.nextButton,{justifyContent:'flex-start', alignContent:"center",flex:2.3}]}>
                    <ButtonComponent type="enable" text="EXISTING  Users" />
                    
        </View>
    </View>
  );
};

const mapStateToProps = (state) => {
    const userdetails = state.languageScreen.userdetails;
    return {
        userdetails
    };
};
export default connect(mapStateToProps)((UserTypeScreen))