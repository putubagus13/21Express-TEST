import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import AboutMe from './AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about-me' element={<AboutMe/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;