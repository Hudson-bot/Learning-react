import {createContext, useContext} from "react";

//creation of context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:() => {},
    lightTheme: ()=> {},
});

//making aware of everyone about the context
export const ThemeProvider = ThemeContext.Provider;


//and use use context to extract whatever you need
export default function useTheme()
{
    return useContext(ThemeContext);
}

//his custom hook, useTheme, provides an easy way to access the ThemeContext values and functions. Instead of importing useContext and ThemeContext separately in each component, you can simply use useTheme to get the current context values.