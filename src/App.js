import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import { usersContextProvider } from "./contexts/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
