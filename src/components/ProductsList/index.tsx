import Product from "../Product"
import { ProductDataInterface } from "../../AppTypes";

export default function ProductList({ products }: ProductDataInterface) {
  const productsList = products && products.map((product) => <Product key={product.id} product={product} />);

  return (
    <div>
      {productsList}
    </div>
  )
}