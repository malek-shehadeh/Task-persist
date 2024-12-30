import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./Context/TaskProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TaskProvider>
          <App />
        </TaskProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);