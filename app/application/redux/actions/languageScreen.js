export const CHANGE_USER_DETAILS = "CHANGE_USER_DETAILS";


export const handleUserDetails = data => ({
    type: CHANGE_USER_DETAILS,
    userdetails: data
  });