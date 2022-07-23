import React, {useState} from "react";

//Create theme context
const ThemeContext = React.createContext()

//Create theme provider
function ThemeProvider({children}){
    const [theme, setTheme] = useState('dark');
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
//export the providers
export {ThemeContext,ThemeProvider}