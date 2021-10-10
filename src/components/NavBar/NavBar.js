import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";


const NavBar = ({ navigate }) => {
  const [value, setValue] = useState(0);
  const history = useHistory()
  const handleChange = (_e, newValue) => {
    setValue(newValue)
    switch (newValue) {
      case 1:
        history.push("/favorites")
        break;
      default:
        history.push("/")
    }

  };

  useEffect(() => {
    history.push("/")
  }, [])

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} />
        <Tab label="Favorites" index={1} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
