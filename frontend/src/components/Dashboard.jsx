import React from 'react'
import { FaRegCalendarMinus } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Dashboard = () => {
const [products, setProducts] = useState([]);
const [orders, setOrder] = useState([]);
const [vendors, setVendors] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProducts();
    getOrder();
    getVendors();
  }, [page, keyword]);

  const getProducts = async () => {
    try{
    const response = await axios.get(
      `http://localhost:5000/products?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setProducts(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  } catch (error){
    console.error("Error fetching vendors:", error);
  }
};

  const getOrder = async () =>{
    try{
      const response = await axios.get(
        `http://localhost:5000/orders?search_query=${keyword}&page=${page}&limit=${limit}`
      );
      setOrder(response.data.result);
      setPage(response.data.page);
      setPages(response.data.totalPage);
      setRows(response.data.totalRows);
    } catch (error){
      console.error("Error fetching vendors:", error);
    }
};

    const getVendors = async () => {
        try{
        const response = await axios.get(
          `http://localhost:5000/vendors?search_query=${keyword}&page=${page}&limit=${limit}`
        );
        setVendors(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
      } catch (error){
        console.error("Error fetching vendors:", error);
      }
    };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang Anda cari, silahkan cari data dengan kata kunci spesifik!"
      );
    } else {
      setMsg("");
    }
  };


  const totalHarga = products.reduce((acc, product) => acc + parseFloat(product.harga), 0);
  const totalHarga2 = orders.reduce((acc, order) => acc + parseFloat(order.harga_order), 0);
  /* const totalHarga3 = vendors.reduce((acc, vendor) => acc + parseFloat(vendor.harga), 0); */

  return (
    <div className=''>
                    <Link to="/products">
                    <div  
                        className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#1cc88a] text-[18px] leading-[17px] font-bold'>
                        Total Products: {rows}</h2>
                        <h1 className='text-[#1cc88a] text-[25px] leading-[17px] font-bold'>Total Harga: Rp{totalHarga.toFixed(2)}</h1>
                    </div>
                    
                <td className='text-center'></td>
                    <FaRegCalendarMinus fontSize={28} />
                    </div>
                    </Link>

                    <Link to="/order">
                    <div className='grid grid-cols-4 gap-[2px] mt-[25px] pb-[15px]'>
                <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Total Products: {rows}</h2>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Total Harga: Rp{totalHarga2.toFixed(2)}</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color="" />
                </div>
                    </div>
                    </Link>

                    <Link to="/vendor">
                    <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
                    <div>
                        <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>VENDOR</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
            </Link>
    </div>
                
  )
}

export default Dashboard

