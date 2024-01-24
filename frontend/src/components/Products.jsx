import React, {useState, useEffect}from 'react'
import axios from "axios";
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom'


export const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProducts();
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

 
const deleteProduct = async (ids) =>{
  try {
    await axios.delete(`http://localhost:5000/products/${ids}`);
    getProducts();
  } catch (error) {
    console.log(error);
  }
}

const totalHarga = products.reduce((acc, product) => acc + parseFloat(product.harga), 0);


  return (
    <div className='container mx-auto my-5 px-4'>
      <div className='flex justify-between items-center mb-4'>
      <strong className='text-2xl font-bold'>Production</strong>
      <Link to={`addP`} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Add New</Link>
      </div>

      <div className="flex flex-col items-center">
      <div className="w-full">
        <section className='mb-8'>
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
        </section>
      
      <div className='overflow-x-auto'>
      <table className='table-auto min-w-full leading-normal overflow-x-auto'>
          <thead className='table-auto w-full text-sm text-gray-500 dark:text-gray-400'>
            <tr className='bg-gray-500 text-white text-xs uppercase'>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Id</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Vendor</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Nama Barang</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Jenis</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Ukuran</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Berat</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Jumlah</th>
              <th scope="col" className='border px-6 py-3 text-center text-white'>Harga</th>
            </tr>
          </thead>
          <tbody>
            {products.map((products) => (
                <tr key={products.id}>
                <td className='text-center'>{products.id}</td>
                <td className='text-center'>{products.nama}</td>
                <td className='text-center'>{products.nama_barang}</td>
                <td className='text-center'>{products.jenis}</td>
                <td className='text-center'>{products.ukuran}</td>
                <td className='text-center'>{products.berat}</td>
                <td className='text-center'>{products.jumlah}</td>
                <td className='text-center'>Rp{products.harga}</td>
                <td className='static'>
                  <Link to={`edit/${products.id}`} className='border rounded-md border-slate-300 hover:border-red-600 text-center px-4 '>edit</Link>
                  <button onClick={()=> deleteProduct(products.id)} className='border rounded-md border-slate-300 hover:border-red-600 text-center px-4'>delete</button>
                </td>
               </tr>
            ))}
          </tbody>
        </table>
        </div>

              {/* Display total product count */}
      
        <div>
          <footer className='flex flex-col items-center mt-8'>
        <p className='mb-2'>
         Page: {rows ? page + 1 : 0} of {pages}
        </p>
        <p className="text-red-600">{msg}</p>
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

export default Products;