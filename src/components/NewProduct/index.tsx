import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {useMutation, gql} from "@apollo/client";

import { PRODUCT_QUERY } from '../../pages/ProductsPage';
import { ProductInterface, ProductDataInterface } from '../../AppTypes';

const PRODUCT_MUTATION = gql`
  mutation(
    $name: String!, 
    $image: String!, 
    $price: Int!
    ) {
    createProduct(name: $name, image: $image, price: $price) {
      id
      name
      image
      price
      createdAt
    }
  }
`;

interface NewProductInterface {
  name: string;
  image: string; 
  price: number;
}

interface QueryProductsRes {
  products: ProductInterface[]
}

const NewProduct = () => {
  const navigate = useNavigate();
  const [createProduct, {error}] = useMutation(PRODUCT_MUTATION);

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const variables: NewProductInterface = {
      name,
      image,
      price
    }

    await createProduct(
      { 
        variables,
        update(cache, { data: { createProduct } }) {

          const {products}: QueryProductsRes = cache.readQuery({
            query: PRODUCT_QUERY
          }) ?? {
            products: []
          };
    
          cache.writeQuery({
            query: PRODUCT_QUERY,
            data: {
              products: [...products, createProduct]
            }
          });
        },
        onCompleted: () => navigate('/')
      }
    );
  }

  return (
    <form onSubmit={handleSubmit}> 
      <h2>Create New Car</h2>
      {
        error ? 
        <p>Oh no! {error.message}</p> : 
        <p>Success!</p>
      }
      <div>
        <label htmlFor="name">Name</label>

        <input 
          id="name"
          type="text" 
          value={name}
          placeholder="enter product name"
          onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input
          id="image" 
          type="text" 
          value={image}
          placeholder="select product image"
          onChange={(e) => setImage(e.target.value)} />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input 
          id="price"
          type="text" 
          onChange={(e) => setPrice(Number(e.target.value))} />
      </div>

      <input type="submit" value="create new car" />
    </form>
  )
}

export default NewProduct;
