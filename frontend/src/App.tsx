import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterEvents from './pages/RegisterEvents';
import MyEvents from './pages/MyEvents';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="" element= { <Home /> }/>
        <Route path="my-events" element= { <MyEvents /> }/>
      </Route>
      <Route path="/login" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      <Route path="/registerEvents" element={ <RegisterEvents /> }/> 
    </Routes>

    </>
  )
}

export default App
