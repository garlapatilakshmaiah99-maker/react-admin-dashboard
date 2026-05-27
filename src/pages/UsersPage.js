import LogoutNavbar from "../components/LogoutNavbar";

import Sidebar from "../components/Sidebar";

import UsersSection from "../components/UsersSection";

function UsersPage() {

    return (

        <div>

            <LogoutNavbar />

            <div className="dashboard-layout">

                <Sidebar />

                <div className="dashboard-container">

                    <UsersSection />

                </div>

            </div>

        </div>
    );
}

export default UsersPage;