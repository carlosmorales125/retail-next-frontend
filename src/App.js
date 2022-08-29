import './App.css';
import { Routes, Route } from "react-router-dom";
import Users from './components/users';
import User from './components/user';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello Users!
      </h1>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/user" element={<User/>} />
      </Routes>
      
    </>
  );
}

export default App;
