import { labels } from "store/actions/users";

export const users = (state = [], action) => {
  switch (action.type) {
    case labels.REGISTER_SET:
      return [...state, getUserData(action.payload)];
    default:
      return state;
  }
};

const getUserData = (user) => {
  const userData = {};
  Object.keys(user).forEach((key) => {
    userData[key] = user[key].value;
  });
  return userData;
};
