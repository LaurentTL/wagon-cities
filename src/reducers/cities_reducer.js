const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'CITY_SLECTED':
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
