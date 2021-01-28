/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = {}, action) {
  switch (action.type) {
    case "UPDATE_RESTURANT":
      return { ...state, rest: action.payload };
    case "REGISTER_RESTURANT":
      return { ...state, rest: action.payload };
    case "OWNER_AUTH":
      return { ...state, rest: action.payload };
    case "OWNER_LOGIN":
      return { ...state, rest: action.payload };
    case "GET_RESTURANTS":
      return { ...state, rest: action.payload };
    case "BOOK_RESTURANT":
      return { ...state, rest: action.payload };
    default:
      return state;
  }
}
