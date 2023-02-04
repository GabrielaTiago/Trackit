import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  AuthContextProvider,
  HabistsContexctProvider,
  ProgressContextProvider,
  UserHabistsContexctProvider
} from "./shared/contexts";

export function App() {
  return (
    <ProgressContextProvider>
      <UserHabistsContexctProvider>
        <HabistsContexctProvider>
          <AuthContextProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </AuthContextProvider>
        </HabistsContexctProvider>
      </UserHabistsContexctProvider>
    </ProgressContextProvider>
  );
}
