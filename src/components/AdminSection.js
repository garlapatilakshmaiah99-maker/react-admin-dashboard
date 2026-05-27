import { useState } from "react";

import { useNavigate } from "react-router-dom";

function AdminSection() {

    const navigate = useNavigate();

    // Signed-up and Add User data stored

    const storedUsers =
        JSON.parse(localStorage.getItem("users")) || [];

    // Store users data in table

    const [users, setUsers] = useState(storedUsers);

    // Search input state

    const [searchValue, setSearchValue] = useState("");

    // Dropdown filter state

    const [filterType, setFilterType] = useState("name");

    // Search Logic

    function searchUser() {

        if (searchValue === "") {

            alert("Please enter search value");

            return;
        }

        const filteredUsers =
            storedUsers.filter(function (user) {

                return (user[filterType] || "")
                    .toLowerCase()
                    .includes(
                        searchValue.toLowerCase()
                    );
            });

        setUsers(filteredUsers);
    }

    // Refresh Logic

    function refreshTable() {

        setSearchValue("");

        setFilterType("name");

        setUsers(storedUsers);
    }

    return (

        <div>

            {/* Top Section */}

            <div className="dashboard-top">

                <button
                    onClick={() =>
                        navigate("/add-details")}
                >
                    Add User
                </button>

            </div>

            {/* Filter Section */}

            <div className="filter-section">

                <select
                    value={filterType}

                    onChange={(e) =>
                        setFilterType(e.target.value)}
                >

                    <option value="name">
                        Search By Name
                    </option>

                    <option value="email">
                        Search By Email
                    </option>

                    <option value="mobile">
                        Search By Mobile
                    </option>

                </select>

                <input
                    type="text"

                    placeholder="Enter search value"

                    value={searchValue}

                    onChange={(e) =>
                        setSearchValue(e.target.value)}
                />

                <button onClick={searchUser}>
                    Search
                </button>

                <button onClick={refreshTable}>
                    Refresh
                </button>

            </div>

            {/* Users Table */}

            <table className="user-table">

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Mobile Number</th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user, index) => (

                        <tr key={index}>

                            <td>{user.name}</td>

                            <td>{user.email}</td>

                            <td>{user.mobile || ""}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default AdminSection;