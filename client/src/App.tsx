import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import InventoriesPage from "./pages/InventoriesPage.tsx/InventoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inventories" element={<InventoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
