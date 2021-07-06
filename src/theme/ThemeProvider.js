import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider as Provider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const ThemeProvider = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? "dark" : "light",
                    primary: {
                        main: "#84ffff",
                    },
                    error: {
                        main: "#f06292",
                    },
                },
            }),
        [prefersDarkMode]
    );

    return (
        <Provider theme={theme}>
            <CssBaseline />
            {children}
        </Provider>
    );
};

export default ThemeProvider;
