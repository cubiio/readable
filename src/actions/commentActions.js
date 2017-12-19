import {
  editAndPersistComment,
  deleteComment,
  fetchCommentsForSinglePost,
  persistComment,
  persistVote,
} from '../utils/api';

export const RECEIVE_COMMENTS_SUCCESS = 'RECEIVE_COMMENTS_SUCCESS';
export const receiveCommentsSuccess = payload => ({
  type: RECEIVE_COMMENTS_SUCCESS,
  payload,
});

export const RECEIVE_COMMENTS_FAIL = 'RECEIVE_COMMENTS_FAIL';
export const receiveCommentsFail = () => ({
  type: RECEIVE_COMMENTS_FAIL,
});

export const fetchComments = payload => dispatch =>
  fetchCommentsForSinglePost(payload)
    .then(comments => dispatch(receiveCommentsSuccess(comments)))
    .catch(error => dispatch(receiveCommentsFail(error)));

export const ADD_NEW_COMMENT_SUCCESS = 'ADD_NEW_COMMENT_SUCCESS';
export const addCommentSuccess = payload => ({
  type: ADD_NEW_COMMENT_SUCCESS,
  payload,
});

export const ADD_NEW_COMMENT_FAILURE = 'ADD_NEW_COMMENT_FAILURE';
export const addCommentError = () => ({
  type: ADD_NEW_COMMENT_FAILURE,
});

export const INCREMENT_COMMENT_COUNT = 'INCREMENT_COMMENT_COUNT';
export const incrementCommentCount = payload => ({
  type: INCREMENT_COMMENT_COUNT,
  payload,
});

export const addCommentPost = payload => (dispatch) => {
  persistComment(payload)
    .then(data => dispatch(addCommentSuccess(data)))
    .then(data => dispatch(incrementCommentCount(data)))
    .catch(error => dispatch(addCommentError(error)));
};

export const TOGGLE_COMMENT_VIEW_TO_EDIT = 'TOGGLE_COMMENT_VIEW_TO_EDIT';
export const toggleCommentViewToEdit = payload => ({
  type: TOGGLE_COMMENT_VIEW_TO_EDIT,
  payload,
});

export const TOGGLE_COMMENT_EDIT_TO_VIEW = 'TOGGLE_COMMENT_EDIT_TO_VIEW';
export const toggleCommentFromEditToView = payload => ({
  type: TOGGLE_COMMENT_EDIT_TO_VIEW,
  payload,
});

export const editExistingComment = payload => (dispatch) => {
  editAndPersistComment(payload)
    .then(data => dispatch(addCommentSuccess(data)))
    .catch(error => dispatch(addCommentError(error)));
};

export const REQUEST_DELETE_COMMENT = 'REQUEST_DELETE_COMMENT';
export const requestDeleteComment = payload => ({
  type: REQUEST_DELETE_COMMENT,
  payload,
});

export const CANCEL_REQUEST_DELETE_COMMENT = 'CANCEL_REQUEST_DELETE_COMMENT';
export const cancelRequestDeleteComment = () => ({
  type: CANCEL_REQUEST_DELETE_COMMENT,
});

export const CONFIRM_DELETE_COMMENT = 'CONFIRM_DELETE_COMMENT';
export const confirmDeleteComment = payload => ({
  type: CONFIRM_DELETE_COMMENT,
  payload,
});

export const FAILED_DELETE_COMMENT = 'FAILED_DELETE_COMMENT';
export const failedDeleteComment = () => ({
  type: FAILED_DELETE_COMMENT,
});

export const DECREMENT_COMMENT_COUNT = 'DECREMENT_COMMENT_COUNT';
export const decrementCommentCount = payload => ({
  type: DECREMENT_COMMENT_COUNT,
  payload,
});

export const processCommentDeletion = payload => (dispatch) => {
  deleteComment(payload)
    .then(data => dispatch(confirmDeleteComment(data)))
    .then(data => dispatch(decrementCommentCount(data)))
    .catch(error => dispatch(failedDeleteComment(error)));
};

export const VOTE_COMMENT_SUCCESS = 'VOTE_COMMENT_SUCCESS';
export const voteCommentSuccess = payload => ({
  type: VOTE_COMMENT_SUCCESS,
  payload,
});

export const VOTE_COMMENT_FAILED = 'VOTE_COMMENT_FAILED';
export const failedVote = () => ({
  type: VOTE_COMMENT_FAILED,
});

export const persistVoteComment = (
  id,
  voteDirection,
  voteType
) => (dispatch) => {
  persistVote(id, voteDirection, voteType)
    .then(data => dispatch(voteCommentSuccess(data)))
    .catch(error => dispatch(failedVote(error)));
};
