"use client"
import { useEffect, useState } from 'react';
import { useRouter,usePathname } from 'next/navigation';
import { getAllUsers } from '../services/userService';

const UsersPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log(router.pathname);
        const fetchUsers = async () => {
            const data = await getAllUsers();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const getPath = () => {
        console.log(pathname);
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={getPath}>Get Path</button>
        </div>
    );
};

export default UsersPage;
