import { takeLatest, put, call } from "redux-saga/effects";

import { GET_POSTS, GET_POST_DETAILS } from "../Actions/actionTypes";

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from "../Actions/actions.js";

import { getPosts, getPostDetails } from "../../Services/PostService.js";

function* onGetPosts() {
  try {
    const response = yield call(getPosts);
    yield put(getPostsSuccess(response.data));
  } catch (error) {
    yield put(getPostsFail(error.message));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    debugger;
    const response = yield call(getPostDetails, id);
    yield put(getPostDetailsSuccess(response.data));
  } catch (error) {
    yield put(getPostDetailsFail(error.message));
  }
}

function* CartSaga() {
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default CartSaga;
