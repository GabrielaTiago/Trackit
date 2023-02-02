import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  AuthContextProvider,
  ProgressContextProvider,
} from "./shared/contexts";

export function App() {
  return (
    <ProgressContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthContextProvider>
    </ProgressContextProvider>
  );
}
