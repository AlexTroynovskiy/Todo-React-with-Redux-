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

const initialState = {
  listTodo: [
    {
      name: 'Learn React',
      status: false,
      id: v4(),
    },
    {
      name: 'Learn Redux',
      status: false,
      id: v4(),
    },
    {
      name: 'Learn Vue',
      status: false,
      id: v4(),
    },
    {
      name: 'Learn Angular',
      status: false,
      id: v4(),
    },
  ],
  showModal: false,
  doneTask: 0,
  term: '',
  searchList: [],
};

export const todoLostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        listTodo: [...state.listTodo, action.payload],
        searchList: [...state.searchList, action.payload],
      };
    case EDIT_ITEM:
      return {
        ...state,
        listTodo: [...state.listTodo].map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
        searchList: [...state.searchList].map((el) =>
          el.id === action.payload.id ? action.payload : el
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        listTodo: [
          ...state.listTodo.filter((item) => item.id !== action.payload),
        ],
        searchList: [
          ...state.searchList.filter((item) => item.id !== action.payload),
        ],
      };
    case DONE_TASK:
      return {
        ...state,
        doneTask: action.payload,
      };
    case OPEN_CLOSE_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case SEARCH_TASK:
      return {
        ...state,
        term: action.payload,
      };
    case SEARCH_LIST:
      return {
        ...state,
        searchList: state.listTodo.filter((item) => {
          return (
            item.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1
          );
        }),
      };
    default:
      return state;
  }
};
