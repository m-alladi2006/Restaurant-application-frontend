import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/PageTransition";

function OrderSuccess() {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh', textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '5rem', color: '#2ed573', marginBottom: '1rem' }}>
                    <i className="fas fa-check-circle"></i>
                </div>
                <h1 className="fw-bold" style={{ color: '#1E293B', marginBottom: '1rem' }}>Order Placed Successfully!</h1>
                <p className="text-muted mb-4" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
                    Thank you for your order. Our chefs have received it and are preparing your delicious meal right away!
                </p>
                <button 
                    className="btn px-4 py-2" 
                    style={{ backgroundColor: '#dc2626', color: 'white', fontWeight: 'bold', borderRadius: '30px' }}
                    onClick={() => navigate("/menu")}
                >
                    Back to Menu
                </button>
            </div>
            <Footer />
        </PageTransition>
    );
}

export default OrderSuccess;
