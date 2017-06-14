import { combineReducers } from 'redux';

export const INITIAL_OPEN_MODAL = "INITIAL_OPEN_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";
export const SET_MODAL_SELECT_ITEM = "SET_MODAL_SELECT_ITEM";
export const INITIAL_SET_SELECT = "INITIAL_SET_SELECT";
export const SET_MODAL_INPUT_ITEM = "SET_MODAL_INPUT_ITEM";
export const REMOVE_ROW = "REMOVE_ROW";
export const ADD_ROW = "ADD_ROW";


export function initialOpenModal (value) {
  return {
    type: INITIAL_OPEN_MODAL,
    payload: value
  };
}
export function openModal () {
  return {
    type: OPEN_MODAL
  };
}
export function initialSetSelect (data) {
  return {
    type: INITIAL_SET_SELECT,
    payload: data
  };
}

export function setModalSelectItem (data) {
  return {
    type: SET_MODAL_SELECT_ITEM,
    payload: data
  };
}

export function removeRow (index) {
  return {
    type: REMOVE_ROW,
    payload: index
  };
}

export function addRow () {
  return {
    type: ADD_ROW
  };
}

export function setModalInputItem (data) {
  return {
    type: SET_MODAL_INPUT_ITEM,
    payload: data
  };
}



export const actions = {
  initialOpenModal,
  openModal,
  setModalSelectItem,
  setModalInputItem,
  removeRow,
  addRow,
  initialSetSelect
};

const ACTION_HANDLERS = {
  [INITIAL_OPEN_MODAL]: (state, action) => {
    return {
      ...state,
      isOpen: action.payload
    };
  },
  [INITIAL_SET_SELECT]: (state, action)=>{
    return {
        ...state,
      modalItems: action.payload
    }
  },
  [OPEN_MODAL]: (state) => {
    return{
        ...state,
      isOpen: !state.isOpen
    }
  },
  [SET_MODAL_SELECT_ITEM]: (state, action) => {
    let newModalItems = [...state.modalItems];
    newModalItems[action.payload.key].selectActiveItem = action.payload.value;
    return{
        ...state,
      modalItems: newModalItems
    }
  },
  [SET_MODAL_INPUT_ITEM]: (state, action) => {
    let newModalItems = [...state.modalItems];
    newModalItems[action.payload.key].number = action.payload.value;
    return{
      ...state,
      modalItems: newModalItems
    }
  },
  [REMOVE_ROW]: (state, action) => {
    let newModalItems = [...state.modalItems];
    if (!!action.payload) {
      newModalItems.splice(action.payload , 1);
    }
    return {
      ...state,
      modalItems: newModalItems
    }
  },
  [ADD_ROW]: (state) => {
    let newModalItems = [...state.modalItems];
    newModalItems.push({...state.modalItems[0]});
    return{
      ...state,
      modalItems: newModalItems
    }
  }
};


const initialState = {
  isOpen: false,
  modalItems: [
    {
      selectActiveItem: 1,
      selectItems:['Default'],
      number: 0
    }
  ]
};
export  function modalReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}

export const rootReducer = combineReducers({
  modalReducer
});