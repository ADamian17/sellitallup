import { useQuery, gql } from '@apollo/client';
import { ProductDataInterface } from '../AppTypes';

/* internal components */
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
      {
        loading ?  
        <div>loading...</div> : 
        <ProductsList products={data && data.products} /> 
      }
    </>
  );
}

export default ProductsPage;
