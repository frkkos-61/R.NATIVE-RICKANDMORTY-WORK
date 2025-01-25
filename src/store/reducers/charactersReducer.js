import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_SINGLECHARACTER,
  SINGLECHARACTER_REJECT,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
 
} from '../types/characterType';

const initialState = {
  charactersList: [],
  sinleCharacter: {},
  pending: false,
  pendingSingleCharacter: false,
  error: null,
  errorSingleCharacter: null,
  params: {
    page: 1,
    status:null,
    gender:null,
    name:null,
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload,
        pending: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        charactersList:[...state.charactersList,...action.payload]
      }  


    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        sinleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case SINGLECHARACTER_REJECT:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.error,
      };
    case RESET_DATA:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        sinleCharacter: {},
      };
    case CHANGE_PARAMS:
      console.log({state,action})
      return {
        ...state,
        
        params: {
          ...state.params,
          ...action.params
        }
      };

    default:
      return state;
  }
};

export default characterReducer;
