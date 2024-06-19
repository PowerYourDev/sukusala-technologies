import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';


import  SignInPage from "./Pages/SignInPage"
import  HomePage from "./Pages/HomePage"
import PageNotFound from './Components/PageNotFound';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
    <Route  path="*" element={<PageNotFound/>} />
      <Route  path="/" element={<SignInPage/>} />
      <Route path="/homepage" element={<HomePage/>} />
  
    </Routes>
  </Router>
  
    );
}

export default App;
