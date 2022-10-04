import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import { UsersContextProvider } from "./contexts/Users";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <UsersContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </UsersContextProvider>
    </BrowserRouter>
  );
};

export default App;
