import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate'


export const Order = () => {
  const [orders, setOrder] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

useEffect (() => {
  getOrder();
},[]);

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

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };
const deleteOrder = async (id_order) =>{
  try {
    await axios.delete(`http://localhost:5000/orders/${id_order}`);
    getOrder();
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='container mx-auto mt-5 px-4'>
      <div className='flex justify-between items-center mb-4'>
    <strong className='text-lg font-semibold'>Order</strong>
    <Link to={`addO`} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Add New</Link>
    </div>
   <div>
    <div>
    <form onSubmit={searchData} className="w-full max-w-lg mb-4">
          <div className="field has-addons">
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find something here..."
              />
            </div>
            <div className="">
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Search
              </button>
            </div>
          </div>
        </form>

    <table className='w-full overflow-x-auto'>
        <thead className='table-auto w-full text-sm text-gray-500 dark:text-gray-400'>
          <tr className='bg-gray-500 text-white text-xs uppercase'>
            <th scope="col" className='border px-6 py-3 text-center text-white'>Id Order</th>
            <th scope="col" className='border px-6 py-3 text-center text-white'>Customer</th>
            <th scope="col" className='border px-6 py-3 text-center text-white'>Project</th>
            <th scope="col" className='border px-6 py-3 text-center text-white'>Order in</th>
            <th scope="col" className='border px-3 py-3 text-center text-white'>Due Date</th> 
            <th scope="col" className='border px-6 py-3 text-center text-white'>Harga Order</th> 
            <th scope="col" className='border px-6 py-3 text-center text-white'>Barang</th> 
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
              <tr key={order.id_order}>
              <td>{index +1}</td>
              <td className='text-center'>{order.customer}</td>
              <td className='text-center'>{order.project}</td>
              <td className='text-center'>{order.order_in}</td>
              <td className='text-center'>{order.order_out}</td>
              <td className='text-center'>{order.harga_order}</td>
              <td className='text-center'>{order.barang}</td>
              <td className='pl-5'>
                <button onClick={()=> deleteOrder(order.id_order)} className='border rounded-md border-slate-300 hover:border-red-600 text-center px-4'>delete</button>
              </td>
             </tr>
          ))}
         
        </tbody>
      </table>

      <div>
        <footer className='flex flex-col items-center mt-8'>
        <p className='mb-2'>
          Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
        </p>
        <p className="has-text-centered has-text-danger">{msg}</p>
        <nav
          className="flex justify-center mt-2" role="navigation" aria-label="pagination"
          key={rows}
        >
          
          <ReactPaginate
            previousLabel={"< Prev"}
            nextLabel={"Next >"}
            pageCount={Math.min(10, pages)}
            onPageChange={changePage}
            containerClassName={"pagination-list"}
            pageLinkClassName={"pagination-link"}
            previousLinkClassName={"pagination-previous"}
            nextLinkClassName={"pagination-next"}
            activeLinkClassName={"pagination-link is-current"}
            disabledLinkClassName={"pagination-link is-disabled"}
          />
        </nav>
        </footer>
        </div>
      </div>
      </div>
      </div>
    
    )
  
}

export default Order;