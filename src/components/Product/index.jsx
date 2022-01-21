import { formatCurrency } from "../../utils"

export default function Product({ product }) {

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
