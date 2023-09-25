import React, {useState} from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from '../context/theme-context';

function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <ToggleTheme />
      <TicketControl/>
    </ThemeContext.Provider>
  );
}

export default App;
