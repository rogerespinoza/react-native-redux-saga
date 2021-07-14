export const actionTypes = {
  USERS_UPDATE: 'USERS_UPDATE',
  USERS_TRY: 'USERS_TRY',
  USERS_SUCCESS: 'USERS_SUCCESS',
  USERS_FAILED: 'USERS_FAILED',
}

export const updateUserData = (data) => ({
  type: actionTypes.USERS_UPDATE,
  payload: data
});

