import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Vendor = () => {
  const [vendors, setVendors] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getVendors();
  }, [page, keyword]);

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

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  
  const deleteVendor = async (id_vendor) =>{
    try {
      await axios.delete(`http://localhost:5000/vendors/${id_vendor}`);
      getVendors();
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="flex justify-between items-center mb-4">
      <strong className='text-lg font-semibold'>Vendor</strong>
      <Link to={`addV`} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Add New</Link>
      </div>

    <div className="flex flex-col items-center">
      <div className="w-full">
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
        <table className="w-full overflow-x-auto">
          <thead className="table-auto w-full text-sm text-gray-500 dark:text-gray-400">
            <tr className="bg-gray-500 text-white text-xs uppercase">
              <th scope="col" className="border px-2 py-1 text-center text-white">ID Vendor</th>
              <th scope="col" className="border px-6 py-3 text-center text-white">Name</th>
              <th scope="col" className="border px-6 py-3 text-center text-white">Person</th>
              <th scope="col" className="border px-6 py-3 text-center text-white">Email</th>
              <th scope="col" className="border px-6 py-3 text-center text-white">Phone</th>
              <th scope="col" className="border px-6 py-3 text-center text-white">Address</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id_vendor}>
                <td className="text-center">{vendor.id_vendor}</td>
                <td className="text-center">{vendor.name}</td>
                <td className="text-center">{vendor.person}</td>
                <td className="text-center">{vendor.email}</td>
                <td className="text-center">{vendor.phone}</td>
                <td className="text-center">{vendor.address}</td>
                <td className="pl-5">
    
    <button onClick={()=> deleteVendor(vendor.id_vendor)} className='border rounded-md border-slate-300 hover:border-red-600 text-center px-4'>delete</button>
    </td>
              </tr>
              
            ))}
            
          </tbody>
          
        </table>
        <div>
          <footer className="flex flex-col items-center mt-8">
        <p className="mb-2">
          Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}
        </p>
        <p className="flex flex-col items-center mt-8">{msg}</p>
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
);
};


export default Vendor;