
import { IAppState } from './AppStore';
import AppReducerEventType from './AppReducerEventType';

const AppReducer: React.Reducer<IAppState, any> = (state, action) => {
  console.log('REDUCER CALLED: action: ', action);
  console.log('REDUCER CALLED: state: ', state);
  switch (action.type || action.action) {
    
    case AppReducerEventType.DISPLAY_BUTTON_CHILD_ONE_EXCEEDS_MAX:
       
      return {
        ...state,
        displayButtonChildOneExceeds: action?.payload,
      };
    case AppReducerEventType.DISPLAY_BUTTON_CHILD_TWO_EXCEEDS_MAX:
      return {
        ...state,
        displayButtonChildTwoExceeds: action?.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;