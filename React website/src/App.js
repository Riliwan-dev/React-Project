//  import './App.css';
//  import Navbar from './components/Navbar';
//  import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//      <Navbar/>
//      <Switch>
//       <Route path="/" exact/>
//      </Switch>
//      </BrowserRouter>
//     </>
//   );
// }

// export default App;
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
