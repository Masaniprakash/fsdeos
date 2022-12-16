import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Home from "./Pages/Home/Home"
import Plans from './Pages/Plans/Plans';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Home />}/>
                    <Route path="/login" element={<Login /> } />
                    <Route path="/register" element={<Register /> } />
                    <Route path="/plan" element={<Plans /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
