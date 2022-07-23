import React,{useState} from "react";

//Create the context object
const UserContext = React.createContext()

//Create user provider omponent & pass children as props
function UserProvider({children}){
    const [user, setUser] = useState(null);
    return(
        //wrap children using UserContext.provider and pass  a value
        //value is our context data
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
//export the context
export {UserContext,UserProvider}