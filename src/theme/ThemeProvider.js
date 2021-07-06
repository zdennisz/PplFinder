import React from "react";
import { createMuiTheme, ThemeProvider as Provider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const ThemeProvider = ({ children }) => {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#84ffff",
          },
          error: {
            main: "#f06292",
          },
        },
      }),
    []
  );

  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
