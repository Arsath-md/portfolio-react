
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './home';
// import About from './about';

function App() {
  return (
     <>
     <BrowserRouter>
      
      <Routes>
          <Route path='/' element={<Home/>}/>
         
      </Routes>

  </BrowserRouter>
     </>
  )
}

export default App;