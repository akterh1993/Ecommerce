import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsImage } from "react-icons/bs";

const AddProduct = () => {
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-between items-center pb-4">
            <h2 className='text-[#d0d2d6] text-xl font-semibold'>Add Product</h2>
            <Link className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2.5" to='/seller/dashboard/products'>All Products</Link>
        </div>
        <div>
          <form>
            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='name'>Product Name</label>
                <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.name} type='text' placeholder='Enter Product name' name='name' id='name' />
              </div>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='brand'>Brand</label>
                <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.brand} type='text' placeholder='Enter Brand name' name='brand' id='brand' />
              </div>
            </div>
            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='name'>Category</label>
                <select
            onChange={(e) => (e.target.value)}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="id">--Select Category--</option>
            <option value="id">Accessories</option>
            <option value="id">Consumer</option>
            <option value="id">Cosmetics</option>
            <option value="id">Electronics</option>
            <option value="id">Man's Fation</option>
            <option value="id">Medicine</option>
            <option value="id">Surgical</option>
            <option value="id">Woman's Fation</option>
          </select>
              </div>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='brand'>Stock</label>
                <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.stock} type='number' placeholder='' name='stock' id='stock' />
              </div>
            </div>
            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='name'>Price</label>
                <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.price} type='number' placeholder='' name='price' id='price' />
              </div>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='discount'>Discount</label>
                <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.discount} type='number' placeholder='' name='discount' id='discount' />
              </div>
            </div>
            <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
              <div className='flex flex-col w-full gap-1'>
                <label htmlFor='description'>Product Description</label>
                <input className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]" onChange={inputHandle} value={state.description} type='text' placeholder='Enter Product description' name='description' id='description' />
              </div>
            </div>
            <div>
            <div>
                    <label className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-500 w-full border-[#d0d2d6] " htmlFor="image" >
                        <span> <BsImage /></span>
                        <span>Select Image</span>
                    </label>
                </div>
                <input className="hidden" type="file" name="image" id="image" />
                <div>
                    <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 my-2.5">Add Product</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
