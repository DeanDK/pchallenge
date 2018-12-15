export default function(state = {}, action) {
  switch (action.type) {
    case "GET_WINES":
      return { ...state, wineList: action.payload };
    case "GET_WINE":
      return { ...state, wine: action.payload };
    case "GET_ADDED_WINE":
      return { ...state, added: action.payload };
    case "GET_DELETED_WINE":
      return { ...state, deleted: action.payload };
    case "GET_UPDATED_WINE":
      return { ...state, updated: action.payload };
    default:
      return state;
  }
}
