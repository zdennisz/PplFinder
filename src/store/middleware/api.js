import axios from "axios";

export const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.metaData?.api?.url) {
      return handleApiAction(action, dispatch);
    }
  };

const handleApiAction = (action, dispatch) => {
  return apiRequest(action, dispatch);
};

const apiRequest = async (action, dispatch) => {
  const { url, method, data, onSuccess, headers } = action.metaData.api;
  initializeAxios();
  const response = await axios({ url, method, headers, data });
  const actionData = onSuccess(response.data);
  dispatch({
    ...actionData,
  });
  return actionData.payload;
};

const initializeAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  axios.defaults.headers.common["Content-Type"] = "application/json";
};
