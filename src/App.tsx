import React, { useEffect } from 'react';
import { useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import ProductsPage from './pages/productsPage';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import HomePage from './pages/homePage';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/admin/ProductManager ';
import { ProductType } from './pages/types/products';
import { add, list, remove } from './api/products';
import ProductsAdd from './pages/admin/ProductsAdd';


function App() {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() =>{
    const getProducts = async () =>{
      const {data} = await list()
      setProducts(data)
    }
    getProducts();
  }, [])

  const removeItem = (id) =>{
    remove(id)

    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = (data) =>{
    add(data)

    setProducts([...products, data])
  }
  

  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='/products' element={<ProductsPage/>}>
              <Route index element={<ProductsPage />} />
              <Route path=':id' element={<h1>product details</h1>} />
            </Route>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
          </Route>

          <Route path='admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              <Route path='/admin/products/add' element={<ProductsAdd onAdd={onHandleAdd} />} />
              <Route path="/admin/products" element={<ProductManager products={products} onRemove={removeItem}/>} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
