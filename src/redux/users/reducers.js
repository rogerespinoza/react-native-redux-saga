import { usersTypes } from '../root-actions'

const initialState = {
  dataSource : [
    {
      id: '1',
      name: 'Mike',
      phone: 3234322444,
      email: 'mike@gmail.com',
    },
    {
      id: '2',
      name: 'John',
      phone: 422222222,
      email: 'john@mail.com',
    },
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case usersTypes.USERS_UPDATE:
      return {
        ...state,
        dataSource: action.payload
      }
    case usersTypes.USERS_TRY:
      // console.log(usersTypes.USERS_TRY);
      return {
        ...state,
      }
    case usersTypes.USERS_SUCCESS:
      // console.log(usersTypes.USERS_SUCCESS);
      // console.log(action.payload);
      return {
        ...state,
        dataSource: action.payload
      }
    case usersTypes.USERS_FAILED:
      console.log(usersTypes.USERS_FAILED);
      return {
        ...state,
      }
    default:
      return state;
  }
}