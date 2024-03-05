import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Alunos from "../pages/Alunos";
import BasePage from "../pages/BasePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="alunos" element={<Alunos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
