import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api"; // Import the API function

const UserList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };
        getUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
