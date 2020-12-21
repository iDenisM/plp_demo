export interface ProductType {
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

const SEARCH_MESSAGE = 'SEARCHING'

export interface SearchAction {
  type: typeof SEARCH_MESSAGE,
  payload: string
}

export interface RootState {
  search: string
}