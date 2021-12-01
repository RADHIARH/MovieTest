export const addToFavoris = (film) => {
  return {
    type: "addfilm",
    payload: film,
  };
};

export const filterTitle = (title) => {
  return {
    type: "filtertitle",
    val: title,
  };
};
export const filterAll = () => {
  return {
    type: "filterall",
    
  };
};
export const filterRange = (min,max) => {
  return {
    type: "filterrange",
    val2:min,
    val3:max
  };
};