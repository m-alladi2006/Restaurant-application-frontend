import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/PageTransition";
import { FaCheckCircle, FaFire, FaMotorcycle, FaHome, FaBoxOpen } from "react-icons/fa";

function MyOrders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const email = localStorage.getItem("userEmail") || "Guest";
        setUserEmail(email);

        const savedOrders = JSON.parse(localStorage.getItem("restaurant_orders") || "[]");
        // Filter orders for the current user
        const userOrders = savedOrders.filter(o => o.customer === email);
        setOrders(userOrders);
    }, []);

    const getTrackingStep = (status) => {
        if (status === "cancelled") return -1;
        if (status === "completed") return 4;
        if (status === "preparing") return 2;
        if (status === "delivering") return 3;
        return 1; // pending
    };

    return (
        <PageTransition>
            <Navbar />
            <div className="container py-5" style={{ minHeight: '70vh' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="fw-bold" style={{ color: '#1E293B' }}>My Orders</h1>
                    <button className="btn btn-danger rounded-pill px-4" onClick={() => navigate("/menu")}>
                        Order More
                    </button>
                </div>

                {orders.length === 0 ? (
                    <div className="text-center py-5 shadow-sm rounded-4 bg-white border">
                        <FaBoxOpen style={{ fontSize: '4rem', color: '#cbd5e1', marginBottom: '1rem' }} />
                        <h4 className="fw-bold text-secondary">No orders yet</h4>
                        <p className="text-muted">Looks like you haven't placed any orders.</p>
                    </div>
                ) : (
                    <div className="row g-4">
                        {orders.map((order, index) => {
                            const step = getTrackingStep(order.status);
                            const isCancelled = step === -1;

                            return (
                                <div className="col-12" key={index}>
                                    <div className="card shadow-sm border-0 rounded-4 p-4">
                                        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                                            <div>
                                                <h5 className="fw-bold mb-1">{order.id}</h5>
                                                <span className="text-muted small">{order.date}</span>
                                            </div>
                                            <div className="text-end">
                                                <h5 className="fw-bold text-success mb-1">{order.total}</h5>
                                                <span className={`badge rounded-pill bg-${isCancelled ? 'danger' : order.status === 'completed' ? 'success' : 'warning'}`}>
                                                    {order.status.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h6 className="fw-bold text-secondary mb-2">Items:</h6>
                                            <p className="mb-0">{order.items}</p>
                                        </div>

                                        {/* Tracking System UI */}
                                        <div className="bg-light p-4 rounded-4 mt-3">
                                            <h6 className="fw-bold text-center mb-4">Live Order Tracking</h6>
                                            {isCancelled ? (
                                                <div className="text-center text-danger fw-bold">
                                                    Order Cancelled
                                                </div>
                                            ) : (
                                                <div className="d-flex justify-content-between align-items-center position-relative">
                                                    <div className="position-absolute top-50 start-0 w-100 translate-middle-y" style={{ height: '4px', backgroundColor: '#e2e8f0', zIndex: 1 }}>
                                                        <div style={{ 
                                                            height: '100%', 
                                                            backgroundColor: '#dc2626', 
                                                            width: `${((step - 1) / 3) * 100}%`,
                                                            transition: 'width 1s ease-in-out'
                                                        }}></div>
                                                    </div>

                                                    <div className="text-center position-relative" style={{ zIndex: 2 }}>
                                                        <div className="d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm border" style={{ width: '40px', height: '40px', borderColor: step >= 1 ? '#dc2626' : '#e2e8f0' }}>
                                                            <FaCheckCircle color={step >= 1 ? '#dc2626' : '#94a3b8'} />
                                                        </div>
                                                        <small className="d-block mt-2 fw-bold text-secondary">Placed</small>
                                                    </div>

                                                    <div className="text-center position-relative" style={{ zIndex: 2 }}>
                                                        <div className="d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm border" style={{ width: '40px', height: '40px', borderColor: step >= 2 ? '#dc2626' : '#e2e8f0' }}>
                                                            <FaFire color={step >= 2 ? '#dc2626' : '#94a3b8'} />
                                                        </div>
                                                        <small className="d-block mt-2 fw-bold text-secondary">Preparing</small>
                                                    </div>

                                                    <div className="text-center position-relative" style={{ zIndex: 2 }}>
                                                        <div className="d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm border" style={{ width: '40px', height: '40px', borderColor: step >= 3 ? '#dc2626' : '#e2e8f0' }}>
                                                            <FaMotorcycle color={step >= 3 ? '#dc2626' : '#94a3b8'} />
                                                        </div>
                                                        <small className="d-block mt-2 fw-bold text-secondary">On the Way</small>
                                                    </div>

                                                    <div className="text-center position-relative" style={{ zIndex: 2 }}>
                                                        <div className="d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm border" style={{ width: '40px', height: '40px', borderColor: step >= 4 ? '#dc2626' : '#e2e8f0' }}>
                                                            <FaHome color={step >= 4 ? '#dc2626' : '#94a3b8'} />
                                                        </div>
                                                        <small className="d-block mt-2 fw-bold text-secondary">Delivered</small>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <Footer />
        </PageTransition>
    );
}

export default MyOrders;
