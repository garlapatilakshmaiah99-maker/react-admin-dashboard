import LogoutNavbar from "../components/LogoutNavbar";

import Sidebar from "../components/Sidebar";

import AdminSection from "../components/AdminSection";

function AdminPage() {

    return (

        <div>

            <LogoutNavbar />

            <div className="dashboard-layout">

                <Sidebar />

                <div className="dashboard-container">

                    <AdminSection />

                </div>

            </div>

        </div>
    );
}

export default AdminPage;