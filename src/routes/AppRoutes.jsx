import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/common/Home";
import Login from "../pages/common/Login";
import Register from "../pages/common/Register";
import About from "../pages/common/About";
import Contact from "../pages/common/Contact";
import Reservation from "../pages/common/Reservation";
import Menu from "../pages/common/Menu";
import Cart from "../pages/customer/Cart";
import NotFound from "../pages/common/NotFound";
import Payment from "../pages/customer/Payment";
import FloatingAI from "../components/FloatingAI/FloatingAI";

function AppRoutes() {

    const location = useLocation();

    return (
        <>
            <AnimatePresence mode="wait">

                <Routes
                    location={location}
                    key={location.pathname}
                >
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/payment" element={<Payment />} /> 
                   <Route path="*" element={<NotFound />} />
                   {/* <Route path="/order-success" element={<OrderSuccess />} /> */}
                </Routes>

            </AnimatePresence>

            {/* Keep this OUTSIDE AnimatePresence */}
            <FloatingAI />
        </>
    );
}

export default AppRoutes;