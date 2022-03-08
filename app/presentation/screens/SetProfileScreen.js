

import React, { useState, useEffect } from 'react';
import { View,Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../../infrstructure/component/HeaderComponent';
import styles from '../styleSheet/LanguageScreenStylesheet';
import HeaderText from '../../infrstructure/component/HeaderText';
import ButtonComponent from '../../infrstructure/component/ButtonComponent'
import SubHeaderTextMsg from '../../infrstructure/component/SubHeaderTextMsg';
import IconComponent from '../../infrstructure/component/IconComponent';
const windowHeight = Dimensions.get("window").height;

const SetProfileScreen = (props) => {
    SetProfileScreen.PropTypes = {
        navigation: PropTypes.object.isRequired,
    };
    const {
        navigation,
    } = props;

    const [iAmPatinetIcon, setCheck] = useState(false);
    const [iCarePatinetIcon, setCheckSecond] = useState(false);
    const [btnEnableDisable, checkBtnCondition] = useState(false);

    const selectUnselect=()=>{
        setCheck(current  => !current )
    }
    const openEmailPage=()=>{
        navigation.navigate('setProfileEmail');
    }

    useEffect(()=>{
        if(iAmPatinetIcon){
            checkBtnCondition(true)
        }else{
            checkBtnCondition(false)
        }
    })

    return (
        <View style={styles.mainContainer}>
            <View style={{ height:windowHeight/15}}>
                <HeaderComponent text="Registration" onClick={() => navigation.goBack()} backArrowImgPath={require('../../../assets/images/icon/backArrow/Arrow.png')} />
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"1 of 8"}`} />
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <HeaderText fontSize={18} fontWeight="bold" color="#2C2C2C" text={`${"Set your Profile"}`} />
                <SubHeaderTextMsg fontSize={14} fontWeight="normal" text={`${"Please select who you are"}`} />
            </View>


            <View style={{ flex: 5, flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column",paddingBottom: 50 }}>
                    <View style={{ paddingBottom: 20 }}>
                       {iAmPatinetIcon? 
                       <IconComponent paddingText={20} onClick={() => selectUnselect()} width={40} height={40} path={require('../../../assets/images/icon/groupHeartSelected/heartSelect.png')} /> 
                        :<IconComponent paddingText={20} onClick={() => selectUnselect()} width={40} height={40} path={require('../../../assets/images/icon/groupHeart/Group.png')} />
                        }
                   </View>
                    <SubHeaderTextMsg fontSize={18} fontWeight="normal" text={`${"I am a patient"}`} />

                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column",paddingBottom: 50 }}>
                    <View style={{ paddingBottom: 20 }}>
                        {
                            iCarePatinetIcon?
                            <IconComponent paddingText={20}  width={40} height={40} path={require('../../../assets/images/icon/groupHeartHand/GroupHeartHand.png')} />
                            :
                            <IconComponent paddingText={20}  width={40} height={40} path={require('../../../assets/images/icon/groupHeartHand/GroupHeartHand.png')} />

                        }
                    </View>
                    <SubHeaderTextMsg fontSize={18} fontWeight="normal" text={`${"I care for a Patient"}`} />
                </View>
            </View>
            <View style={{ flex: 3, justifyContent: "flex-start", alignItems: "center" }}>
                {btnEnableDisable ? <ButtonComponent onStartShouldSetResponder ={openEmailPage} text="Save" type="enable" /> :
          <ButtonComponent  text="Save" type="disable" />
          }
            </View>

        </View>
    );
};

const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)((SetProfileScreen))