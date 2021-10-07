import { useState, useEffect } from 'react'

export const useFavFetch = (props) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);
    async function fetchUsers() {
        setIsLoading(true);
        if (localStorage.getItem(`${props}`)) {
            const response = localStorage.getItem(`${props}`)
            setUsers(JSON.parse(response));
        }
        setIsLoading(false);
    }
    return { users, isLoading, fetchUsers };
}