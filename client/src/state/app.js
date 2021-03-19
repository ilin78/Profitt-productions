const initialState = {
  isLanguage: true,
};

const TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE";

export const toggleLanguage = (isLanguage) => ({
  type: TOGGLE_LANGUAGE,
  isLanguage,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE:
      return { ...state, isLanguage: action.isLanguage };
    default:
      return state;
  }
};
