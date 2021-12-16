export const initialState = {
  teams: [],
}
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_user_teams":
      return {
        ...state,
        teams: action.payload,
      };
    case "update_user_teams":
      return { ...state, teams: action.payload };

    default:
      return state;
  }
};

