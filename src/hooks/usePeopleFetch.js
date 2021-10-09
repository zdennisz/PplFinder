import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = (pageNumber) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  async function fetchUsers() {
    setIsLoading(true);
    const config = {
      params: {
        results: 25,
        page: pageNumber
      }
    }

    const response = await axios.get(`https://randomuser.me/api/`, config);
    setIsLoading(false);
    setUsers(prevState => [...prevState, ...response.data.results]);

  }

  return { users, isLoading, fetchUsers };
};
