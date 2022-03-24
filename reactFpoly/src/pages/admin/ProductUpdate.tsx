import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getOne } from '../../api/products'
import { ProductType } from '../types/products'

type ProductUpdateProps = {
    onUpdate: (products: ProductType) => void
}

type FormEdit = {
    name: string,
    price: number
}

const ProductUpdate = (props: ProductUpdateProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormEdit>()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() =>{
        const getProducts = async () =>{
            const {data} = await getOne(Number(id))
            reset(data)
            
        }
        getProducts()
    }, [])

    const onSubmit: SubmitHandler<FormEdit> = data =>{
        props.onUpdate(data)
        navigate('/admin/products')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name products</label>
                    <input type="text" {...register('name')} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price products</label>
                    <input type="text" {...register('price')} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default ProductUpdate