import React, {useState, useEffect} from "react"

import Counter from "./Counter"

export default function () {
  let [products, setProducts] = useState(getProducts())

  const totalPrice = products.reduce((acc, product) => acc + product.cnt * product.price, 0)

  function setProductsCnt(id, cnt) {
    setProducts(products.map(product => product.id !== id ? product : {...product, cnt, total: cnt * product.price}))
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id ))
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
            <td><Counter min={10} current={product.cnt} max={product.rest}
            onChange={(cnt) => setProductsCnt(product.id, cnt)}/></td>
            <td>{product.cnt * product.price}</td>
            <td><button onClick={() => deleteProduct(product.id)}>delete</button></td>
          </tr>

        ))}
        <tr>
          <td><strong>Total:</strong></td>
          <td><strong>{totalPrice}</strong></td>
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
      rest: 100,
      cnt: 20
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 500,
      cnt: 14
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 28,
      cnt: 6
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 81,
      cnt: 1
    }
  ]
}