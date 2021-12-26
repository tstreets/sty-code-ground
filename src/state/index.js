import React from 'react';

export const State = React.createContext();

const Provider = ({ children }) => {
    const [state, setState] = React.useState({});
    const stateVals = {
        state,
        setState,
    };
    return <State.Provider value={stateVals}>{children}</State.Provider>;
};

export default Provider;
