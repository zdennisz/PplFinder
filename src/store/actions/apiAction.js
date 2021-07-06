import { REST_METHODS } from "constant";

export const apiAction = ({
  type = "API",
  url = "",
  method = REST_METHODS.get,
  data = null,
  onSuccess = () => {},
  payload = null,
}) => {
  return {
    type,
    payload,
    metaData: {
      api: {
        url,
        method,
        data,
        onSuccess,
      },
    },
  };
};
