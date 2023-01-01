import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route path="/order-review" element={<OrderReview />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;