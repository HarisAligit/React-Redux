import { ThemeContext, themes } from "./ThemeContext";
import React, { useState } from "react";
import ThemedButton from "./contextApi";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

const AppRender = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    let updtheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(updtheme);
  };

  // The ThemedButton button inside the ThemeProvider
  // uses the theme from state while the one outside uses
  // the default dark theme
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Toolbar changeTheme={toggleTheme} />
      </ThemeContext.Provider>
      <ThemedButton />
    </div>
  );
};

export default AppRender;
