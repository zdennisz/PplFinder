import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Users } from "pages";
import { ThemeProvider } from "theme";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/users" component={Users} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default AppRouter;
