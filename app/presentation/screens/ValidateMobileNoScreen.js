

import React, { useState, useEffect } from 'react';
import { View, Dimensions,TouchableOpacity,Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../../infrstructure/component/HeaderComponent';
import styles from '../styleSheet/LanguageScreenStylesheet';
import HeaderText from '../../infrstructure/component/HeaderText';
import ButtonComponent from '../../infrstructure/component/ButtonComponent'
import SubHeaderTextMsg from '../../infrstructure/component/SubHeaderTextMsg';
const windowHeight = Dimensions.get("window").height;

const ValidateMobileNoScreen = (props) => {
    ValidateMobileNoScreen.PropTypes = {
        navigation: PropTypes.object.isRequired,
    };
    const {
        navigation,
    } = props;

    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');

  
    const openMobileNoPage = () => {
        navigation.navigate('ValidateMobileNo')

    }


    return (
        <View style={styles.mainContainer}>
            <View style={{ height: windowHeight / 15 }}>
                <HeaderComponent text="Registration" onClick={() => navigation.goBack()} backArrowImgPath={require('../../../assets/images/icon/backArrow/Arrow.png')} />
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"4 of 8"}`} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
                <HeaderText fontSize={18} fontWeight="bold" color="#2C2C2C" text={`${"What’s your Phone number?"}`} />
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"Please provide us with your phone number in \n order to receive a security code"}`} />

            </View>


            <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
                <View style={[{ justifyContent: 'flex-start', alignContent: "center", flex: 1.5, paddingBottom: 20 }]}>
                    

                </View>
                <View style={[{ justifyContent: 'flex-start', alignContent: "center", flex: 1, }]}>
                    <ButtonComponent type="enable" text="EXISTING  Users" />


                </View>

                
            </View>

        </View>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)((ValidateMobileNoScreen))