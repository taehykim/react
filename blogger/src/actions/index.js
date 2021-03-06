import _ from "lodash";
import jsonPlacholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // // console.log(userIds);

  // userIds.forEach((id) => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

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

// using memoizatio to solve overfetching problem
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlacholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlacholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
