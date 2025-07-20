import React, { useState, useEffect } from "react";

// component
import UserList from "./UserList";

const FetchAPI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await res.json();
        setUser(result);
        setLoading(false);
      } catch {
        setError("Failed Fecthing API");
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <UserList loading={loading} error={error} user={user} />
    </div>
  );
};

export default FetchAPI;
