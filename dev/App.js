import React, {useState} from "react"

import Counter from "./Counter"

export default function () {
  let [products, setProducts] = useState(getProducts())
  let [totalPrice, setTotalPrice] = useState()

  function getTotalPrice() {
    const initialVal = 0
    const total = products.reduce((acc, curr) => acc + +curr.total, initialVal)
    console.log(total)
  }

  function updateProducts(id, cnt) {
    setProducts(products.map(product => product.id !== id ? product : {...product, cnt, total: cnt * product.price}))

    getTotalPrice()
  }

  return (
    <>
      <h2>Products list</h2>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        {products.map((product, i) => (
          <tr key={product.id}>
            <td>{i + 1}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td><Counter min={1} current={product.cnt} max={product.rest}
                         onChange={(cnt) => updateProducts(product.id, cnt)}/></td>
            <td>{product.total}</td>
          </tr>

        ))}
        <tr>
          <td>Total:</td>
          <td>{totalPrice}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

function getProducts() {
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      cnt: 1
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      cnt: 1
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      cnt: 1
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      cnt: 1
    }
  ]
}