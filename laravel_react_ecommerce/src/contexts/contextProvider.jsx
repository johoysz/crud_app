import { createContext, useContext, useState } from "react";

const stateContext = createContext ({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'John'
    });
    const [token, _setToken] = useState(132); //add random

    const setToken = (token) => {
        _setToken(token);
        token ? localStorage.setItem('ACCESS_TOKEN',token) : localStorage.removeItem('ACCESS_TOKEN');
    }
    return (
        <stateContext.Provider value = {{                           
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </stateContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(stateContext);