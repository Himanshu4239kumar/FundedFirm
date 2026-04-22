
import './App.css';
import Home from './publics/Home';
import { Route, Routes } from 'react-router-dom';
import Rules from './publics/Rules';
import Insights from './publics/Insights';
import Faq from './publics/Faq';
import Contact from './publics/Contact';
import Login from './publics/Login';
import Register from './publics/Register';

function App() {
  return (

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
        <Route path='/rules'>
          <Route index element={<Rules/>} />
        </Route>
        <Route path='/insights'>
          <Route index element={<Insights/>} />
        </Route>
        <Route path='/faq'>
          <Route index element={<Faq/>} />
        </Route>
        <Route path='/contact'>
          <Route index element={<Contact/>} />
        </Route>
        <Route path='/login'>
          <Route index element={<Login/>} />
        </Route>
        <Route path='/register'>
          <Route index element={<Register/>} />
        </Route>
      </Routes>
    
  );
}

export default App;
