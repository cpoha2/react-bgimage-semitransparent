import React, { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';


/**
 * AppState structure and initial values
 */
export interface IAppState {
  displayButtonChildOneExceeds: boolean;
  displayButtonChildTwoExceeds: boolean;
}
const initialAppState: IAppState = {
  displayButtonChildOneExceeds: false, 
  displayButtonChildTwoExceeds: false,
};

/**
 * Instance of React Context for global AppStore
 */
type IAppContext = [IAppState, React.Dispatch<any>];
const AppContext = createContext<IAppContext>([initialAppState, () => null]);

/**
 * Main global Store as HOC with React Context API
 *
 * import {AppStore} from './store'
 * ...
 * <AppStore>
 *  <App/>
 * </AppStore>
 */
const AppStore: React.FC = ({ children }) => {
  
  const initialState: IAppState = {
    ...initialAppState,
  };
  const value: IAppContext = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * Hook to use the AppStore in functional components
 *
 * import {useAppStore} from './store'
 * ...
 * const [state, dispatch] = useAppStore();
 */
const useAppStore = (): IAppContext => useContext(AppContext);

/**
 * HOC to inject the ApStore to class component, also works for functional components
 *
 * import {withAppStore} from './store'
 * ...
 * class MyComponent
 * ...
 * export default withAppStore(MyComponent)
 */
interface WithAppStoreProps {
  store: object;
}
const withAppStore = (Component: React.ComponentType<WithAppStoreProps>): React.FC => (props) => {
  return <Component {...props} store={useAppStore()} />;
};

export { AppStore, AppContext, useAppStore, withAppStore };