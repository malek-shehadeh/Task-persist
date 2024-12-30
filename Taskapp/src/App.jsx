import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./Context/TaskProvider";
import { FavoritesProvider } from "./Context/FavoritesContext";
import TaskManager from "./Components/Taskmanager/TaskManager";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form/Form";
import AppChat from "./Components/app-chat/AppChat";
import ReduxProvider from "./pages/ReduxFavorites/ReduxProvider";
import ContextFavorites from "./pages/ContextFavorites/FavoritesContext";

const App = () => (
  <TaskProvider>
    <FavoritesProvider>
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/task-manager" element={<TaskManager />} />
            <Route path="/form" element={<Form />} />
            <Route path="/appchat" element={<AppChat />} />
            <Route path="/favorites/redux" element={<ReduxProvider />} />
            <Route path="/favorites/context" element={<ContextFavorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  </TaskProvider>
);

export default App;
