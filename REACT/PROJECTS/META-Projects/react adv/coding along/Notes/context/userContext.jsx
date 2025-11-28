import React,{createContext,useState,useContext} from 'react'


//create the context
const user_Context = createContext(undefined);

//provider component
const UserProvider = ({children}) => {
    const [user,setUser] = useState(undefined);
  return (
    <user_Context.Provider value={{user,setUser}}>
        {children}
    </user_Context.Provider>
  )
}

export default UserProvider;

//custom hook to use the user context
export const useUser = () => {
    return useContext(useContext);
};


/*=================================The APP component=====================*/
// import React from 'react';
// import { UserProvider } from './UserContext';
// import Header from './Header';
// import Page from './Page';

export const App = () => {
    return (
        <UserProvider>
            <Header />
            <Page />
        </UserProvider>
    );
};


