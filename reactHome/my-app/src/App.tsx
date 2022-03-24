import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddProducts from './page/AddProducts'
import ListProducts from './page/ListProducts'
import { ProductsType } from './types/products'

function App() {
  const [products, setProducts] = useState<ProductsType[]>([])

  useEffect(() =>{
    const handlerListProducts = async () =>{
      const { data } = await axios.get("http://localhost:3001/products")
      setProducts(data)
    }
    handlerListProducts()
  },[])

  const removeItem = (id: number) =>{
    const handlerRemove = async () =>{
      await axios.delete(`http://localhost:3001/products/${id}`)

      const newProducts = products.filter(item => item.id !== id)
      setProducts(newProducts)
      
    }
    handlerRemove()
  }

  const handlerAddProducts = (data:ProductsType) =>{
    const addProducts = async () =>{
      await axios.post("http://localhost:3001/products", data)

      setProducts([...products, data])
    }
    addProducts()
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>hello</h1>}/>
        <Route path='/products' element={<ListProducts products={products} onRemove={removeItem}/>}/>
        <Route path='/products/add' element={<AddProducts onAdd={handlerAddProducts}/>}/>
      </Routes>
    </div>
  )
}

export default App
