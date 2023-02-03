import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  AuthContextProvider,
  HabistsContexctProvider,
  ProgressContextProvider,
} from "./shared/contexts";

export function App() {
  return (
    <HabistsContexctProvider>
      <ProgressContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthContextProvider>
      </ProgressContextProvider>
    </HabistsContexctProvider>
  );
}
