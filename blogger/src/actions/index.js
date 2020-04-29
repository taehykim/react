import jsonPlacholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlacholder.get("/posts");

//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlacholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
