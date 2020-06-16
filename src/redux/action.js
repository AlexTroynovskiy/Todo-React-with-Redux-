import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  OPEN_CLOSE_MODAL,
  DONE_TASK,
  SEARCH_TASK,
  SEARCH_LIST,
} from './actionTypes';
import v4 from 'uuid/dist/esm-browser/v4';

export const addTodoItem = (title) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      name: title,
      status: false,
      id: v4(),
    },
  });
};
export const updateItem = (todo) => (dispatch) => {
  dispatch({
    type: EDIT_ITEM,
    payload: todo,
  });
};
export const deleteTask = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};
export const openCloseModal = (flag) => (dispatch) => {
  dispatch({
    type: OPEN_CLOSE_MODAL,
    payload: flag,
  });
};
export const getSearchTask = (term) => (dispatch) => {
  dispatch({
    type: SEARCH_TASK,
    payload: term,
  });
};
export const getDoneTask = (num) => (dispatch) => {
  dispatch({
    type: DONE_TASK,
    payload: num,
  });
};
export const getSearchList = (searchList) => (dispatch) => {
  dispatch({
    type: SEARCH_LIST,
    payload: searchList,
  });
};
