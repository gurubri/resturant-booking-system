/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = {}, action) {
  switch (action.type) {
    case "GET_ORDER":
      return {
        ...state,
        book: action.payload.doc,
        status: action.payload.success,
      };
    case "GET_RESTURANT":
      return { ...state, book: action.payload };
    case "BOOK_RESTURANT":
      return { ...state, book: action.payload };
    default:
      return state;
  }
}
