

import React, { Component } from 'react';
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderImage from '../../infrstructure/component/HeaderImage';
import HeaderText from '../../infrstructure/component/HeaderText';
import SubHeaderTextMsg from '../../infrstructure/component/SubHeaderTextMsg';
import ButtonComponent from '../../infrstructure/component/ButtonComponent';
import styles from '../styleSheet/LanguageScreenStylesheet';

const LanguageScreen = (props) => {
    LanguageScreen.propTypes = {
        navigation: PropTypes.object.isRequired,
      };
      const {
        navigation,
      } = props;
    const nextPageUserType=()=>{
         navigation.navigate('UserType')
       }
  return (
    <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
             <HeaderImage/>
        </View>
        <View style={styles.headerText}>
             <HeaderText text="Language"/>
        </View>
        <View style={styles.headerTextMsg}>
            <SubHeaderTextMsg text= {`${"Please select the language you want as \n default in this tool"}`}/>
        </View>
        <View style={styles.languageBox}>
                <View style={styles.boxView}>
                    <Text style={styles.textBoxView}>English</Text>
                </View>   
        </View>
        <View style={styles.nextButton}>
                    <ButtonComponent type="enable" text="Next" onStartShouldSetResponder={nextPageUserType}     />
        </View>
        <View>


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
export default connect(mapStateToProps)((LanguageScreen))