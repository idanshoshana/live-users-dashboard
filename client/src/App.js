import Router from './router';
import { AuthProvider } from './store/auth/auth.context';
import { DashboardProvider } from './store/dashboard/dashboard.context';
const App = () => {
  return (
    <AuthProvider>
      <DashboardProvider>
        <Router />
      </DashboardProvider>
    </AuthProvider>
  );
};

export default App;
