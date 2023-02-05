import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  HabistsContexctProvider,
  ProgressContextProvider,
  UserHabistsContexctProvider,
} from "./shared/contexts";

export function App() {
  return (
    <ProgressContextProvider>
      <UserHabistsContexctProvider>
        <HabistsContexctProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </HabistsContexctProvider>
      </UserHabistsContexctProvider>
    </ProgressContextProvider>
  );
}
