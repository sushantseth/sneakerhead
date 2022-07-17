import 'bootstrap/dist/css/bootstrap.css';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Home from './Home';
// import NewArrival from './renderpage';
import Searchbarpageload from './searchbarpageload';
import {Sneaker,Apparel,Nike,Addidas,NewArrivalpage} from './pageredirection';
import User from './user';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="newarrival" element={<NewArrivalpage />} />
          <Route path="collection/sneakers" element={<Sneaker />} />
          <Route path="collection/apparel" element={<Apparel />} />
          <Route path="brands/nike" element={<Nike />} />
          <Route path="brands/addidas" element={<Addidas />} />
          <Route path="user" element={<User />} />
          <Route path ="search">
          <Route path=":id" element={<Searchbarpageload />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


