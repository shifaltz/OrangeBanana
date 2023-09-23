import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="home" element= { <Home /> }/>
        <Route path="my-events" element= { <MyEvents /> }/>
      </Route>
    </Routes>
    </>
  )
}

export default App
