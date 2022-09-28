import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserManagement from "./Page/UserManagement/UserManagement";
import LoginPage from "./Page/LoginPage/LoginPage";
import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserManagement />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
