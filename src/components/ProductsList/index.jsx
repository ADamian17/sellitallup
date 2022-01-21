import Product from "../Product"

export default function MovieList({ products }) {
  const productsList = products && products.map(product => <Product key={product.id} product={product} />);

  return (
    <div>
      {productsList}
    </div>
  )
}