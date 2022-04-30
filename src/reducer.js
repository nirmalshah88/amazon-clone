export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  console.log(action.item);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
