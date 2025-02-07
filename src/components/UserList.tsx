import { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    });

    return (
        <div>
            <h2 className="text-danger">Cars List</h2>
            <table className="table table-striped">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>

                </tr>
                <tbody>
                    {
                        users.map((user) => (
                            <li key={user.id}>
                                {user.name}-{user.email}
                            </li>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default UserList;