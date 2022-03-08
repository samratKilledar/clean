import {
  CHANGE_USER_DETAILS
} from '../actions/languageScreen';

const initialState = {
  userdetails:{
    username:"samrta killedar",
    password:"password"
  }
}

export default (state = initialState, action) => {

    switch (action.type) {
      case CHANGE_USER_DETAILS:
        return {
          ...state,
          userdetails:action.userdetails || "",
        }

        default:
        return state;
  }
  
};
