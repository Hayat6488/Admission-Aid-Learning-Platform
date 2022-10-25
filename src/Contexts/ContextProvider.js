import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const SubContext = createContext();

const ContextProvider = ({children}) => {

    const [subjects,setSubjects] = useState([]);

    useEffect(()=> {
        fetch('https://admission-aid-server.vercel.app/subjects')
        .then(res => res.json())
        .then(data => setSubjects(data))
    },[])

    const [mode, setMode] = useState(true);
    
    const dataInfo = { mode, setMode, subjects };

    return (
        <div>
            <SubContext.Provider value={dataInfo}>
                {children}
            </SubContext.Provider>
        </div>
    );
};

export default ContextProvider;