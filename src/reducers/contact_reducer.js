export default function(state = {}, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, wineList: action.payload };
    default:
      return state;
  }
}
