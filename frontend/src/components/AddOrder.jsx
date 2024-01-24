import React, { useState, } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddOrder = () => {

const [id_order, setIdorder] = useState("");
const [customer, setCustomer] = useState("");
const [project, setProject] = useState("");
const [order_in, setOrderin] = useState("");
const [order_out, setOrderout] = useState("");
const [harga_order, setHargaorder] = useState("");
const [barang, setBarang] = useState("");
const navigate = useNavigate();
    
const saveOrder = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/orders',{
            id_order,
            customer,
            project,
            order_in,
            order_out,
            harga_order,
            barang
        });
        navigate("/Order");
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto shadow-lg rounded bg-white p-6 mt-10">
            <form onSubmit={saveOrder} 
            className='space-y-6'>
                <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">id_order</label>
                    <div className="control">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={id_order}
                        onChange={(e) => setIdorder(e.target.value)}
                        placeholder='Id Order'/>
                    </div>
                </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Project</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                                placeholder='Customer'/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Customer</label>
                        <div className="control">
                            <div className='text'>
                                <input className='block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500'
                                    value={customer}
                                    onChange={(e) => setCustomer(e.target.value)}
                                    placeholder='Customer'>
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Order In</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={order_in}
                                onChange={(e) => setOrderin(e.target.value)}
                                placeholder='Order In'/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Due Date</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={order_out}
                                onChange={(e) => setOrderout(e.target.value)}
                                placeholder='Order Out'/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Harga Order</label>
                        <div className="control">
                            <input type="number"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={harga_order}
                                onChange={(e) => setHargaorder(e.target.value)}
                                placeholder='Harga Order'/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Barang</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={barang}
                                onChange={(e) => setBarang(e.target.value)}
                                placeholder='Barang'/>
                        </div>
                    </div>
                
                <div className='md:col-span-2 lg:col-span-3 flex justify-center'>
                    <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddOrder