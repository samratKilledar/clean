

import React, { useState , useEffect} from 'react';
import { View,Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HeaderComponent from '../../infrstructure/component/HeaderComponent';
import styles from '../styleSheet/LanguageScreenStylesheet';
import HeaderText from '../../infrstructure/component/HeaderText';
import SubHeaderTextMsg from '../../infrstructure/component/SubHeaderTextMsg';
import IconComponent from '../../infrstructure/component/IconComponent';
import ButtonComponent from '../../infrstructure/component/ButtonComponent'
const windowHeight = Dimensions.get("window").height;

const RegisterationScreen = (props) => {
    RegisterationScreen.PropTypes = {
        navigation: PropTypes.object.isRequired,
      };
      const {
        navigation,
      } = props;
    const [firstTerm, setCheck] = useState(false);
    const [secondTerm, setCheckSecond] = useState(false);
    const [thirdTerm, setCheckThird] = useState(false);
    const [btnEnableDisable, checkBtnCondition] = useState(false);

    const selectUnselect =()=>{
         setCheck(current  => !current )
    }

    const selectUnselectSecond=()=>{
        setCheckSecond(current => !current)
    }
    const selectUnselectThird=()=>{
        setCheckThird(current => !current)
    }
  
    useEffect(()=>{
        if(firstTerm && secondTerm && thirdTerm ){
            checkBtnCondition(true)
        }else{
            checkBtnCondition(false)
        }
    })
    const openSetProfileType=()=>{
        navigation.navigate('setProfile');
    }

  return (
    <View style={styles.mainContainer}>
        <View style={{height:windowHeight/15}}>
            <HeaderComponent text="Registration" onClick={()=> navigation.goBack()} backArrowImgPath={require('../../../assets/images/icon/backArrow/Arrow.png')}/>
        </View>

        <View style={{flex:2,alignItems:"center",justifyContent:"flex-end"}}>            
                <HeaderText text={`${"Terms & Conditions and Privacy Policy \n Welcome to PH Human!"}`}/>
        </View>   


        <View style={{flex:9}}>
            <View style={{alignItems:"center",justifyContent:"center",flex:1,}}>
                    <View style={{borderColor:"#979797",borderWidth:1,borderRadius:15,padding:20, width:"90%",height:"90%",alignItems:"center", justifyContent:"space-between"}}>
                      
                        {firstTerm?<IconComponent onClick={()=>selectUnselect()} width={30} height={30} path={require('../../../assets/images/icon/select/SELECT.png')}/>:
                            <IconComponent onClick={()=>selectUnselect()} width={30} height={30} path={require('../../../assets/images/icon/unSelect/UNSELECT.png')}/>
                        }
                        <SubHeaderTextMsg  fontSize={18} fontWeight="normal" text= {`${"I agree to Janssen’s privacy Policy"}`}/>
                        {secondTerm?<IconComponent onClick={()=>selectUnselectSecond()} width={30} height={30} path={require('../../../assets/images/icon/select/SELECT.png')}/>:
                        <IconComponent onClick={()=>selectUnselectSecond()} width={30} height={30} path={require('../../../assets/images/icon/unSelect/UNSELECT.png')}/>
                        }
                        <SubHeaderTextMsg fontSize={18} fontWeight="normal" text= {`${"I agree to help improve the service by \n sharing the data on how i use the \n service for aggregated analytics."}`}/>
                        {thirdTerm?<IconComponent onClick={()=>selectUnselectThird()} width={30} height={30} path={require('../../../assets/images/icon/select/SELECT.png')}/>:
                         <IconComponent onClick={()=>selectUnselectThird()} width={30} height={30} path={require('../../../assets/images/icon/unSelect/UNSELECT.png')}/>    
                        }
                        <SubHeaderTextMsg width={30} height={30} fontSize={18} fontWeight="normal" text= {`${"I agree to Avegen’s T&C and Privacy \n Policy"}`}/>

                    </View>
            </View>
        </View>    

        <View style={{flex:3,justifyContent:"flex-start",alignItems:"center"}}>
          {btnEnableDisable ? <ButtonComponent  onStartShouldSetResponder ={openSetProfileType} text="Save" type="enable" /> :
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
export default connect(mapStateToProps)((RegisterationScreen))