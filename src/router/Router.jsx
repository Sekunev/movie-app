import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthProvider from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
};

export default Router;
