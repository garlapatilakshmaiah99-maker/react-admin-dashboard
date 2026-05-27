import { useEffect, useState } from "react";

function UsersSection() {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    async function fetchUsers(searchText = "") {
        let apiUrl = "https://dummyjson.com/users";

        if (searchText !== "") {
            apiUrl = `https://dummyjson.com/users/search?q=${searchText}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        setUsers(data.users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchUsers(searchValue);
        }, 1000);

        return () => clearTimeout(timer);
    }, [searchValue]);

    return (
        <div className="users-section">
            <h1>User Directory</h1>

            <input
                type="text"
                placeholder="Search user by name"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <div className="users-container">
                {users.map((user) => (
                    <div className="user-card" key={user.id}>
                        <img src={user.image} alt="user" />

                        <div>
                            <h2>
                                {user.firstName} {user.lastName}
                            </h2>

                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Age: {user.age}</p>
                            <p>Gender: {user.gender}</p>
                            <p>Company: {user.company.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersSection;