import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import{Toaster} from "react-hot-toast";
import Home2 from './Pages/Home2.jsx';
import NotFound from './Pages/NotFound.jsx';
import Success from './Pages/Success.jsx';
import './App.css'
const App = ()=>{
  return <Router>
<Routes>

  <Route path="/" element={<Home2/>} />
   <Route path="/success" element={<Success/>} />
   <Route path="/*" element={<NotFound/>} />
</Routes>

  <Toaster/>
  </Router>
}
export default App;