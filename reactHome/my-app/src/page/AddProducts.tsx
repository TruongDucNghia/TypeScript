import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductsType } from '../types/products'

type AddProductsProps = {
    onAdd: (data: ProductsType) => void
}
type FromAdd = {
    name: string,
    price: number
}
const AddProducts = ({onAdd} : AddProductsProps) => {
    const {register, handleSubmit, formState} = useForm<FromAdd>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FromAdd> = (data: ProductsType) =>{
        onAdd(data)
        navigate('/products')
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
        <label htmlFor="name">Name:</label>
        <input type="text" {...register('name')} id="name" /> <br />
        <label htmlFor="price">Price:</label>
        <input type="number" {...register('price')} id="price" />   <br />
        <button>Submit</button> 
    </form>
  )
}

export default AddProducts