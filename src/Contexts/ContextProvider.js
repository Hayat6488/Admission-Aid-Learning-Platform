import React, { createContext, useState } from 'react';

export const data = createContext();

const ContextProvider = ({children}) => {

    const [mode, setMode] = useState(true);
    
    const dataInfo = { mode, setMode };

    return (
        <div>
            <data.Provider value={dataInfo}>
                {children}
            </data.Provider>
        </div>
    );
};

export default ContextProvider;