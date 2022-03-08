

import React, { useState, useEffect } from 'react';
import { View, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../../infrstructure/component/HeaderComponent';
import styles from '../styleSheet/LanguageScreenStylesheet';
import HeaderText from '../../infrstructure/component/HeaderText';
import ButtonComponent from '../../infrstructure/component/ButtonComponent'
import SubHeaderTextMsg from '../../infrstructure/component/SubHeaderTextMsg';
const windowHeight = Dimensions.get("window").height;

const ValidateAccountScreen = (props) => {
    ValidateAccountScreen.PropTypes = {
        navigation: PropTypes.object.isRequired,
    };
    const {
        navigation,
    } = props;

   

  
    const openMobileNoPage = () => {
        navigation.navigate('ValidateMobileNo')

    }


    return (
        <View style={styles.mainContainer}>
            <View style={{ height: windowHeight / 15 }}>
                <HeaderComponent text="Registration" onClick={() => navigation.goBack()} backArrowImgPath={require('../../../assets/images/icon/backArrow/Arrow.png')} />
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"3 of 8"}`} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
                <HeaderText fontSize={18} fontWeight="bold" color="#2C2C2C" text={`${"Please select how you would \n like to validate your account"}`} />
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"We will send a security code to the selected\n medium to validate your account"}`} />

            </View>


            <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
                <View style={[{ justifyContent: 'flex-end', alignContent: "center", flex: 1.5, paddingBottom: 20 }]}>
                    <ButtonComponent type="enable" text="Phone NUMBER" onStartShouldSetResponder={openMobileNoPage}/>

                </View>
                <View style={[{ justifyContent: 'flex-start', alignContent: "center", flex: 1, }]}>
                    <ButtonComponent type="enable" text="E-mail ID" />

                </View>
            </View>

        </View>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)((ValidateAccountScreen))