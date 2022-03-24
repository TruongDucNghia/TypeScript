import React from 'react'
import { ProductsType } from '../types/products'

type ListProductsProps = {
  products: ProductsType[],
  onRemove: (id: number) => void
}

const ListProducts = ({products, onRemove}: ListProductsProps) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products?.map((item, index) =>{
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><button onClick={() => onRemove(item.id)}>remove</button></td>
                    </tr>
                  )
                    
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ListProducts