import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './app.css';
// import Nav from './Nav';

import Home from './pages/home';
import Web3 from './pages/superblocks/web3';
import Solana from './pages/superblocks/solana';
import Near from './pages/superblocks/near';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' component={<Home />} />
        {/*<Route path='/web3' component={<Web3 />} />
        <Route path='/solana' component={<Solana />} />
        <Route path='/near' component={<Near />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
