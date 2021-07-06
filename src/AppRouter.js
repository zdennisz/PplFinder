import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Users } from "pages";
import { ThemeProvider } from "theme";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
