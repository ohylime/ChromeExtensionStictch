const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_PET':
      return true;
    case 'HIDE_PET':
      return false;
    default:
      return false;
  }
};
