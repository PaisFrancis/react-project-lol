import { useReducer, useEffect } from "react";
import { ReactNode, createContext } from "react";
import { AppContextModel, AppState } from "../models/context";
import { reducer } from "../reducers/appReducer";

export const AppContext = createContext({} as AppContextModel);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialState: AppState = {
    darkMode: storedDarkMode ? JSON.parse(storedDarkMode) : true,
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(appState.darkMode));
  }, [appState.darkMode]);

  const value = {
    ...appState,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
