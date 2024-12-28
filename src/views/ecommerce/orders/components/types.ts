// <!-- PageQazaqart -->
type TableHeaderType = string[]

export type OrderType = {
  header: TableHeaderType
  body: {
    orderID: string
    date: string
    image: string
    name: string
    email: string
    phone: string
    address: string
    status: 'Завершено' | 'В процессе' | 'Отклонено'
  }[]
}
