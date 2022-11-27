import React, { createContext, useContext } from 'react';
import { usePortfolioReducer } from './reducers';

const PortfolioContext = createContext();
const { Provider } = PortfolioContext;

const PortfolioProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = usePortfolioReducer({
        portfolios: [],
    });

    return <Provider values={[state, dispatch]} {...props}/>
};

const usePortfolioContext = () => {
    return useContext(PortfolioContext);
};

export { PortfolioProvider, usePortfolioContext };