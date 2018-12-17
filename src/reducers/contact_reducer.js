export default function(state = {}, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contactList: action.payload };
    case "GET_CONTACT_INFO":
      return { ...state, contactInfo: action.payload };
    default:
      return state;
  }
}
