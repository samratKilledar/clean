import { StyleSheet ,Dimensions} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
 mainContainer: {
    alignItems:'stretch',
    justifyContent:'flex-start',
    flex:1,
    flexDirection:"column",
  },
  imageContainer:{
     flex:4,
  },
  headerText:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-end",
    // paddingBottom:10,
  
  },
  headerTextMsg:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    marginTop:10
  },
  languageBox:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    
  },
  boxView:{
    borderColor:"#707070",
    borderWidth:1,
    borderRadius:24,
    padding:10,
    width:windowWidth/2.5,
    alignItems:"center",
  },
  textBoxView:{
    color:"#2C2C2C",
    fontFamily:"Droid Sans",
    fontStyle:"normal",
    fontWeight:"bold",
    fontSize:18,
    textTransform:"capitalize",
    fontWeight:"400"
  },
  nextButton:{
    flex:2,
    alignItems:"center",
    justifyContent:"flex-start",
  }

});