import { createContext, useReducer, useContext } from 'react';
import { dashboardReducer } from './dashboard.reducer';

export const DashboardContext = createContext({
  dashboard: {
    posts: [],
  },
  dispatch: () => {},
});

const initialState = {
  posts: [],
};

export const DashboardProvider = (props) => {
  const [dashboard, dispatch] = useReducer(dashboardReducer, initialState);
  const dashboardData = { dashboard, dispatch };

  return <DashboardContext.Provider value={dashboardData} {...props} />;
};

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};
