import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import { UsersContextProvider } from "./contexts/Users";
import "./App.css";
import { FriendsContextProvider } from "./contexts/Friends";

const App = () => {
  return (
    <BrowserRouter>
      <UsersContextProvider>
        <FriendsContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </FriendsContextProvider>
      </UsersContextProvider>
    </BrowserRouter>
  );
};

export default App;
