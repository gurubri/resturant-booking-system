/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = {}, action) {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return { ...state, login: action.payload };
    case "USER_LOGIN":
      return { ...state, login: action.payload };
    case "USER_REGISTER":
      return { ...state, login: action.payload };
    case "USER_AUTH":
      return { ...state, login: action.payload };
    default:
      return state;
  }
}
