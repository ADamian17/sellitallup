import { useQuery, gql } from '@apollo/client';
import { ProductDataInterface } from '../AppTypes';

/* internal components */
import NewProduct from '../components/NewProduct';
import ProductsList from '../components/ProductsList';

const PRODUCT_QUERY = gql`
  {
    products {
      id
      name
      image
      price
      createdAt
    }
  }
`;

const ProductsPage = () => {
  const { loading, data } = useQuery<ProductDataInterface>(PRODUCT_QUERY);
  console.log({data});
  
  return (
    <>
      <NewProduct />
      {
        loading ?  
        <div>loading...</div> : 
        <ProductsList products={data && data.products} /> 
      }
    </>
  );
}

export default ProductsPage;
