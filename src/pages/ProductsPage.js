import LogoutNavbar from "../components/LogoutNavbar";

import Sidebar from "../components/Sidebar";

import ProductsSection from "../components/ProductsSection";

function ProductsPage() {

    return (

        <div>

            <LogoutNavbar />

            <div className="dashboard-layout">

                <Sidebar />

                <div className="dashboard-container">

                    <ProductsSection />

                </div>

            </div>

        </div>
    );
}

export default ProductsPage;