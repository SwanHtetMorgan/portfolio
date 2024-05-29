import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Animation from './components/Animation/animation';
import Home from './components/home/home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes> 
    </>
  );
}

export default App;
