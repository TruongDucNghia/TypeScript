import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate } from 'react-router-dom'
import { ProductType } from '../types/products'
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}

type FormInput = {
    name: string,
    price: number
}

function ProductsAdd(props: ProductAddProps) {
    const { register, handleSubmit, formState} = useForm<FormInput>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormInput> = (data) =>{
        props.onAdd(data)
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

export default ProductsAdd