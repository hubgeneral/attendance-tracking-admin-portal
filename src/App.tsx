import AuthProvider from "./app/contexts/auth-context/AuthContextProvider";
import AppRoutes from "./routing/AppRoutes";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
