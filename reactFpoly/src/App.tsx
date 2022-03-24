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
import { add, list, remove, updateProducts } from './api/products';
import ProductsAdd from './pages/admin/ProductsAdd';
import ProductUpdate from './pages/admin/ProductUpdate';
import CheckRole from './components/CheckRole';
import Login from './pages/Login';


function App() {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() =>{
    const getProducts = async () =>{
      const {data} = await list()
      setProducts(data)
    }
    getProducts();
  }, [])

  const removeItem = (id: number) =>{
    remove(id)

    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = (data : ProductType) =>{
    add(data)

    setProducts([...products, data])
  }

  const handleUpdate = async (product: ProductType) =>{
    const {data} = await updateProducts(product)

    setProducts(products.map(item => item.id === data.id ? data : item))
  }
  

  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='products'>
              <Route index element={<ProductsPage />} />
              <Route path=':id' element={<h1>product details</h1>} />
            </Route>

            <Route path='about' element={<AboutPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>

          <Route path='admin' element={<CheckRole><AdminLayout/></CheckRole>}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
              {/* router products admin */}
              <Route path='products'>
                  <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
                  <Route path='add' element={<ProductsAdd onAdd={onHandleAdd} />} />
                  <Route path=':id/edit' element={<ProductUpdate onUpdate={handleUpdate}/>} />
              </Route>
      
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
