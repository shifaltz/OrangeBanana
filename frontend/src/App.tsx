import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterEvents from './pages/RegisterEvents';
import MyEvents from './pages/MyEvents';
import EventDetailsPage from './pages/EventDetailsPage';
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="" element= { <Home /> }/>
        <Route path="my-events" element= { <MyEvents /> }/>
        <Route path="event-details" element= { <EventDetailsPage /> }/>
        <Route path="/registerEvents" element={ <RegisterEvents /> }/> 
      </Route>
      <Route path="/login" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      
    </Routes>

    </>
  )
}

export default App
