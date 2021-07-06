import { useState, useEffect } from "react";
import axios from "axios";
import * as C from "constant";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    const response = await axios.get(
      `https://randomuser.me/api/?results=25&seed=${C.SEED}`
    );
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading };
};
