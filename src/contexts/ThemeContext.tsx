import { createContext, useReducer, useEffect } from "react";

type ThemeState = {
  theme: "light" | "dark";
};
type SwitchAction = {
  type: "SWITCH" | "SET";
  payload?: "light" | "dark";
};
type ThemeContextValue = {
  state: ThemeState;
  dispatch: React.Dispatch<SwitchAction>;
} | null;
type ThemeContextProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextValue>(null);

const themeReducer = (state: ThemeState, action: SwitchAction): ThemeState => {
  switch (action.type) {
    case "SWITCH":
      localStorage.setItem("theme", state.theme === "light" ? "dark" : "light");
      return { theme: state.theme === "light" ? "dark" : "light" };
    case "SET":
      return { theme: action.payload || "light" };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: "light"
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === 'light' || theme === 'dark') {
      dispatch({ type: "SET", payload: theme });
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
