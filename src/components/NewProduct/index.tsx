import { useState, FormEvent } from 'react';
import {useMutation, gql} from "@apollo/client";

const PRODUCT_MUTATION = gql`
  mutation(
    $name: String!, 
    $image: String!, 
    $price: Int!
    ) {
    createProduct(name: $name, image: $image, price: $price) {
      id
    }
  }
`;

interface NewProductInterface {
  name: string;
  image: string; 
  price: number;
}

const NewProduct = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)

  const [createProduct, {error}] = useMutation(PRODUCT_MUTATION);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const variables: NewProductInterface = {
      name,
      image,
      price
    }

    return await createProduct({ variables });    
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
