// <!-- PageQazaqart -->
type TableHeaderType = string[]

export type productType = {
  header: TableHeaderType
  body: {
    id: number
    product: {
      image: string
      name: string
      caption: string
    }
    size: string
    color: string
    category: string
    price: string
    inventory: 'В наличии' | 'Не в наличии'
  }[]
}
