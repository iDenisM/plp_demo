export type ProductType = {
  UPC: string,
  name: string,
  price: {
    current: {
      value: string
    },
    currency: string
  },
  availability: {
    stock: number
  },
  variants: ProductType[]
}