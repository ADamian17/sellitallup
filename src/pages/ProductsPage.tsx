import { useQuery, gql } from '@apollo/client';
import { ProductDataInterface } from '../AppTypes';

/* internal components */
import ProductsList from '../components/ProductsList';

export const PRODUCT_QUERY = gql`
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
  
  return (
    <>
      {
        loading ?  
        <div>loading...</div> : 
        <ProductsList products={data && data.products} /> 
      }
    </>
  );
}

export default ProductsPage;
