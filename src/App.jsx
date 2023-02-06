import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import {
  HabistsContexctProvider,
  HistoryContextProvider,
  ProgressContextProvider,
  UserHabistsContexctProvider,
} from "./shared/contexts";

export function App() {
  return (
    <ProgressContextProvider>
      <HistoryContextProvider>
        <UserHabistsContexctProvider>
          <HabistsContexctProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </HabistsContexctProvider>
        </UserHabistsContexctProvider>
      </HistoryContextProvider>
    </ProgressContextProvider>
  );
}
