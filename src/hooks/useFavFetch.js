import { useState, useEffect } from 'react'
import { PPL_TO_SAVE } from "../constant";

export const useFavFetch = (props) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const refreshData = (e) => {
        saveUsers(e.detail)
    }
    const saveUsers = (pplToSave) => {
        // Update the users ui
        setUsers(pplToSave)
        // Save to local storage
        localStorage.setItem(PPL_TO_SAVE, JSON.stringify(pplToSave))
    }

    useEffect(() => {
        fetchUsers();

        window.addEventListener('storageItemSet', refreshData)
        return () => window.removeEventListener('storageItemSet', refreshData)
    }, []);

    const fetchUsers = async () => {

        setIsLoading(true);
        if (localStorage.getItem(`${props}`)) {
            const response = localStorage.getItem(`${props}`)
            setUsers(JSON.parse(response));
        }
        setIsLoading(false);
    }
    return { users, isLoading, fetchUsers };
}