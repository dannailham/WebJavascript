import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Login from "./components/Login";
import Order from "./components/Order";
import AddOrder from "./components/AddOrder";
import Vendor from "./components/Vendor";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import AddVendor from "./components/AddVendor";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route
          path="/"
          element={<Layout />}
          children={
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="Products" element={<Products />} />
              <Route path="/Products/AddP" element={<AddProduct />} />
              <Route path="/Products/Edit/:id" element={<EditProduct />} />
              <Route path="Order" element={<Order />} />
              <Route path="/Order/AddO" element={<AddOrder />} />
              <Route path="Vendor" element={<Vendor />} />
              <Route path="/Vendor/addV" element={<AddVendor />} />
            </>
          }
        />
        <Route path="AddProduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
