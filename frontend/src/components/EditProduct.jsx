import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [ids, setId] = useState("");
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("Cair");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        nama,
        jenis,
        jumlah,
        harga,
      });
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`);
    setId(response.data.id);
    setNama(response.data.nama);
    setJenis(response.data.jenis);
    setJumlah(response.data.jumlah);
    setHarga(response.data.harga);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto shadow-lg rounded bg-white p-6">
        <form onSubmit={updateProduct} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">No</label>
            <div className="control">
              <input type="text" className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
               value={id} onChange={(e) => setId(e.target.value)} placeholder="No" />
            </div>
          </div>

          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
            </div>
          </div>

          <div className="field">
            <label className="label">Jenis</label>
            <div className="control">
              <div className="select is-fullwidth">
                <input className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                value={jenis} onChange={(e) => setJenis(e.target.value)}
                placeholder="Jenis">
                </input>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Jumlah</label>
            <div className="control">
              <input type="text" 
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500" value={jumlah} onChange={(e) => setJumlah(e.target.value)} placeholder="Jumlah" />
            </div>
          </div>

          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input type="text" className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
               value={harga} onChange={(e) => setHarga(e.target.value)} placeholder="Harga" />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
