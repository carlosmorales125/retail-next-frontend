import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/users';

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const usersFromApi = await getUsers();
            setUsers(usersFromApi);
        })();
    }, []);

    return (
        <div className='flex'>
            <ul>
                { users.map((user, index) => {
                    return (
                        <li key={`${index}-user-list-item`}>
                            { user.name }
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Users;