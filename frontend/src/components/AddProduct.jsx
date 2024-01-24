import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

const [id, setId] = useState("");
const [nama, setNama] = useState("");
const [jenis, setJenis] = useState("Cair");
const [jumlah, setJumlah] = useState("");
const [harga, setHarga] = useState("");
const [ukuran, setUkuran] = useState("");
const [berat, setBerat] = useState("");
const [nama_barang, setNamaBarang] = useState("");


// const [name, setName] = useState([]);
// const [id_vendor, setIdVendor] = useState("");
// const [vendors, setVendors] = useState([]); // Add this line

const navigate = useNavigate();
    

// // Fetch vendors when component mounts
// useEffect(() => {
//     const fetchVendors = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/vendors');
//             setVendors(response.data.result); // Assuming 'result' contains the array of vendors
//         } catch (error) {
//             console.error('Failed to fetch vendors:', error);
//         }
//     };

//     fetchVendors();
// }, []);

const saveProduct = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/products',{
            id,
            nama,
            nama_barang,
            jenis,
            ukuran,
            berat,
            jumlah,
            harga,
            /* id_vendor //tambahan */
        });
        navigate("/products");
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="container mx-auto p-4">
        <div className="static max-w-2xl mx-auto shadow-lg rounded bg-white p-6 ">
            <form onSubmit={saveProduct} 
            className='space-y-4'>
                <div className="flex flex-col space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Id</label>
                    <div className="md:w-2/3">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder='No'/>
                    </div>
                </div>

                    {/* Vendor Dropdown */}
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Vendor</label>
                        <div className="control">
                        <div className="">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={nama_barang}
                        onChange={(e) => setNamaBarang(e.target.value)}
                        placeholder='nama vendor'/>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Nama Barang</label>
                        <div className="control">
                        <div className="">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder='nama vendor'/>
                        </div>
                        </div>
                    </div>
                                                            

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-gray-700">Jenis</label>
                        <div className="control">
                            <div className=''>
                                <select
                                className='block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500' placeholder='Jenis'
                                    value={jenis}
                                    onChange={(e) => setJenis(e.target.value)}>
                                        <option value="Cair">Cair</option>
                                        <option value="Keras">Keras</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 ">
                        <label className="text-sm font-medium text-gray-700l">Ukuran</label>
                        <div className="control">
                        <div className="">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={ukuran}
                        onChange={(e) => setUkuran(e.target.value)}
                        placeholder='nama vendor'/>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 ">
                        <label className="text-sm font-medium text-gray-700">Berat</label>
                        <div className="control">
                        <div className="">
                        <input type="text" 
                        className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" 
                        value={berat}
                        onChange={(e) => setBerat(e.target.value)}
                        placeholder='nama vendor'/>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="label">Jumlah</label>
                        <div className="control">
                            <input type="number"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={jumlah}
                                onChange={(e) => setJumlah(e.target.value)}
                                placeholder='Jumlah'/>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="label">Harga</label>
                        <div className="control">
                            <input type="number"
                                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                                placeholder='Harga'/>
                        </div>
                    </div>
                
                <div className='field'>
                    <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'>Save</button>
                </div>

                
                
            </form>
            </div>
        </div>

  )
}

export default AddProduct