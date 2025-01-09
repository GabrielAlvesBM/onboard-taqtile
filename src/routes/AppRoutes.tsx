import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes;