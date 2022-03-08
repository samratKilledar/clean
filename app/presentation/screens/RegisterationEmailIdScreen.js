

import React, { useState, useEffect } from 'react';
import { View, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../../infrstructure/component/HeaderComponent';
import styles from '../styleSheet/LanguageScreenStylesheet';
import HeaderText from '../../infrstructure/component/HeaderText';
import ButtonComponent from '../../infrstructure/component/ButtonComponent'
import SubHeaderTextMsg from '../../infrstructure/component/SubHeaderTextMsg';
import TextInputComponent from '../../infrstructure/component/TextInputComponent';
import TextComponent from '../../infrstructure/component/TextComponent';
const windowHeight = Dimensions.get("window").height;

const RegisterationEmailIdScreen = (props) => {
    RegisterationEmailIdScreen.PropTypes = {
        navigation: PropTypes.object.isRequired,
    };
    const {
        navigation,
    } = props;

    const [firstEmail, setCheck] = useState("");
    const [firstEmailValid, setCheckValid] = useState("")
    const [verifyEmail, setCheckSecond] = useState("");
    const [secondVerifyEmail, setCheckSecondValid] = useState("");
    const [checkBothEmail, checkBothEmailSame] = useState("")

    const [btnEnableDisable, checkBtnCondition] = useState(false);

    const emailAddres = (text) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === true) {
            setCheckValid(false);
            setCheck(text)
        }
        else {
            setCheckValid(true);
        }
    }
    const reenterEmailAddres = (text) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === true) {
            setCheckSecondValid(false);
            setCheckSecond(text);
        }
        else {
            setCheckSecondValid(true);

        }

    }

    useEffect(() => {

        if (firstEmail === verifyEmail && firstEmail != "" && verifyEmail !="") {
            checkBothEmailSame(false)
            checkBtnCondition(true);

        } else {
            checkBtnCondition(false);
            if (firstEmail != "" && verifyEmail != "") {
                checkBothEmailSame(true);
            }
        }
    })
    const openEmailPage = () => {
        navigation.navigate('ValidateAccount')
    }


    return (
        <View style={styles.mainContainer}>
            <View style={{ height: windowHeight / 15 }}>
                <HeaderComponent text="Registration" onClick={() => navigation.goBack()} backArrowImgPath={require('../../../assets/images/icon/backArrow/Arrow.png')} />
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"2 of 8"}`} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <HeaderText fontSize={18} fontWeight="bold" color="#2C2C2C" text={`${"What’s your E-Mail?"}`} />

            </View>

            <View style={{ flex: 5, flexDirection: "column", }}>
                <TextInputComponent type="email" placeholder="E-Mail" placeholderColor="#9B9B9B" textColor="#4A4A4A"
                    keyboardType="email-address"
                    onChangeText={text => emailAddres(text)} />
                {firstEmailValid ? <TextComponent value="please enter valid Email-Id" color="red" /> : null}

                <TextInputComponent type="email" placeholder="Confirm E-Mail" placeholderColor="#9B9B9B" textColor="#4A4A4A" keyboardType="email-address"
                    onChangeText={text => reenterEmailAddres(text)} />
                {secondVerifyEmail ? <TextComponent value="please enter valid confirm Email-Id" color="red" /> :
                    checkBothEmail ? <TextComponent value="Please confirm both email" color="red" /> :
                        null

                }




            </View>
            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center" }}>
                {btnEnableDisable ? <ButtonComponent onStartShouldSetResponder={openEmailPage} text="Save" type="enable" /> :
                    <ButtonComponent text="Save" type="disable" />
                }
            </View>

        </View>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)((RegisterationEmailIdScreen))