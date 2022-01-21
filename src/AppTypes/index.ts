export interface ProductInterface {
  id: number,
  name: string,
  image: string
  price: number
  createdAt: string 
}

export interface ProductDataInterface {
  products: ProductInterface[] | undefined
}