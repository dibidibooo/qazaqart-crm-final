// <!-- PageQazaqart -->
import type { OrderType } from '@/views/ecommerce/orders/components/types'

import product11 from '@/assets/images/products/product-1(1).png'
import product2 from '@/assets/images/products/product-2.png'
import product3 from '@/assets/images/products/product-3.png'
import product4 from '@/assets/images/products/product-4.png'
import product5 from '@/assets/images/products/product-5.png'
import product6 from '@/assets/images/products/product-6.png'
import product12 from '@/assets/images/products/product-1(2).png'
import product13 from '@/assets/images/products/product-1(3).png'

export const orderList: OrderType = {
  header: ['№ Заказа', 'Дата заявки', 'Продукт', 'Имя Фамилия', 'Email', 'Телефон.', 'Адрес', 'Статус'],
  body: [
    {
      orderID: 'RB5625',
      date: '23/07/2024',
      image: product11,
      name: 'Волков Алексей',
      email: 'volkov.alexey@mail.ru',
      phone: '+7(701)-234-56-78',
      address: 'Майлина, 2',
      status: 'Завершено'
    },
    {
      orderID: 'RB0025',
      date: '06/09/2024',
      image: product2,
      name: 'Алимов Нурлан',
      email: 'alimov.nurlan@mail.kz',
      phone: '+7(702)-345-67-89',
      address: 'Абая, 45',
      status: 'В процессе'
    },
    {
      orderID: 'RB9064',
      date: '12/07/2024',
      image: product3,
      name: 'Смирнова Екатерина',
      email: 'smirnova.katerina@gmail.com',
      phone: '+7(703)-456-78-90',
      address: 'Шевченко, 17',
      status: 'Отклонено'
    },
    {
      orderID: 'RB9652',
      date: '31/12/2024',
      image: product4,
      name: 'Иванов Дмитрий',
      email: 'ivanov.dmitry@ya.ru',
      phone: '+7(704)-567-89-01',
      address: 'Сатпаева, 89',
      status: 'Завершено'
    },
    {
      orderID: 'RB5984',
      date: '01/05/2024',
      image: product5,
      name: 'Тулеуова Айжан',
      email: 'tuleuova.aizhan@gmail.kz',
      phone: '+7(705)-678-90-12',
      address: 'Рыскулова, 11',
      status: 'Завершено'
    },
    {
      orderID: 'RB3625',
      date: '12/06/2024',
      image: product6,
      name: 'Бекметов Ержан',
      email: 'bekmetov.erjan@list.ru',
      phone: '+7(701)-123-45-67',
      address: 'Назарбаева, 102',
      status: 'В процессе'
    },
    {
      orderID: 'RB8652',
      date: '14/08/2017',
      image: product12,
      name: 'Жанузакова Динара',
      email: 'januzakova.dinara@yahoo.com',
      phone: '+7(702)-234-56-78',
      address: 'Алтынсарина, 33',
      status: 'В процессе'
    },
    {
      orderID: 'RB1002',
      date: '13/07/2024',
      image: product13,
      name: 'Петров Сергей',
      email: 'petrov.sergey@outlook.com',
      phone: '+7(703)-345-67-89',
      address: 'Толе Би, 59',
      status: 'Отклонено'
    },
    {
      orderID: 'RB9622',
      date: '18/11/2024',
      image: product3,
      name: 'Кузнецова Ольга',
      email: 'kuznetsova.olgа@yahoo.com',
      phone: '+7(704)-456-78-90',
      address: 'Жибек Жолы, 8',
      status: 'Завершено'
    },
    {
      orderID: 'RB8745',
      date: '07/03/2024',
      image: product4,
      name: 'Нурбаев Алмас',
      email: 'nurbaev.almas@bk.ru',
      phone: '+7(705)-567-89-01',
      address: 'Манаса, 24',
      status: 'В процессе'
    }
  ]
}
