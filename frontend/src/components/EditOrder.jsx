import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


const EditOrder = () => {

const [id_order, setIdorder] = useState("");
const [customer, setCustomer] = useState("");
const [project, setProject] = useState("Cair");
const [order_in, setOrderin] = useState("");
const [order_out, setOrderout] = useState(""); 
const [harga_order, setHargaorder] = useState(""); 
const [barang, setBarang] = useState(""); 
const navigate = useNavigate();
const {id_orders} = useParams();

useEffect(() =>{
    getOrderById();
}, []);
    
const updateOrder = async (e) =>{
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/orders/${id_order}`,{
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

const getOrderById = async () => {
    const response = await axios.get(`http://localhost:5000/orders/${id_order}`);
    setIdorder(response.data.id_orders);
    setCustomer(response.data.customer);
    setProject(response.data.project);
    setOrderin(response.data.order_in);
    setOrderout(response.data.order_out);
    setHargaorder(response.data.harga_order);
    setBarang(response.data.barang);
};
  return (
    <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto shadow-lg rounded bg-white p-6">
            <form onSubmit={updateOrder} 
            className='space-y-4'>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Id Order</label>
                    <div className="control">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={id_order}
                        onChange={(e) => setIdorder(e.target.value)}
                        placeholder='Id Order'/>
                    </div>
                </div>

                    <div className="field">
                        <label className="label">Project</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                                placeholder='Nama'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Customer</label>
                        <div className="control">
                            <div className='select is-fullwidth'>
                                <input type='text'
                                className='block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500'
                                    value={customer}
                                    onChange={(e) => setCustomer(e.target.value)}
                                    placeholder='Customer'>
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Order In</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={order_in}
                                onChange={(e) => setOrderin(e.target.value)}
                                placeholder='Jumlah'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Order Out</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={order_out}
                                onChange={(e) => setOrderout(e.target.value)}
                                placeholder='Harga'/>
                        </div>
                    </div>
                
                    <div className="field">
                        <label className="label">Harga Order</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={harga_order}
                                onChange={(e) => setHargaorder(e.target.value)}
                                placeholder='Harga'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Barang</label>
                        <div className="control">
                            <input type="text"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={barang}
                                onChange={(e) => setBarang(e.target.value)}
                                placeholder='Barang'/>
                        </div>
                    </div>
                <div className='field'>
                    <button type='submit' className='button is-success'>Update</button>
                </div>

                
                
            </form>
        </div>
    </div>
  )
}

export default EditOrder;