import LogoutNavbar from "../components/LogoutNavbar";

import Sidebar from "../components/Sidebar";

function Dashboard() {

    return (

        <div>

            <LogoutNavbar />

            <div className="dashboard-layout">

                <Sidebar />

                <div className="dashboard-container">

                    <div className="empty-dashboard">

                        <h1>
                            Dashboard
                        </h1>

                        <p>
                            Please select any option
                            from sidebar.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;