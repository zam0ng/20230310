import './App.css';
import { Routes, Route, Navigate ,useNavigate} from 'react-router-dom';
import {LoginBox,SignupBox,BoardBox} from "./components/layout/"
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element={<SignupBox/>}/>
      <Route path = "/login" element={<LoginBox/>}/>
      <Route path = "/board" element={<BoardBox/>}/>
    </Routes>
    </div>
  );
} 

export default App;
