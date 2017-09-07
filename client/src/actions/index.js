import axios from "axios";
import { FETCH_USER } from "./types";

// v2 of THUNK action creator
// this is the best format for async request actions that aren't just fancy
// if and else things
export const fetchUserV2 = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

// can reuse the same dispatch because we are just using the user
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripepayment", token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

// v1 of THUNK action creator
export const fetchUserV1 = () => {
  // if redux-THUNK sees a funcion returned, it will intervene
  // this will then be bounced to the reduces
  // this is needed because we don't know when this will be gotten ASYNC
  return function(dispatch) {
    axios.get("/api/current_user").then(res =>
      dispatch({
        type: FETCH_USER,
        payload: res
      })
    );
  };
};

// export default fetchUserV1;

// no redux THUNK version
// export function oldStyleFetchUser() {
//   const request = axios.get("/api/current_user");

//   //standard return of a POJO action with TYPE and PAYLOAD
//   return {
//     type: FETCH_USER,
//     payload: request
//   };
// }
