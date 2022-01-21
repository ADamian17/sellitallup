import { useQuery, gql } from '@apollo/client';

/* internal components */
import ProductsList from '../components/ProductsList';

interface ProductInterface {
  id: number,
  name: string,
  image: string
  price: number
  creactedAt: string 
}

interface ProductDataInterface {
  products: ProductInterface[]
}

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
