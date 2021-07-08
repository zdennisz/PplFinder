import { useState, useEffect } from "react";
import axios from "axios";
import * as C from "constant";

//https://randomuser.me/api/?results=1

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers(page = 1) {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?results=25&seed=${C.SEED}&page=${page}`
    );
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading };
};
