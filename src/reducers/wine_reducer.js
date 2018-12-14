export default function(state = {}, action) {
  switch (action.type) {
    case "GET_WINES":
      return { ...state, wineList: action.payload };
    case "GET_WINE":
      return { ...state, wine: action.payload };
    default:
      return state;
  }
}
