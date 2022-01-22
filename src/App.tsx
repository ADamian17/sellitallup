import { Link } from 'react-router-dom';

import PorductRoutes from './routes/products.routes'; 

import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>  
          <Link to="/createproduct">Create Product</Link> 
        </nav>
      </header>
      <main>
        <PorductRoutes />
      </main>
    </>
  );
}

export default App;
