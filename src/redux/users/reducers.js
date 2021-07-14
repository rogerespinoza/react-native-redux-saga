import { actionTypes } from './actions'

const initialState = {
  dataSource : [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERS_UPDATE:
      console.log(action.payload);
      // break; 
      // return state;
      return {
        ...state,
        dataSource: action.payload
      }
    default:
      return state;
  }
}