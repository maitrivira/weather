import {
  FETCH_LISTS,
  FETCH_ERROR,
  FETCH_UNDEFINED,
  INCREASE,
} from '../actions/types';

const initialState = {
  items: [],
  error: null,
  loading: true,
  default_margin: true,
  button: false,
  increase: 8,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        // increase: increase + 8
      };
    case FETCH_UNDEFINED:
      console.log('list undefined', action.payload);
      return {
        ...state,
        items: action.payload,
        loading: false,
        default_margin: false,
        button: false,
      };
    case FETCH_LISTS:
      console.log('list reducer', action.payload);
      return {
        ...state,
        items: action.payload,
        loading: false,
        default_margin: false,
        button: true,
      };
    case FETCH_ERROR:
      console.log('error reducer', action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
        default_margin: false,
        button: true,
      };
    default:
      return state;
  }
}
