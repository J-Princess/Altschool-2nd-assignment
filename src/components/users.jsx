import { useState, useEffect } from "react";
import Pagination from "./people";
import User from "./user";
import './style.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //  console.log(data.results)
        setLoading(false);
        setUsers(data.results);
      });
  }, []);

  localStorage.setItem("users", JSON.stringify(users))

  return (
    <div className="container">
    
       {loading ? (
        <h1 className="loading">Loading....</h1>
      ) : (
        <Pagination
          data={users}
          pageLimit={10}
          dataLimit={1}
          UseComponent={User}
        />
      )} 
       
    </div>
  );
};
export default Users;