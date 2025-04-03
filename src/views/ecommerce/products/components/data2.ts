// <!-- PageQazaqart -->
import type { productType } from '@/views/ecommerce/products/components/types2'

import product11 from '@/assets/images/products/product-1(1).png'
import product2 from '@/assets/images/products/product-2.png'
import product3 from '@/assets/images/products/product-3.png'
import product4 from '@/assets/images/products/product-4.png'
import product5 from '@/assets/images/products/product-5.png'
import product6 from '@/assets/images/products/product-6.png'
import product12 from '@/assets/images/products/product-1(2).png'

export const products: productType = {
  header: ['Название товара', 'Размер', 'Цвет', 'Категория', 'Цена', 'Наличие', 'Действие'],
  body: [
    {
      id: 1001,
      product: {
        image: product11,
        name: 'Футболка Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'S',
      color: 'Белый',
      category: 'Футболки',
      price: '15.000',
      inventory: 'В наличии'
    },
    {
      id: 1002,
      product: {
        image: product2,
        name: 'Футболка Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'L',
      color: 'Черный',
      category: 'Футболки',
      price: '15.000',
      inventory: 'В наличии'
    },
    {
      id: 1003,
      product: {
        image: product3,
        name: 'Худи Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'M',
      color: 'Серый',
      category: 'Худи',
      price: '20.000',
      inventory: 'В наличии'
    },
    {
      id: 1004,
      product: {
        image: product4,
        name: 'Свитшот Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'L',
      color: 'Белый',
      category: 'Свитшоты',
      price: '18.000',
      inventory: 'Не в наличии'
    },
    {
      id: 1005,
      product: {
        image: product5,
        name: 'Свитшот Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'XL',
      color: 'Серый',
      category: 'Свитшоты',
      price: '18.000',
      inventory: 'В наличии'
    },
    {
      id: 1006,
      product: {
        image: product6,
        name: 'Худи Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'XXL',
      color: 'Черный',
      category: 'Худи',
      price: '20.000',
      inventory: 'Не в наличии'
    },
    {
      id: 1007,
      product: {
        image: product12,
        name: 'Футболка Imperial Мужская',
        caption: 'Хлопок 100%'
      },
      size: 'L',
      color: 'Черный',
      category: 'Футболки',
      price: '15.000',
      inventory: 'В наличии'
    }
  ]
}
