import { formatCurrency } from "../../utils"
import { ProductInterface } from "../../AppTypes"

interface ProductProps {
  product: ProductInterface
}

export default function Product({ product }: ProductProps) {

  return (
    <article>
      <h1>{product.name}</h1>

      <figure>
        <img src={product.image} alt="" />
      </figure>

      <p>{formatCurrency(product.price)}</p>
      <small>{product.createdAt}</small>
    </article>
  )
}
