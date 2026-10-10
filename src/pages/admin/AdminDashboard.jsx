import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    FaUsers, 
    FaShoppingBag, 
    FaUtensils, 
    FaMoneyBillWave,
    FaPlus,
    FaTrash
} from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/PageTransition";
import { getMenu, saveMenu } from "../../utils/menuStorage";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [menuItems, setMenuItems] = useState([]);
    const [recentOrders, setRecentOrders] = useState([]);

    const [newItem, setNewItem] = useState({
        name: "",
        category: "Lunch",
        price: "",
        rating: 5
    });

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdminLoggedIn");
        if (isAdmin !== "true") {
            alert("Access Denied. Please login as admin.");
            navigate("/admin/login");
        } else {
            setMenuItems(getMenu());
            const savedOrders = JSON.parse(localStorage.getItem("restaurant_orders") || "[]");
            setRecentOrders(savedOrders);
        }
    }, [navigate]);

    const handleAddItem = (e) => {
        e.preventDefault();
        const itemToAdd = {
            id: Date.now(),
            name: newItem.name,
            category: newItem.category,
            price: parseFloat(newItem.price),
            rating: newItem.rating
        };
        const updated = [itemToAdd, ...menuItems];
        setMenuItems(updated);
        saveMenu(updated);
        alert("Item added successfully!");
        setNewItem({ ...newItem, name: "", price: "" }); // reset form slightly
    };

    const handleRemoveItem = (id) => {
        if(window.confirm("Are you sure you want to delete this item?")) {
            const updated = menuItems.filter(item => item.id !== id);
            setMenuItems(updated);
            saveMenu(updated);
        }
    };

    const stats = [
        { title: "Total Revenue", value: "₹45,231.89", icon: <FaMoneyBillWave />, class: "icon-revenue" },
        { title: "Total Orders", value: recentOrders.length.toString(), icon: <FaShoppingBag />, class: "icon-orders" },
        { title: "Active Users", value: "892", icon: <FaUsers />, class: "icon-users" },
        { title: "Menu Items", value: menuItems.length.toString(), icon: <FaUtensils />, class: "icon-menu" }
    ];

    return (
        <PageTransition>
            <Navbar />
            <div className="container admin-container my-5">
                <header className="mb-4">
                    <h1 className="fw-bold" style={{ color: "#dc2626" }}>Admin Dashboard</h1>
                    <p className="text-muted">Manage your restaurant operations and menu here.</p>
                </header>

                <div className="row g-4 mb-5">
                    {stats.map((stat, idx) => (
                        <div className="col-md-3" key={idx}>
                            <div className="card shadow-sm border-0 h-100 admin-stat-card-light">
                                <div className="card-body d-flex align-items-center gap-3">
                                    <div className={`stat-icon-wrapper-light ${stat.class}`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h6 className="text-uppercase text-muted mb-1" style={{ fontSize: '12px', fontWeight: 'bold' }}>{stat.title}</h6>
                                        <h4 className="mb-0 fw-bold">{stat.value}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mb-5">
                    {/* Add Menu Item Form */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-header bg-white border-bottom py-3">
                                <h5 className="mb-0 fw-bold text-danger">Add New Menu Item</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleAddItem}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Item Name</label>
                                        <input type="text" className="form-control" value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} required placeholder="e.g. Garlic Naan" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Category</label>
                                        <select className="form-select" value={newItem.category} onChange={(e) => setNewItem({...newItem, category: e.target.value})}>
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Dinner">Dinner</option>
                                            <option value="Dessert">Dessert</option>
                                            <option value="Beverages">Beverages</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Price (₹)</label>
                                        <input type="number" className="form-control" value={newItem.price} onChange={(e) => setNewItem({...newItem, price: e.target.value})} required placeholder="e.g. 150" />
                                    </div>
                                    <button type="submit" className="btn btn-danger w-100 fw-bold"><FaPlus className="me-2"/> Add Item</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items List */}
                    <div className="col-lg-8">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 fw-bold">Manage Menu Items</h5>
                                <span className="badge bg-danger">{menuItems.length} Items</span>
                            </div>
                            <div className="card-body p-0" style={{ maxHeight: '450px', overflowY: 'auto' }}>
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead className="table-light sticky-top">
                                            <tr>
                                                <th className="px-4 py-3">Item</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th className="text-end px-4">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {menuItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="px-4 py-3">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <span className="fw-bold">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td><span className="badge bg-light text-dark border">{item.category}</span></td>
                                                    <td className="fw-bold text-success">₹{item.price}</td>
                                                    <td className="text-end px-4">
                                                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleRemoveItem(item.id)}>
                                                            <FaTrash />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                            {menuItems.length === 0 && (
                                                <tr>
                                                    <td colSpan="4" className="text-center py-5 text-muted">No items in the menu.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Orders List */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="card shadow-sm border-0 h-100">
                            <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 fw-bold">Recent Customer Orders</h5>
                                <span className="badge bg-danger">{recentOrders.length} Orders</span>
                            </div>
                            <div className="card-body p-0" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                <div className="table-responsive">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead className="table-light sticky-top">
                                            <tr>
                                                <th className="px-4 py-3">Order ID</th>
                                                <th>Customer</th>
                                                <th>Items</th>
                                                <th>Total</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentOrders.map((order, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-4 py-3 fw-bold">{order.id}</td>
                                                    <td>{order.customer}</td>
                                                    <td className="text-muted small">{order.items}</td>
                                                    <td className="fw-bold text-success">{order.total}</td>
                                                    <td className="text-muted small">{order.date}</td>
                                                    <td>
                                                        <span className={`badge rounded-pill bg-${order.status === 'completed' ? 'success' : order.status === 'pending' ? 'warning' : 'danger'}`}>
                                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                            {recentOrders.length === 0 && (
                                                <tr>
                                                    <td colSpan="6" className="text-center py-5 text-muted">No recent orders.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </PageTransition>
    );
};

export default AdminDashboard;
