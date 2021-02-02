import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../js/actions";
import UserCard from "../UserCard";
import "./style.css";

const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  console.log(users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="users-list">
          {users.map((user, index) => (
            <UserCard user={user} key={index}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
