import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CreateResume from "./pages/createResume/CreateResume";
import { DataContextProvider } from "./context/DataContext";
import ProtectedRoute from "./comp/ProtectedRoutes";
import AuthScreen from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute components={<Home />} />} />
            <Route path="/create" element={<ProtectedRoute components={<CreateResume />} />} />
            <Route path="/create/:id" element={<ProtectedRoute components={<CreateResume />} />} />
            <Route path="/login" element={<ProtectedRoute components={<AuthScreen />} />} />
          </Routes>
        </Router>
      </DataContextProvider>
    </div>
  );
}

export default App;
