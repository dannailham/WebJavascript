import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddVendor = () => {

const [id_vendor, setId] = useState("");
const [name, setName] = useState("");
const [person, setPerson] = useState("Cair");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const navigate = useNavigate();
    
const saveVendor = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/vendors',{
            id_vendor,
            name,
            person,
            email,
            phone,
            address
        });
        navigate("/vendor");
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="relative flex justify-center py-4">
        <div className="w-full max-w-2xl">
            <form onSubmit={saveVendor} 
            className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-4 p-6 bg-white'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Id</label>
                    <div className="control">
                        <input type="text" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value={id_vendor}
                        onChange={(e) => setId(e.target.value)}
                        placeholder='Id'/>
                    </div>
                </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
                        <div className="control">
                            <input type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Nama'/>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">person</label>
                        <div className="control">
                            <input type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={person}
                                onChange={(e) => setPerson(e.target.value)}
                                placeholder='Person'/>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <div className="control">
                            <input type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'/>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                        <div className="control">
                            <input type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Phone'/>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                        <div className="control">
                            <input type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder='Address'/>
                        </div>
                    </div>
                
                <div className='md:col-span-2 lg:col-span-3 flex justify-center'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Save</button>
                </div>

                
                
            </form>
        </div>
    </div>
  )
};

export default AddVendor