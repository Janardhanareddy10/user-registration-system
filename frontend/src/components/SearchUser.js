import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/userSlice";

const SearchUser = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleSearch = () => {
    dispatch(fetchUserById(id));
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter User ID" />
      <button onClick={handleSearch}>Search</button>
      {user && <p>{user.name} - {user.age}</p>}
    </div>
  );
};

export default SearchUser;
