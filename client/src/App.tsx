import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import InventoriesPage from "./pages/InventoriesPage.tsx/InventoriesPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage/InventoryDetailsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/inventories" element={<InventoriesPage />} />
        <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
