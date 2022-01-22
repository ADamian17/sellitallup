import { Routes, Route} from 'react-router-dom';

import ProductsPage from '../pages/ProductsPage';
import NewProductsPage from '../pages/NewProductsPage';

const PorductRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductsPage />} />
      <Route path='/createproduct' element={<NewProductsPage />} />
    </Routes>
  )
}

export default PorductRoutes;